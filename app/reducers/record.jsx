import axios from 'axios';

/* ACTION CREATORS */
const RECEIVE_RECORD = 'RECEIVE_RECORD';
const receiveRecord = record => ({
	type: RECEIVE_RECORD,
	record
});

export const getRecord = (recordId) => {

	return dispatch => {
		return axios.get(`/api/records/${recordId}`)
			.then((response) => {
				dispatch(receiveRecord(response.data));
			});
	};

};

/* REDUCER */

const singleRecordReducer = (state = {}, action) => {

	switch (action.type) {

	case RECEIVE_RECORD:
		return action.record;

	default:
		return state;

	}

};

export default singleRecordReducer;
