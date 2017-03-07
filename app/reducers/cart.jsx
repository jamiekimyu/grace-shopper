import axios from 'axios';

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
	(dispatch, getState) => {
		dispatch(addToCartAction(product));
		const {cart} = getState();
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}
);
export const removeFromCart = (product) => (
	(dispatch, getState) => {
		dispatch(removeFromCartAction(product));
		const {cart} = getState();
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}
);
export const setItemQuantity = (product, quantity) => (
	(dispatch, getState) => {
		if (quantity == 0) {
			dispatch(removeFromCartAction(product));
		} else {
			dispatch(setItemQuantityAction(product, quantity));
		}
		const {cart} = getState();
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}
);

export const loadCart = () => (
	(dispatch) => {
		let cartJSON = window.localStorage.getItem('cart');
		dispatch(setCart(JSON.parse(cartJSON) || [] ));
	}
);

export const convertToOrder = () => (
	(dispatch, getState) => {
		const {cart, user, auth, address} = getState();
		axios.post('/api/order', {
			user_id: auth && auth.id,
			orderItem: cart.map((item) => ({
				quantity: item.quantity,
				product_id: item.product.id
			})),
			email: auth ? undefined : user.email,
			address: {
				name: address.name,
				street1: address.line1,
				street2: address.line2,
				state: address.state,
				city: address.city,
				zip: address.zip
			}
		})
		.then(() => {
			dispatch(setCart([]));
			window.localStorage.setItem('cart', JSON.stringify([]));
		})
		.catch(console.error.bind(console));
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
