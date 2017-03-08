'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const OAuth = require('./oauth');
const Product = require('./product');
const Record = require('./record');
const Service = require('./service');
const Order = require('./order');
const Review = require('./review');
const OrderItem = require('./orderItem');
const Address = require('./address');
const Equipment = require('./equipment');
const WishlistItem = require('./wishlistItem');

OAuth.belongsTo(User);
User.hasOne(OAuth);

Product.hasOne(Record, {onDelete: 'CASCADE'});
Record.belongsTo(Product, {onDelete: 'CASCADE'});

Product.hasOne(Service, {onDelete: 'CASCADE'});
Service.belongsTo(Product, {onDelete: 'CASCADE'});

Order.belongsTo(User);
User.hasMany(Order);

OrderItem.belongsTo(Product);
Product.hasMany(OrderItem);

OrderItem.belongsTo(Order);
Order.hasMany(OrderItem);

Review.belongsTo(Product);
Product.hasMany(Review);

Review.belongsTo(User);
User.hasMany(Review);

WishlistItem.belongsTo(User);
User.hasMany(WishlistItem);

WishlistItem.belongsTo(Product);
Product.hasMany(WishlistItem);

Order.belongsTo(Address);
Address.hasMany(Order);

Equipment.belongsTo(Product);
Product.hasMany(Equipment);

module.exports = {User};
