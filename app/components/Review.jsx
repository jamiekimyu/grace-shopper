import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/* --------COMPONENT-----------*/

export const Review = ({product}) => (
	<div>
		<h2>Reviews</h2>
		<div className="panel panel-default">
			<div className="panel-body">
				<ol>
					{
						product && product.reviews.map((review) => (
							<li key={review.id} className="container-fluid">
								<div>
									Review: {review.comment}
								</div>
								<div>
									Rating: {review.rating}
								</div>
							</li>
						))
					}
				</ol>
			</div>
		</div>
		<Link className="btn btn-primary style-review-button" to={`/ReviewForm/${product && product.id}`}>Add a Review!</Link>
	</div>

);
{/*
	JSON.stringify(product && product.reviews)
	product.reviews.map((review) => (
		<li key={review.id} className="container-fluid">
			<div>
				{review.comment}
			</div>
		</li>
	))
*/}
