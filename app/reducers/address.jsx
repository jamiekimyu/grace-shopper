//ACTION TYPE
const ADDRESS_CHANGE = 'ADDRESS_CHANGE';

//ACTION CREATOR
export const addressChange = (address) => ({
	type: ADDRESS_CHANGE,
	address
});


//THUNK



//REDUCER
export default (state = {}, action) => {

	switch (action.type) {
	case ADDRESS_CHANGE:
		return action.address;

	default:
		return state;
	}

};
