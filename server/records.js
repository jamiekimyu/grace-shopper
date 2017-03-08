'use strict';

const db = require('APP/db');
const Product = db.model('product');
const Record = db.model('record');
const Review = db.model('review');

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
    Record.findAll({
			include: [{
				where: {disabled: false},
				required: true,
				model: Product
			}]
		})
    .then(records => res.json(records))
    .catch(next))
  .get('/:id', (req, res, next) =>
    Record.findById(req.params.id, {include: [{
			model: Product,
			include: [Review]
		}]})
    .then(record => res.json(record))
    .catch(next));
