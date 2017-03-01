import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const ShoppingCart = ({cart}) => (
  <div id="cartFlyout">
    <ol className="list-unstyled">
      {cart.map( (item, idx) => (
        <li key={idx} className="container-fluid">
          <div className="col-md-8">{item.product.name}</div>
          <div className="col-md-2 cart-price">${item.product.price}</div>
          <input type="number" min="0" value={item.quantity} className="col-md-2 cart-quantity" />
        </li>
      ))}
    </ol>
    <div className="container-fluid">
      <Link className="btn btn-primary col-md-12">Checkout</Link>
    </div>
  </div>
);

const mapStateToProps = () => ({
  cart: [
    {
      quantity: 100,
      product: {
        name: 'Fuzzy Slippers',
        price: 5
      }
    },
    {
      quantity: 100,
      product: {
        name: 'Hipster Vinyl Records',
        price: 1000
      }
    }
  ]
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart)
