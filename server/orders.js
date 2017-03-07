'use strict';

const db = require('APP/db');
const Order = db.model('order');
const OrderItem = db.model('orderItem');
const Address = db.model('address');
const Product = db.model('product');
const mailer = require('./mailer');

module.exports = require('express').Router()
	.post('/', (req, res, next) => {
		const payload = Object.assign({}, req.body);

		Product.findAll({
			where: {
				id: {
					$in: payload.orderItems.map((item) => item.product_id)
				}
			}
		}).then((products) => {
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

			console.log(req.user);

			return mailer.sendMail({
				to: order.email || req.user.email,
				subject: 'Order Recieved',
				html: 'Your Order Was Recieved'
			}).then(() => order);
		}).then((order) => res.status(201).json(order)).catch(next);
	});
