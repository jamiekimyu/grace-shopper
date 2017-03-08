'use strict';

// bcrypt docs: https://www.npmjs.com/package/bcrypt
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const db = require('APP/db');
const WishlistItem = require('./wishlistItem');
const Product = require('./product');

const User = db.define('users', {
	name: Sequelize.STRING,
	email: {
		type: Sequelize.STRING,
		validate: {
			isEmail: true,
			notEmpty: true
		},
		unique: true
	},
	isAdmin: {
		type: Sequelize.BOOLEAN,
		defaultValue: false
	},
	password_reset: {
		type: Sequelize.BOOLEAN,
		defaultValue: false
	},

  // We support oauth, so users may or may not have passwords.
	password_digest: Sequelize.STRING, // This column stores the hashed password in the DB, via the beforeCreate/beforeUpdate hooks
	password: Sequelize.VIRTUAL // Note that this is a virtual, and not actually stored in DB
}, {
	indexes: [{fields: ['email'], unique: true}],
	hooks: {
		beforeCreate: setEmailAndPassword,
		beforeUpdate: setEmailAndPassword,
	},
	instanceMethods: {
    // This method is a Promisified bcrypt.compare
		authenticate(plaintext) {
			return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) =>
            err ? reject(err) : resolve(result))
        );
		}
	},
	defaultScope: {
		include: [
			{
				model: WishlistItem,
				include: [Product]
			}
		]
	}
});

function setEmailAndPassword(user) {
	user.email = user.email && user.email.toLowerCase();
	if (!user.password) return Promise.resolve(user);

	return new Promise((resolve, reject) =>
	  bcrypt.hash(user.get('password'), 10, (err, hash) => {
		  if (err) reject(err);
		  user.set('password_digest', hash);
		  user.set('password_reset', false);
		resolve(user);
	  })
  );
}

module.exports = User;
