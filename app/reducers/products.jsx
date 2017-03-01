import axios from 'axios';

const reducer = (state = null, action) => {
	switch (action.type) {
	case SET_ALL:
		return action.products;
	default:
		return state;
	}
};

const SET_ALL = 'PRODUCTS_SET_ALL';
export const set = (products) => ({
	type: SET_ALL,
	products
});

export const fetch = () => (
	(dispatch) => (
		axios.get('/api/products')
			.then((products) => dispatch(set(products.data)))
			.catch(() => {
				dispatch(set([]));
				console.error('Failed to fetch products');
			})
	)
);

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
