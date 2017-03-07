'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import store from './store';
import Home from './components/Home';
import Services from './components/Services';
import Records from './components/Records';
import Record from './components/Record';
import Equipment from './components/Equipment';
import Product from './components/admin/Product';
import User from './components/admin/User';
import {ThankYou} from './components/Thankyou';
import {Vynl} from './components/Vynl';
import Checkout from './components/Checkout';
import {fetch as fetchProducts} from './reducers/products';
import {fetch as fetchUsers} from './reducers/users';
import {getServices} from './reducers/services';
import {getRecords} from './reducers/records';
import {getRecord} from './reducers/record';
import {loadCart} from './reducers/cart';

const onRecordsEnter = function () {
	store.dispatch(getRecords());
};
const onServicesEnter = function () {
	store.dispatch(getServices());
};

const onRecordEnter = function (nextRouterState) {
	const recordId = nextRouterState.params.recordId;
	store.dispatch(getRecord(recordId));
};

const onAdminProductEnter = function () {
	store.dispatch(fetchProducts());
};

const onAdminUserEnter = function () {
	store.dispatch(fetchUsers());
};

const onVynlEnter = function () {
	store.dispatch(loadCart());
};

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Vynl} onEnter={onVynlEnter}>
				<IndexRedirect to="/home" />
				<Route path="/home" component={Home} />
				<Route path="/thankyou" component={ThankYou} />
				<Route path="/services" component={Services} onEnter={onServicesEnter} />
				<Route path="/records" component={Records} onEnter={onRecordsEnter} />
				<Route path="/records/:recordId" component={Record} onEnter={onRecordEnter} />
				<Route path="/equipment" component={Equipment} />
				<Route path="/checkout" component={Checkout} />
				<Route path="/admin/product(/:id)" component={Product} onEnter={onAdminProductEnter} />
				<Route path="/admin/user(/:id)" component={User} onEnter={onAdminUserEnter} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('main')
);
