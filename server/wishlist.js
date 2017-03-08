'use strict';

const db = require('APP/db');
const WishlistItem = db.model('wishlistItem');
const {reqAdmin} = require('./auth.filters');

module.exports = require('express').Router()
	.delete('/:id',	(req, res, next) => (
		WishlistItem.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(() => res.sendStatus(204))
		.catch(next)
	))
	.put('/:id', (req, res, next) => (
		WishlistItem.update(
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
	.post('/', (req, res, next) => (
		WishlistItem.create(
			req.body,
			{
				returning: true
			}
		)
		.then((result) => res.json(result))
		.catch(next)
	));
