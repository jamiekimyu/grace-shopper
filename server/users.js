'use strict';

const db = require('APP/db');
const User = db.model('users');
const Order = db.model('order');
const OrderItem = db.model('orderItem');
const Product = db.model('product');
const Record = db.model('record');
const Service = db.model('service');
const OAuth = db.model('oauths');

const {mustBeLoggedIn, reqAdmin, reqAdminOrSelf} = require('./auth.filters');

module.exports = require('express').Router()
	.get('/', reqAdmin('only admins can list users'), (req, res, next) =>
		User.findAll({
			attributes: [
				'name', 'email', 'isAdmin', 'created_at', 'id', 'updated_at'
			],
			include: [OAuth]
		})
			.then(users => res.json(users))
			.catch(next))
	.post('/', (req, res, next) =>
		User.create(req.body)
			.then(user => res.status(201).json(user))
			.catch(next))
	.get('/:id', reqAdminOrSelf('only admins can read users'), (req, res, next) =>
		User.findById(
			req.params.id,
			{
				attributes: [
					'name',
					'email',
					'isAdmin',
					'created_at',
					'id',
					'updated_at'
				]
			}
		)
			.then(user => res.json(user))
			.catch(next))
	.get('/:id/orders', reqAdminOrSelf('only admins can read users'), (req, res, next) =>
		Order.findAll(
			{
				where: {user_id: req.params.id},
				include: [{
					model: OrderItem,
					include: [{
						model: Product,
						include: [Record, Service]
					}]
				}]
			}
		)
			.then(orders => res.json(orders))
			.catch(next))
	.delete('/:id',	reqAdmin('only admins can delete users'), (req, res, next) => (
		User.destroy({
			where: {
				id: req.params.id
			}
		})
			.then(() => res.sendStatus(204))
			.catch(next)
	))
	.put('/:id', reqAdminOrSelf('only admins can update users'), (req, res, next) => (
		User.findById(
			req.params.id,
			{
				attributes: [
					'name',
					'email',
					'isAdmin',
					'created_at',
					'id',
					'updated_at'
				]
			}
		)
			.then((user) => {
				// We have to update it this way so that the password virtual triggers
				for (let i in req.body) {
					user[i] = req.body[i];
				}
				return user.save();
			})
			.then((result) => {
				// Don't send the password back
				const retVal = Object.assign({}, result.toJSON());

				delete retVal.password;
				delete retVal.password_digest;

				res.json(retVal);
			})
			.catch(next)
	));
