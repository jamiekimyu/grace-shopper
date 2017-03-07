import React from 'react';
import { connect } from 'react-redux';

/* --------COMPONENT-----------*/

export const ReviewForm = ({record}) => (
	<div>
		<form>
				<div className="form-group">
					<label htmlFor="admin-description">Description</label>
					<textarea
						className="form-control"
						id="admin-description"
						value="write your review here"
					/>
				</div>
		</form>
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
)(ReviewForm);
