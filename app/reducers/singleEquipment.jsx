import axios from 'axios';

/* ACTION CREATORS */
const RECEIVE_SINGLE_EQUIPMENT = 'RECEIVE_SINGLE_EQUIPMENT';
const recieveEquipment = equipment => ({
	type: RECEIVE_SINGLE_EQUIPMENT,
	equipment
});

export const getSingleEquipment = (equipmentId) => {

	return dispatch => {
		return axios.get(`/api/equipment/${equipmentId}`)
			.then((response) => {
				dispatch(recieveEquipment(response.data));
			});
	};

};

/* REDUCER */

const SingleEquipmentReducer = (state = {}, action) => {

	switch (action.type) {

	case RECEIVE_SINGLE_EQUIPMENT:
		return action.equipment;

	default:
		return state;

	}

};

export default SingleEquipmentReducer;
