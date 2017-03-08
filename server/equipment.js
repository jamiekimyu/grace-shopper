'use strict';

const db = require('APP/db');
const Product = db.model('product');
const Equipment = db.model('equipment');

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
	  Equipment.findAll({
			include: [{
				where: {disabled: false},
				required: true,
				model: Product
			}]
		})
    .then(equipment => res.json(equipment))
    .catch(next))
  .get('/:id', (req, res, next) =>
	  Equipment.findById(req.params.id, {include: [Product]})
    .then(equipment => res.json(equipment))
    .catch(next));
