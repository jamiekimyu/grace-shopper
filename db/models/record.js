//model needs record title
const Sequelize = require('sequelize');
const db = require('APP/db');

const Record = db.define('record', {
	artist: {
		type: Sequelize.STRING,
		allowNull: false
	},
	releaseDate: {
		type: Sequelize.DATE,
		allowNull: false
	},
	genre: {
		type: Sequelize.STRING,
		allowNull: false
	}
}, {});

module.exports = Record;
