import { combineReducers } from 'redux';
import records from './records';

const rootReducer = combineReducers({
	auth: require('./auth').default,
	records
});

export default rootReducer;
