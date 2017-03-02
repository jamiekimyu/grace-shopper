'use strict';

const db = require('APP/db');
const Product = db.model('product');
const Record = db.model('record');

module.exports = require('express').Router()
  .get('/', (req, res, next) =>
    Record.findAll()
    .then(records => res.json(records))
    .catch(next))
  .get('/:id', (req, res, next) =>
    Product.findById(req.params.id)
    .then(record => res.json(record))
    .catch(next));
