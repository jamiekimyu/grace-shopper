const Sequelize = require('sequelize');
const db = require('APP/db');

const Address = db.define('address', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  street1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  street2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zip: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {});

module.exports = Address;
