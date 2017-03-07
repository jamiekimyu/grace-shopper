import axios from 'axios';

/* ACTION CREATORS */
const RECEIVE_SERVICE = 'RECEIVE_SERVICE';
const recieveService = service => ({
	type: RECEIVE_SERVICE,
	service
});

export const getService = (serviceId) => {

	return dispatch => {
		return axios.get(`/api/services/${serviceId}`)
			.then((response) => {
				dispatch(recieveService(response.data));
			});
	};

};

/* REDUCER */

const singleServiceReducer = (state = {}, action) => {

	switch (action.type) {

	case RECEIVE_SERVICE:
		return action.service;

	default:
		return state;

	}

};

export default singleServiceReducer;
