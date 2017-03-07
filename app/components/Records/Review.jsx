import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* --------COMPONENT-----------*/

export const Review = ({record}) => (
	<div>
		<h2>Reviews</h2>
		<Link className="btn btn-primary style-review-button" to="/ReviewForm">Add a Review!</Link>
		<div className="panel panel-default">
			<div className="panel-body">Review Body</div>
		</div>
	</div>

);

/* --------CONTAINER-----------*/
const mapStateToProps = ({record}) => ({record});

const mapDispatchToProps = (dispatch) => ({
	clickAddToCart: (record) => {
		const product =  Object.assign({}, record.product);
		product.record = Object.assign({}, record);
		delete product.record.product;
		dispatch(addToCart(product));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Review);
