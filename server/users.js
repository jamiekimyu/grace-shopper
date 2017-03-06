'use strict';

const db = require('APP/db');
const User = db.model('users');

const {mustBeLoggedIn, reqAdmin} = require('./auth.filters');

module.exports = require('express').Router()
	.get('/', reqAdmin('only admins can list users'), (req, res, next) =>
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next))
	.get('/:id', mustBeLoggedIn, (req, res, next) =>
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next));
