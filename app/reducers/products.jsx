import axios from 'axios';

const reducer = (state = [], action) => {
	switch (action.type) {
	case SET_ALL:
		return action.products;
	case DELETE_ONE:
		return state.filter((product) => product.id !== action.productId);
	case CHANGE_ONE:
		return state.map((product) => (
			product.id === action.product.id ?
			action.product :
			product
		));

	case CREATE_ONE:
		const stateSlice = state.slice();
		stateSlice.push(action.product);
		return stateSlice;
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

const CHANGE_ONE = 'PRODUCTS_CHANGE_ONE';
export const changeOne = (product) => ({
	type: CHANGE_ONE,
	product
});

const CREATE_ONE = 'PRODUCTS_CREATE_ONE';
export const createOne = (product) => ({
	type: CREATE_ONE,
	product
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

export const changeProduct = (productId, product) => (
	(dispatch) => (
		axios.put(`/api/products/${productId}`, product)
			.then(({data}) => dispatch(changeOne(data)))
			.catch(() => {
				console.error('Failed to update product', productId, product);
			})
	)
);

export const createProduct = (product) => (
	(dispatch) => {
		// Cleanup
		if(product.primaryCategory === 'Record') {
			delete product.service;
			delete product.equipment;
		} else if(product.primaryCategory === 'Service') {
			delete product.record;
			delete product.equipment;
		} else if(product.primaryCategory === 'Equipment') {
			delete product.service;
			delete product.record;
		}

		axios.post('/api/products', product)
			.then(({data}) => dispatch(createOne(data)))
			.catch(() => {
				console.error('Failed to create product', product);
			})
	}
);

export default reducer;
