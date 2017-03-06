import { combineReducers } from 'redux';

import auth from './auth';
import products from './products';
import users from './users';
import records from './records';
import record from './record';
import cart from './cart';

const rootReducer = combineReducers({
	auth,
	users,
	products,
	records,
	record,
	cart
});

export default rootReducer;
