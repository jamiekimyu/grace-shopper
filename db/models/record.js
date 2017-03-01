//model needs record title
const Sequelize = require('sequelize');
const db = require('APP/db');

const Record = db.define('record', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	artist: {
		type: Sequelize.STRING,
		allowNull: false
	},
	releaseDate: {
		type: Sequelize.STRING,
		allowNull: false
	},
	genre: {
		type: Sequelize.STRING,
		allowNull: false
	}
}, {});

module.exports = Record;
