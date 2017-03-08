import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* --------COMPONENT-----------*/

export const Review = ({product}) => (
	<div>
		<h2>Reviews</h2>
		<Link className="btn btn-primary style-review-button" to={`/ReviewForm/${product && product.id}`}>Add a Review!</Link>
		<div className="panel panel-default">
			<div className="panel-body">{JSON.stringify(product && product.reviews)}</div>
		</div>
	</div>

);
