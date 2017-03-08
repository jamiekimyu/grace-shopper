import axios from 'axios';

/* ACTION CREATORS */
const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
const receiveOrders = orders => ({
	type: RECEIVE_ORDERS,
	orders
});

export const getOrders = () => {

	return dispatch => {
		return axios.get('/api/orders')
			.then((response) => {
				dispatch(receiveOrders(response.data));
			});
	};

};

export const changeStatus = (orderId, status) => (
	(dispatch) => (
		axios.put(`/api/orders/${orderId}`, {status})
			.then(() => {
				dispatch(getOrders());
			})
	)
);

/* REDUCER */

const orderReducer = (state = [], action) => {

	const newState = Object.assign({}, state);

	switch (action.type) {

	case RECEIVE_ORDERS:
		return action.orders;

	default:
		return state;

	}

};

export default orderReducer;
