//not using this code for now
const Sequelize = require('sequelize');
const db = require('APP/db');

const Service = db.define('service', {
	processingTime: Sequelize.STRING
}, {});

module.exports = Service;
