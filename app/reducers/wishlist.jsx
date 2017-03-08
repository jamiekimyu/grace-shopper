import axios from 'axios';

/* ACTION CREATORS */
const RECEIVE_WISHLIST = 'RECEIVE_WISHLIST';
const receiveEquipment = wishlist => ({
	type: RECEIVE_WISHLIST,
	wishlist
});

export const getWishlist = (id) => {
	return dispatch => {
		return axios.get(`/api/users/${id}/wishlist`)
			.then((response) => {
				dispatch(receiveEquipment(response.data));
			});
	};

};

/* REDUCER */

const wishlistReducer = (state = [], action) => {

	switch (action.type) {

	case RECEIVE_WISHLIST:
		return action.wishlist;

	default:
		return state;

	}

};

export default wishlistReducer;
