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

//Orders must belong to a user OR guest session (authenticated vs unauthenticated)
//not sure how to implement the above task

Review.belongsTo(Product)
Review.belongsTo(User)

module.exports = {User}
