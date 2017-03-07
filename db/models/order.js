const Sequelize = require('sequelize');
const db = require('APP/db');

const Order = db.define('order', {
	status: {
		type: Sequelize.STRING,
		defaultValue: 'Not Shipped'
	},
	email: {
		type: Sequelize.STRING,
		validate: {
			isEmail: true
		}
	}
}, {});

module.exports = Order;
