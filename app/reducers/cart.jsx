//ACTION TYPE
const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const SET_CART = 'SET_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

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

const removeFromCartAction = (product) => ({
	type: REMOVE_FROM_CART,
	product
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
export const removeFromCart = (product) => (
	(dispatch, getProps) => {
		console.log('HERE');
		dispatch(removeFromCartAction(product));
		const {cart} = getProps();
		window.localStorage.setItem('cart', JSON.stringify(cart));
	}
);


//REDUCER
export default (state = [], action) => {

	switch (action.type) {
	case ADD_TO_CART:
		return state.concat(action.product);

  /*case REMOVE_FROM_CART:
	 	let copiedArr = state.slice();
		for(let i = 0; i < copiedArr.length; i++){
			if(copiedArr[i].product.id === action.product.id){
				copiedArr.splice(i, 1);
			}
		}
		return copiedArr;
		*/
	case REMOVE_FROM_CART:
		return state.filter((item) => (item.product.id !== action.product.id));

	case UPDATE_QUANTITY:
		return; /*need to update same-item quantity*/

	case SET_CART:
		return action.cart;

	default:
		return state;
	}

};
