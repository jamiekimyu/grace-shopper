import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addToCart } from '../reducers/cart';
import {Review} from './Review';

/* --------COMPONENT-----------*/

export const Record = ({service, clickAddToCart}) => (
		<div>
			<div className="container-fluid record-page">
				<img src={service.product && service.product.photo} className="img-thumbnail record-image" />
				<h1>Estimated Processing Time: {service.processingTime}</h1>
				<h1>Rating: Add averageRating functionality</h1>
				<h1>Description: {service.product && service.product.description}</h1>
				<h1>Price: {service.product && service.product.price}</h1>
				<button className="btn btn-primary" type="button" disabled={service.product && service.product.disabled} onClick={() => clickAddToCart(service)}>Add to Cart</button>
				<button className="btn background-green" type="button">Add to Wishlist</button>
			</div>
			<div>
				<Review product={service.product} />
			</div>
		</div>

);

/* --------CONTAINER-----------*/
const mapStateToProps = ({service}) => ({
	service
});

const mapDispatchToProps = (dispatch) => ({
	clickAddToCart: (service) => {
		const product =  Object.assign({}, service.product);
		product.record = Object.assign({}, service);
		delete product.record.product;
		dispatch(addToCart(product));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Record);
