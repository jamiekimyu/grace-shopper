import { combineReducers } from 'redux';

import auth from './auth';
import products from './products';
import records from './records';
import record from './record';
import cart from './cart';

const rootReducer = combineReducers({
	auth,
	products,
	records,
	record,
	cart
});

export default rootReducer;
