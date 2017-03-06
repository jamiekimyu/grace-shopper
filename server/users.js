'use strict';

const db = require('APP/db');
const User = db.model('users');
const OAuth = db.model('oauths');

const {mustBeLoggedIn, reqAdmin} = require('./auth.filters');

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
	.get('/:id', mustBeLoggedIn, (req, res, next) =>
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
	.delete('/:id',	reqAdmin('only admins can delete products'), (req, res, next) => (
		User.destroy({
			where: {
				id: req.params.id
			}
		})
			.then(() => res.sendStatus(204))
			.catch(next)
	))
	.put('/:id', reqAdmin('only admins can update products'), (req, res, next) => (
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
