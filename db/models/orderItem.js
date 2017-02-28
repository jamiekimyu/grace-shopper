const Sequelize = require('sequelize');
const db = require('APP/db');

const orderItem = db.define('orderItem', {
	quantity: {
		type: Sequelize.INTEGER,
		defaultValue: 1,
		validate: {
			min: 1
		}
	},
	price: {
		type: Sequelize.FLOAT,
		defaultValue: 0
	}
}, {});

//Required Task:
//If a user completes an order, that order should keep the price of the item at the
//time when they checked out even if the price of the product later changes

module.exports = orderItem;
