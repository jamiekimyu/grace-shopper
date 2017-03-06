import axios from 'axios';

const reducer = (state = [], action) => {
	switch (action.type) {
	case SET_ALL:
		return action.users;
	case DELETE_ONE:
		return state.filter((user) => user.id !== action.userId);
	case CHANGE_ONE:
		return state.map((user) => (
			user.id === action.user.id ?
			action.user :
				user
		));

	case CREATE_ONE:
		const stateSlice = state.slice();
		stateSlice.push(action.user);
		return stateSlice;
	default:
		return state;
	}
};

const SET_ALL = 'USERS_SET_ALL';
export const set = (users) => ({
	type: SET_ALL,
	users
});

const DELETE_ONE = 'USERS_DELETE_ONE';
export const deleteOne = (userId) => ({
	type: DELETE_ONE,
	userId
});

const CHANGE_ONE = 'USERS_CHANGE_ONE';
export const changeOne = (user) => ({
	type: CHANGE_ONE,
	user
});

const CREATE_ONE = 'USERS_CREATE_ONE';
export const createOne = (user) => ({
	type: CREATE_ONE,
	user
});

export const fetch = () => (
	(dispatch) => (
		axios.get('/api/users')
			.then((users) => dispatch(set(users.data)))
			.catch(() => {
				dispatch(set([]));
				console.error('Failed to fetch users');
			})
	)
);

export const deleteUser = (userId) => (
	(dispatch) => (
		axios.delete(`/api/users/${userId}`)
			.then(() => dispatch(deleteOne(userId)))
			.catch(() => {
				console.error('Failed to delete user', userId);
			})
	)
);

export const changeUser = (userId, user) => (
	(dispatch) => (
		axios.put(`/api/users/${userId}`, user)
			.then(({data}) => dispatch(changeOne(data)))
			.catch(() => {
				console.error('Failed to update user', userId, user);
			})
	)
);

export const createUser = (user) => (
	(dispatch) => (
		axios.post('/api/users', user)
			.then(({data}) => dispatch(createOne(data)))
			.catch(() => {
				console.error('Failed to create user', user);
			})
	)
);

export default reducer;
