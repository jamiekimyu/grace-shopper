import axios from 'axios';

const reducer = (state = [], action) => {
	switch (action.type) {
	case SET_ALL:
		return action.products;
	case DELETE_ONE:
		return state.filter((product) => product.id !== action.productId);
	default:
		return state;
	}
};

const SET_ALL = 'PRODUCTS_SET_ALL';
export const set = (products) => ({
	type: SET_ALL,
	products
});

const DELETE_ONE = 'PRODUCTS_DELETE_ONE';
export const deleteOne = (productId) => ({
	type: DELETE_ONE,
	productId
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

export const deleteProduct = (productId) => (
	(dispatch) => (
		axios.delete(`/api/products/${productId}`)
			.then(() => dispatch(deleteOne(productId)))
			.catch(() => {
				console.error('Failed to delete product', productId);
			})
	)
);

export default reducer;
