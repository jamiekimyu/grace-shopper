const Sequelize = require('sequelize');
const db = require('APP/db');

const wishlistItem = db.define('wishlistItem', {
	quantity: {
		type: Sequelize.INTEGER,
		defaultValue: 1,
		validate: {
			min: 1
		}
	}
}, {});

module.exports = wishlistItem;
