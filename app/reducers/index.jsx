import { combineReducers } from 'redux';

import auth from './auth';
import products from './products';
import users from './users';
import records from './records';
import record from './record';
import review from './review';
import userOrders from './userOrders';
import services from './services';
import service from './service';
import orders from './orders';
import cart from './cart';
import address from './address';
import user from './user';
import equipment from './equipment';
import singleEquipment from './singleEquipment';

const rootReducer = combineReducers({
	auth,
	users,
	products,
	records,
	record,
	review,
	userOrders,
	orders,
	services,
	service,
	cart,
	address,
	user,
	equipment,
	singleEquipment
});

export default rootReducer;
