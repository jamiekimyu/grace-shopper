'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Home from './components/Home'
import Services from './components/Services'
import Records from './components/Records'
import Equipment from './components/Equipment'
import Admin from './components/Admin'
import {Vynl} from './components/Vynl'

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Vynl}>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/records" component={Records} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/admin" component={Admin} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
