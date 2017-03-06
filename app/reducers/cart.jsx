//ACTION TYPE
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const SET_CART = 'SET_CART';

//ACTION CREATOR
const addToCartAction = (product) => ({
	type: ADD_TO_CART,
	product
});
export const addSameItem = (product) => ({
	type: UPDATE_QUANTITY,
	product
});
export const setCart = (cart) => ({
	type: SET_CART,
	cart
});

//THUNK
export const addToCart = (product) => (
	(dispatch, getProps) => {
		dispatch(addToCartAction(product));
		const {cart} = getProps();
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}
);
export const loadCart = () => (
	(dispatch) => {
		let cartJSON = window.localStorage.getItem('cart');
		dispatch(setCart(JSON.parse(cartJSON) || [] ));
	}
);


//REDUCER
export default (state = [], action) => {

	switch (action.type) {
	case ADD_TO_CART:
		return state.concat(action.product);

	case UPDATE_QUANTITY:
		return; /*need to update same-item quantity*/

	case SET_CART:
		return action.cart;

	default:
		return state;
	}

};
