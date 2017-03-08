'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import store from './store';
import Home from './components/Home';
import Services from './components/Services';
import Service from './components/Service';
import FilterGenreContainer from './components/Records/FilterGenreContainer';
import Record from './components/Records/Record';
import ReviewForm from './components/Records/ReviewForm';
import Equipment from './components/Equipment';
import SingleEquipment from './components/SingleEquipment';
import Product from './components/admin/Product';
import UserAdmin from './components/admin/User';
import Orders from './components/admin/Orders';
import {ThankYou} from './components/Thankyou';
import {Vynl} from './components/Vynl';
import Checkout, {WishlistCart} from './components/Checkout';
import User from './components/User';
import {fetch as fetchProducts} from './reducers/products';
import {fetch as fetchUsers} from './reducers/users';
import {getServices} from './reducers/services';
import {getService} from './reducers/service';
import {getRecords} from './reducers/records';
import {getRecord} from './reducers/record';
import {getOrders} from './reducers/orders';
import {getEquipment} from './reducers/equipment';
import {getSingleEquipment} from './reducers/singleEquipment';
import {loadCart} from './reducers/cart';
import {getUserOrders} from './reducers/userOrders';
import {getWishlist} from './reducers/wishlist';

const onRecordsEnter = function () {
	store.dispatch(getRecords());
};
const onServicesEnter = function () {
	store.dispatch(getServices());
};
const onEquipmentEnter = function () {
	store.dispatch(getEquipment());
};

const onRecordEnter = function (nextRouterState) {
	const recordId = nextRouterState.params.recordId;
	store.dispatch(getRecord(recordId));
};
const onServiceEnter = function (nextRouterState) {
	const serviceId = nextRouterState.params.serviceId;
	store.dispatch(getService(serviceId));
};
const onSingleEquipmentEnter = function (nextRouterState) {
	const equipmentId = nextRouterState.params.equipmentId;
	store.dispatch(getSingleEquipment(equipmentId));
};

const onAdminProductEnter = function () {
	store.dispatch(fetchProducts());
};

const onAdminOrdersEnter = function () {
	store.dispatch(getOrders());
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

const onWishlistEnter = function (nextRouterState) {
	store.dispatch(getWishlist(nextRouterState.params.id));
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
				<Route path="/records" component={FilterGenreContainer} onEnter={onRecordsEnter} />
				<Route path="/records/:recordId" component={Record} onEnter={onRecordEnter} />
				<Route path="/reviewForm/:id" component={ReviewForm} />
				<Route path="/equipment" component={Equipment} onEnter={onEquipmentEnter} />
				<Route path="/equipment/:equipmentId" component={SingleEquipment} onEnter={onSingleEquipmentEnter} />
				<Route path="/checkout" component={Checkout} />
				<Route path="/admin/product(/:id)" component={Product} onEnter={onAdminProductEnter} />
				<Route path="/admin/orders" component={Orders} onEnter={onAdminOrdersEnter} />
				<Route path="/admin/user(/:id)" component={UserAdmin} onEnter={onAdminUserEnter} />
				<Route path="/wishlist/:id" component={WishlistCart} onEnter={onWishlistEnter} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('main')
);
