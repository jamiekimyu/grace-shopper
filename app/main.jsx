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
import {Vynl} from './components/Vynl';
import Checkout from './components/Checkout';
import {fetch} from './reducers/products';
import {getRecords} from './reducers/records';
import {getRecord} from './reducers/record';
import {loadCart} from './reducers/cart';

const onRecordsEnter = function () {
	store.dispatch(getRecords());
};

const onRecordEnter = function (nextRouterState) {
	const recordId = nextRouterState.params.recordId;
	store.dispatch(getRecord(recordId));
};

const onAdminEnter = function () {
	store.dispatch(fetch());
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
				<Route path="/services" component={Services} />
				<Route path="/records" component={Records} onEnter={onRecordsEnter} />
				<Route path="/records/:recordId" component={Record} onEnter={onRecordEnter} />
				<Route path="/equipment" component={Equipment} />
				<Route path="/admin/product(/:id)" component={Product} onEnter={onAdminEnter} />
				<Route path="/checkout" component={Checkout} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('main')
);
