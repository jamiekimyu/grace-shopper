'use strict';

const db = require('APP/db');
const Order = db.model('order');
const OrderItem = db.model('orderItem');
const Address = db.model('address');
const Product = db.model('product');
const Record = db.model('record');
const Service = db.model('service');
const Equipment = db.model('equipment');
const User = db.model('users');
const mailer = require('./mailer');
const {reqAdmin} = require('./auth.filters');

module.exports = require('express').Router()
	.get('/', (req, res, next) => (
		Order.findAll({include: [User, {
			model: OrderItem,
			include: [{
				model: Product,
				include: [Record, Service, Equipment]
			}]
		}]})
			.then((orders) => res.json(orders))
			.catch(next)
	))
	.put('/:id', reqAdmin('only admins can update orders'), (req, res, next) => (
		Order.update(
			req.body,
			{
				where: {
					id: req.params.id
				},
				returning: true
			}
		)
			.then((result) => res.json(result[1][0]))
			.catch(next)
	))
	.post('/', (req, res, next) => {
		const payload = Object.assign({}, req.body);

		Product.findAll({
			where: {
				id: {
					$in: payload.orderItems.map((item) => item.product_id)
				}
			}
		}).then((products) => {
			const disabledProduct = products.find((product) => product.disabled);
			if (disabledProduct) throw new Error(`Disabled product found. Product ID: ${disabledProduct.id}`);
			payload.orderItems = payload.orderItems.map((item) => Object.assign({}, item, {
				price: products.find((product) => product.id === item.product_id).price
			}));
			return Order.create(
				payload,
				{
					returning: true,
					include: [OrderItem, Address]
				}
			);
		}).then((order) => {
			return mailer.sendMail({
				to: order.email || req.user.email,
				subject: 'Order Recieved',
				html: 'Your Order Was Recieved'
			}).then(() => order);
		}).then((order) => res.status(201).json(order)).catch(next);
	});
