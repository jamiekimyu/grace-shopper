'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import store from './store';
import Home from './components/Home';
import Services from './components/Services';
import Service from './components/Service';
import Records from './components/Records/index';
import Record from './components/Records/Record';
import ReviewForm from './components/Records/ReviewForm';
import Equipment from './components/Equipment';
import Product from './components/admin/Product';
import UserAdmin from './components/admin/User';
import {ThankYou} from './components/Thankyou';
import {Vynl} from './components/Vynl';
import Checkout from './components/Checkout'
import User from './components/User';
import {fetch as fetchProducts} from './reducers/products';
import {fetch as fetchUsers} from './reducers/users';
import {getServices} from './reducers/services';
import {getService} from './reducers/service';
import {getRecords} from './reducers/records';
import {getRecord} from './reducers/record';
import {loadCart} from './reducers/cart';
import {getUserOrders} from './reducers/userOrders';

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
const onServiceEnter = function (nextRouterState) {
	const serviceId = nextRouterState.params.serviceId;
	store.dispatch(getService(serviceId));
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

const onUserEnter = function () {
	store.dispatch(getUserOrders());
};

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Vynl} onEnter={onVynlEnter}>
				<IndexRedirect to="/home" />
				<Route path="/home" component={Home} />
				<Route path="/thankyou" component={ThankYou} />
				<Route path="/services/:serviceId" component={Service} onEnter={onServiceEnter} />
				<Route path="/services" component={Services} onEnter={onServicesEnter} />
				<Route path="/user" component={User} onEnter={onUserEnter} />
				<Route path="/records" component={Records} onEnter={onRecordsEnter} />
				<Route path="/records/:recordId" component={Record} onEnter={onRecordEnter} />
				<Route path="/reviewForm/:id" component={ReviewForm} />
				<Route path="/equipment" component={Equipment} />
				<Route path="/checkout" component={Checkout} />
				<Route path="/admin/product(/:id)" component={Product} onEnter={onAdminProductEnter} />
				<Route path="/admin/user(/:id)" component={UserAdmin} onEnter={onAdminUserEnter} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('main')
);
