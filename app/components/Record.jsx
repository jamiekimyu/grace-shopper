import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addToCart } from '../reducers/cart';

/* --------COMPONENT-----------*/

export const Record = ({record, clickAddToCart}) => (

			<div className="container-fluid">
				<h4>Record</h4>
				<img src={record.product && record.product.photo} className="img-thumbnail" />
				<h1>Artist: {record.artist}</h1>
				<h1>Album: {record.title}</h1>
				<button className="btn btn-primary" type="button" onClick={() => clickAddToCart(record)}>Add to Cart</button>
			</div>

);

/* --------CONTAINER-----------*/
const mapStateToProps = ({record}) => ({
	record
});

const mapDispatchToProps = (dispatch) => ({
	clickAddToCart: (product) => {
		dispatch(addToCart(product));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Record);