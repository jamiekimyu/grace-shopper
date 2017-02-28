const Sequelize = require('sequelize');
const db = require('APP/db');

const Service = db.define('services', {
  processingTime: Sequelize.STRING
}, {});

module.exports = Service;
