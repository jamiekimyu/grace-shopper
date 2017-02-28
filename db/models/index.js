'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const OAuth = require('./oauth')
const Product = require('./product')
const Record = require('./record')
const Order = require('./order')
const Review = require('./review')

OAuth.belongsTo(User)
User.hasOne(OAuth)

Product.belongsTo(Record)
Record.hasMany(Product)

Order.belongsTo(User)
User.hasMany(Orders)

Review.belongsTo(Product)
Review.belongsTo(User)

module.exports = {User}
