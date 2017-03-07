import { combineReducers } from 'redux';

import auth from './auth';
import products from './products';
import users from './users';
import records from './records';
import record from './record';
import cart from './cart';
import address from './address';
import user from './user';

const rootReducer = combineReducers({
	auth,
	users,
	products,
	records,
	record,
	cart,
	address,
	user
});

export default rootReducer;
