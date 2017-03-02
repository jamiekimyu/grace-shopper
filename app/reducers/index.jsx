import { combineReducers } from 'redux';
import records from './records';
import record from './record';

const rootReducer = combineReducers({
	auth: require('./auth').default,
	records,
	record
});

export default rootReducer;
