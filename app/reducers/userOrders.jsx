import axios from 'axios';

/* ACTION CREATORS */
const RECEIVE_USER_ORDERS = 'RECEIVE_USER_ORDERS';
const recieveUserOrders = orders => ({
	type: RECEIVE_USER_ORDERS,
	orders
});

export const getUserOrders = (first = true) => {

	return (dispatch, getState) => {
		const {auth} = getState();
		if(auth) {
			return axios.get(`/api/users/${auth.id}/orders`)
				.then((response) => {
					dispatch(recieveUserOrders(response.data || []));
				});
		} else if(first) {
			// Wait a moment to see if the auth loads
			setTimeout(() => dispatch(getUserOrders(false)), 1000);
		}
	};

};

/* REDUCER */

const userOrdersReducer = (state = [], action) => {

	const newState = Object.assign({}, state);

	switch (action.type) {

	case RECEIVE_USER_ORDERS:
		return action.orders;

	default:
		return state;

	}

};

export default userOrdersReducer;
