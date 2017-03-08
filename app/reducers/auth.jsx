import axios from 'axios';
import { browserHistory } from 'react-router';

//reducer
const reducer = (state = null, action) => {
	switch (action.type) {
		case AUTHENTICATED:
			return action.user;
	}
	return state;
};

//action creator
export const AUTHENTICATED = 'AUTHENTICATED';
export const authenticated = user => ({
	type: AUTHENTICATED, user
});

//thunks
export const login = (username, password) => (
	dispatch =>
		axios.post('/api/auth/login/local',
			{username, password})
			.then(() => dispatch(whoami()))
			.catch(() => dispatch(whoami()))
);

export const register = (username, password) => (
	dispatch =>
		axios.post('/api/users',
			{name: username, email: username, password})
			.then(() => dispatch(login(username, password)))
			.catch(() => dispatch(whoami()))
);

export const logout = () => (
	dispatch =>
		axios.post('/api/auth/logout')
			.then(() => dispatch(whoami()))
			.catch(() => dispatch(whoami()))
);

export const whoami = () => (
	dispatch =>
		axios.get('/api/auth/whoami')
			.then(response => {
				const user = response.data;
				dispatch(authenticated(user));
				if(user.password_reset) {
					browserHistory.push('/user');
				}
			})
			.catch(failed => dispatch(authenticated(null)))
);

export const updateUser = (settings) => (
	(dispatch, getState) => {
		const {auth} = getState();
		axios.put('/api/users/' + auth.id, settings)
			.then(() => dispatch(whoami()))
			.catch(() => dispatch(whoami()));
	}
);

export const addWishlist = (product) => (
	(dispatch, getState) => {
		const {auth} = getState();
		axios.post('/api/wishlist', {user_id: auth.id, product_id: product.id, quantity: 1})
			.then(() => dispatch(whoami()))
			.catch(() => dispatch(whoami()));
	}
);

export const removeWishlist = (id) => (
	(dispatch, getState) => {
		axios.delete(`/api/wishlist/${id}`)
			.then(() => dispatch(whoami()))
			.catch(() => dispatch(whoami()));
	}
);

export const updateWishlist = (id, values) => (
	(dispatch, getState) => {
		axios.put(`/api/wishlist/${id}`, values)
			.then(() => dispatch(whoami()))
			.catch(() => dispatch(whoami()));
	}
);

export default reducer;
