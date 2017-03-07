import axios from 'axios';

/* ACTION CREATORS */
const RECEIVE_SERVICES = 'RECEIVE_SERVICES';
const receiveServices = services => ({
	type: RECEIVE_SERVICES,
	services
});

export const getServices = () => {

	return dispatch => {
		return axios.get('/api/services')
			.then((response) => {
				dispatch(receiveServices(response.data));
			});
	};

};

/* REDUCER */

const servicesReducer = (state = [], action) => {

	switch (action.type) {

	case RECEIVE_SERVICES:
		return action.services;

	default:
		return state;

	}

};

export default servicesReducer;
