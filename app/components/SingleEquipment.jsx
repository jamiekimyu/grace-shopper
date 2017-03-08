import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addToCart } from '../reducers/cart';
import {Review} from './Review';

/* --------COMPONENT-----------*/

export const SingleEquipment = ({singleEquipment, clickAddToCart}) => (
		<div>
			<div className="container-fluid record-page">
				<img src={singleEquipment.product && singleEquipment.product.photo} className="img-thumbnail record-image" />
				<h1>Rating: Add averageRating functionality</h1>
				<h1>Description: {singleEquipment.product && singleEquipment.product.description}</h1>
				<h1>Weight: {singleEquipment.weight}</h1>
				<h1>Price: {singleEquipment.product && singleEquipment.product.price}</h1>
				<button className="btn btn-primary" type="button" disabled={singleEquipment.product && singleEquipment.product.disabled} onClick={() => clickAddToCart(singleEquipment)}>Add to Cart</button>
				<button className="btn background-green" type="button">Add to Wishlist</button>
			</div>
			<div>
				<Review product={singleEquipment.product} />
			</div>
		</div>

);

/* --------CONTAINER-----------*/
const mapStateToProps = ({singleEquipment}) => ({
	singleEquipment
});

const mapDispatchToProps = (dispatch) => ({
	clickAddToCart: (singleEquipment) => {
		const product =  Object.assign({}, singleEquipment.product);
		product.record = Object.assign({}, singleEquipment);
		delete product.record.product;
		dispatch(addToCart(product));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SingleEquipment);
