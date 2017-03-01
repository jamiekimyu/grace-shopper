'use strict';

const db = require('APP/db');
const Product = db.model('product');
const Record = db.model('record');

module.exports = require('express').Router()
	.get('/', (req, res, next) => (
		Product.findAll({include: [Record]})
			.then((product) => res.json(product))
			.catch(next)
	));
