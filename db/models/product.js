const Sequelize = require('sequelize');
const db = require('APP/db');
const Review = require('./review');

const Product = db.define('product', {
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
	},
	photo: {
		type: Sequelize.STRING,
		defaultValue: 'placeholderURLforPhoto'
	},
	quantity: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 1
	}
}, {
	getterMethods: {
		averageRating: function(){
			return this.getReviews()
				.then((foundReviews) => {
					let total = 0;
					foundReviews.forEach( function(review) {
						total += review.rating;
					});
					let average = total / foundReviews.length;
					return average;
				});
		}
	}
});

module.exports = Product;
