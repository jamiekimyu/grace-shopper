import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {removeFromCart} from '../reducers/cart';

export const Checkout = ({cart, removeFromCartClick}) => (
  <div>
		<table className="admin-table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      {cart.map((item, idx) => (
        <tr key={idx}>
          <td>{item.product.name}</td>
          <td>${item.product.price}</td>
          <td><input type="number" min="0" value="1" className="col-md-2 cart-quantity" /></td>
			    <td><a href="#" onClick={() => removeFromCartClick(item.product)} className="btn btn-primary">Delete</a></td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = ({cart}) => ({cart});

const mapDispatchToProps = (dispatch) => ({
	removeFromCartClick: (product) => dispatch(removeFromCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
