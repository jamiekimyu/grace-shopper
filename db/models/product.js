const Sequelize = require('sequelize');
const db = require('APP/db');
const Review = require('./review');

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  primaryCategory: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Record'
  }
}, {
  getterMethods: {
    averageRating: function(){
      Review.findAll()
            .then((foundReviews) => {
              
            });
    }
  }
});

module.exports = Product;
