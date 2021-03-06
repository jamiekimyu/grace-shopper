const Sequelize = require('sequelize');
const db = require('APP/db');

const Review = db.define('review', {
	rating: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			min: 0,
			max: 5
		}
	},
	comment: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: {
				args: [20, 150]
			}
		}
	}
}, {});

module.exports = Review;
