'use strict';

const db = require('APP/db');
const User = require('./user');
const {expect} = require('chai');

describe('User', () => {

	before('Await database sync', () => db.didSync);
	afterEach('Clear the tables', () => db.truncate({ cascade: true }));

	describe('authenticate(plaintext: String) ~> Boolean', () => {
		it('resolves true if the password matches', () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('ok'))
        .then(result => expect(result).to.be.true));

		it("resolves false if the password doesn't match", () =>
      User.create({ password: 'ok' })
        .then(user => user.authenticate('not ok'))
        .then(result => expect(result).to.be.false));
	});
});
