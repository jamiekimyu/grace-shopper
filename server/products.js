'use strict';

const db = require('APP/db');
const Product = db.model('product');
const Record = db.model('record');

module.exports = require('express').Router()
	.get('/', (req, res, next) => (
		Product.findAll({include: [Record]})
			.then((product) => res.json(product))
			.catch(next)
	))
	.delete('/:id', (req, res, next) => (
		Product.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(() => res.sendStatus(204))
		.catch(next)
	))
	.put('/:id', (req, res, next) => (
		Product.update(
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
		Product.create(
			req.body,
			{
				returning: true
			}
		)
		.then((result) => res.json(result))
		.catch(next)
	));
