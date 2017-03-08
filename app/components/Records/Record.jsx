import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../reducers/cart';
import { addWishlist } from '../../reducers/auth';
import {Review} from '../Review';

/* --------COMPONENT-----------*/

export const Record = ({record, clickAddToCart, addWishlistClick}) => (
		<div>
			<div className="container-fluid record-page">
				<img src={record.product && record.product.photo} className="img-thumbnail record-image" />
				<h1>Artist: {record.artist}</h1>
				<h1>Album: {record.title}</h1>
				<h1>Release Date: {record.releaseDate}</h1>
				<h1>Genre: {record.genre}</h1>
				<hr />
				<h1>Rating: Add averageRating functionality</h1>
				<h1>Description: {record.product && record.product.description}</h1>
				<h1>Price: {record.product && record.product.price}</h1>
				<button className="btn btn-primary" disabled={record.product && record.product.disabled} type="button" onClick={() => clickAddToCart(record)}>Add to Cart</button>
				<button className="btn background-green" onClick={() => addWishlistClick(record.product)} type="button">Add to Wishlist</button>
			</div>
			<div>
				<Review product={record.product} />
			</div>
		</div>

);

/* --------CONTAINER-----------*/
const mapStateToProps = ({record}) => ({
	record
});

const mapDispatchToProps = (dispatch) => ({
	clickAddToCart: (record) => {
		const product =  Object.assign({}, record.product);
		product.record = Object.assign({}, record);
		delete product.record.product;
		dispatch(addToCart(product));
	},
	addWishlistClick: (product) => {
		dispatch(addWishlist(product));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Record);
