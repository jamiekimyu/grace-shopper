//ACTION TYPE
const ADD_TO_CART = 'ADD_TO_CART';
const SET_ITEM_QUANTITY = 'SET_ITEM_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const SET_CART = 'SET_CART';

//ACTION CREATOR
const addToCartAction = (product) => ({
	type: ADD_TO_CART,
	product
});
const setItemQuantityAction = (product, quantity) => ({
	type: SET_ITEM_QUANTITY,
	product,
	quantity
});
const removeFromCartAction = (product) => ({
	type: REMOVE_FROM_CART,
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
export const removeFromCart = (product) => (
	(dispatch, getProps) => {
		dispatch(removeFromCartAction(product));
		const {cart} = getProps();
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}
);
export const setItemQuantity = (product, quantity) => (
	(dispatch, getProps) => {
		if (quantity == 0) {
			dispatch(removeFromCartAction(product));
		} else {
			dispatch(setItemQuantityAction(product, quantity));
		}
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
		return state.concat({
			product: action.product,
			quantity: 1
		});

	case REMOVE_FROM_CART:
		return state.filter((item) => (item.product.id !== action.product.id));

	case SET_ITEM_QUANTITY:
		return state.map((item) => (
			item.product.id !== action.product.id ?
				item :
				Object.assign({}, item, {quantity: action.quantity})
		));

	case SET_CART:
		return action.cart;

	default:
		return state;
	}

};
