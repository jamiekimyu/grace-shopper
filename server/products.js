'use strict';

const db = require('APP/db');
const Product = db.model('product');
const Record = db.model('record');
const Review = db.model('review');
const {reqAdmin} = require('./auth.filters');

module.exports = require('express').Router()
	.get('/', (req, res, next) => (
		Product.findAll({include: [Record]})
			.then((product) => res.json(product))
			.catch(next)
	))
	.delete('/:id',	reqAdmin('only admins can delete products'), (req, res, next) => (
		Product.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(() => res.sendStatus(204))
		.catch(next)
	))
	.put('/:id', reqAdmin('only admins can update products'), (req, res, next) => (
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
	.post('/', reqAdmin('only admins can create products'), (req, res, next) => (
		Product.create(
			req.body,
			{
				returning: true
			}
		)
		.then((result) => res.json(result))
		.catch(next)
	))
	.post('/:productId/review', (req, res, next) => (
		Review.create(
			{
				comment: req.body.review,
				rating: req.body.rating,
				product_id: req.params.productId
			},
			{
				returning: true
			}
		)
		.then((result) => res.json(result))
		.catch(next)
	));
