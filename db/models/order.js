const Sequelize = require('sequelize');
const db = require('APP/db');

const Order = db.define('order', {
	status: {
		type: Sequelize.STRING,
		defaultValue: 'Not Shipped'
	}
}, {});

module.exports = Order;
