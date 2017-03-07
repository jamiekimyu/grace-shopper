import { combineReducers } from 'redux';

import auth from './auth';
import products from './products';
import users from './users';
import records from './records';
import record from './record';
import services from './services';
import service from './service';
import cart from './cart';
import address from './address';
import user from './user';

const rootReducer = combineReducers({
	auth,
	users,
	products,
	records,
	record,
	services,
	service,
	cart,
	address,
	user
});

export default rootReducer;
