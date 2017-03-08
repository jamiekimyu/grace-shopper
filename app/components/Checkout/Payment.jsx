import React from 'react';
import { connect } from 'react-redux';
import { convertToOrder } from '../../reducers/cart';

/* --------COMPONENT-----------*/

export const Payment = ({checkoutClick}) => (
	<div>
		<a href="#" className="btn btn-primary" onClick={checkoutClick}>Checkout (Free)</a>
	</div>
);

/* --------CONTAINER-----------*/
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
	checkoutClick: (evt) => {
		evt.preventDefault();
		dispatch(convertToOrder(ownProps.cart));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Payment);
