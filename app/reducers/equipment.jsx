import axios from 'axios';

/* ACTION CREATORS */
const RECEIVE_EQUIPMENT = 'RECEIVE_EQUIPMENT';
const receiveEquipment = equipment => ({
	type: RECEIVE_EQUIPMENT,
	equipment
});

export const getEquipment = () => {

	return dispatch => {
		return axios.get('/api/equipment')
			.then((response) => {
				dispatch(receiveEquipment(response.data));
			});
	};

};

/* REDUCER */

const equipmentReducer = (state = [], action) => {

	switch (action.type) {

	case RECEIVE_EQUIPMENT:
		return action.equipment;

	default:
		return state;

	}

};

export default equipmentReducer;
