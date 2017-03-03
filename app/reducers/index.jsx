import { combineReducers } from 'redux';

import auth from './auth';
import products from './products';
import records from './records';
import record from './record';

const rootReducer = combineReducers({
	auth,
	products,
	records,
	record
});

export default rootReducer;
