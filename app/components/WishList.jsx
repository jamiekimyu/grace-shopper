import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {updateWishlist, removeWishlist} from '../reducers/auth';

export const WishList = ({auth, wishlist, removeClick, numberChange}) => (
  <div id="wishlistFlyout">
	  <Link to={`/wishlist/${auth.id}`}>Direct Link</Link>
	  <ul>
		  {wishlist.map((item) => (
		    <li key={item.id}>
			    {item.product.name}&nbsp;
			    <input type="number" value={item.quantity} style={{width: '40px'}} onChange={(evt) => numberChange(item.id, evt.target.value)} />&nbsp;
			    <a href="#" onClick={() => removeClick(item.id)}><i className="glyphicon glyphicon-remove" /></a>
		    </li>
		  ))}
	  </ul>
  </div>
);

const mapStateToProps = ({auth}) => ({auth, wishlist: auth.wishlistItems});

const mapDispatchToProps = (dispatch) => ({
	removeClick: (id) => {
		dispatch(removeWishlist(id));
	},
	numberChange: (id, quantity) => {
		dispatch(updateWishlist(id, {quantity}));
	}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishList);
