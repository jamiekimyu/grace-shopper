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

const mapDispatchToProps = (dispatch) => ({
	checkoutClick: (evt) => {
		evt.preventDefault();
		dispatch(convertToOrder());
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Payment);
