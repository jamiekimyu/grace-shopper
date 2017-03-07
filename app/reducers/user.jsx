import { AUTHENTICATED } from './auth';

//ACTION TYPE
const USER_CHANGE = 'USER_CHANGE';

//ACTION CREATOR
export const userChange = (user) => ({
	type: USER_CHANGE,
	user
});


//THUNK



//REDUCER
export default (state = {loggedIn: false}, action) => {

	switch (action.type) {
	case USER_CHANGE:
		return action.user;

	case AUTHENTICATED:
		return {
			loggedIn: !!action.user,
			email: action.user ? action.user.email : ''
		};

	default:
		return state;
	}

};
