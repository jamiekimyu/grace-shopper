const Sequelize = require('sequelize');
const db = require('APP/db');

const PurchaseItem = db.define('purchaseItem', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1
    }
  }
}, {});

module.exports = PurchaseItem;
