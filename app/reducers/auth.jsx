import axios from 'axios';

//reducer
const reducer = (state = null, action) => {
	switch (action.type) {
	case AUTHENTICATED:
		return action.user;
	}
	return state;
};

//action creator
const AUTHENTICATED = 'AUTHENTICATED';
export const authenticated = user => ({
	type: AUTHENTICATED, user
});

//thunks
export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()));

export const register = (username, password) =>
	dispatch =>
		axios.post('/api/users',
			{name: username, email: username, password})
			.then(() => dispatch(login(username, password)))
			.catch(() => dispatch(whoami()));

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()));

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
	const user = response.data;
	dispatch(authenticated(user));
})
      .catch(failed => dispatch(authenticated(null)));

export default reducer;
