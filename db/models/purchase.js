const Sequelize = require('sequelize');
const db = require('APP/db');

const Purchase = db.define('purchase', {
  status: {
    type: Sequelize.STRING,
    defaultValue: 'Not Shipped'
  }
}, {});

module.exports = Purchase;
