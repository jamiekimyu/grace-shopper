//not using this code for now
const Sequelize = require('sequelize');
const db = require('APP/db');

const Equipment = db.define('equipment', {
  weight: Sequelize.STRING
}, {});

module.exports = Equipment;
