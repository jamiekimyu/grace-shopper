import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { removeFromCart, setItemQuantity } from '../../reducers/cart';
import { AddressForm } from './AddressForm';
import { addressChange } from '../../reducers/address';
import { userChange } from '../../reducers/user';
import { CartTable } from './CartTable';
import { UserForm } from './UserForm';
import Payment from './Payment';

export const Checkout = ({cart, removeFromCartClick, itemQuantityChange, addressChangeEvent, address, user, userChangeEvent, isWishlist}) => (
  <div>
    <div className="panel panel-default">
      <div className="panel-heading">Cart</div>
      <div className="panel-body">
        <CartTable {...{itemQuantityChange, removeFromCartClick, cart, isWishlist}} />
      </div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">Address</div>
      <div className="panel-body">
        <AddressForm current={address} addressChange={addressChangeEvent} />
      </div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">User Information</div>
      <div className="panel-body">
        <UserForm current={user} userChange={userChangeEvent} />
      </div>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading">Payment</div>
      <div className="panel-body">
        <Payment cart={cart} />
      </div>
    </div>
  </div>

);

const mapStateToProps = ({cart, address, user}) => ({cart, address, user, isWishlist: false});

const mapDispatchToProps = (dispatch) => ({
	removeFromCartClick: (product) => dispatch(removeFromCart(product)),
	itemQuantityChange: (product, quantity) => (
		dispatch(setItemQuantity(product, quantity))
	),
	addressChangeEvent: (address) => dispatch(addressChange(address)),
	userChangeEvent: (user) => dispatch(userChange(user))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Checkout);

const mapWishStateToProps = ({wishlist, address, user}) => ({cart: wishlist, address, user, isWishlist: true});

const mapWishDispatchToProps = (dispatch) => ({
	removeFromCartClick: () => {/* Changing this shouldn't work for wishlists*/},
	itemQuantityChange: () => {/* Changing this shouldn't work for wishlists*/},
	addressChangeEvent: (address) => dispatch(addressChange(address)),
	userChangeEvent: (user) => dispatch(userChange(user))
});

export const WishlistCart = connect(
	mapWishStateToProps,
	mapWishDispatchToProps
)(Checkout);
