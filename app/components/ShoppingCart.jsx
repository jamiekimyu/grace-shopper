import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setItemQuantity } from '../reducers/cart';

export const ShoppingCart = ({ cart, itemQuantityChange }) => (
  <div id="cartFlyout">
    <ol className="list-unstyled">
      {cart.map((item, idx) => (
        <li key={idx} className="container-fluid">
          <div className="col-md-8">{item.product.name}</div>
          <div className="col-md-2 cart-price">${item.product.price}</div>
          <input
            type="number"
            min="0"
            value={item.quantity}
            className="col-md-2 cart-quantity"
            onChange={(evt) => itemQuantityChange(item.product, evt.target.value)}
          />
        </li>
      ))}
    </ol>
    <div className="container-fluid">
      <Link
        className="btn btn-primary col-md-12"
        to="/Checkout"
        disabled={!cart.length}
      >
        Checkout
      </Link>
    </div>
  </div>
);

const mapStateToProps = ({ cart }) => ({ cart });

const mapDispatchToProps = (dispatch) => ({
	itemQuantityChange: (product, quantity) => (
    dispatch(setItemQuantity(product, quantity))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);