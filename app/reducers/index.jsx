import { combineReducers } from 'redux';

import auth from './auth';
import products from './products';
import records from './records';

const rootReducer = combineReducers({
	auth,
	products,
	records
});

export default rootReducer;
