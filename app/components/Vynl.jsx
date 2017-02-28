import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'

import Login from './Login'
import WhoAmI from './WhoAmI'
import Sidebar from './Sidebar'
import ShoppingCart from './ShoppingCart'
// Header

export const Vynl = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">VYNL</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="navbar-text">
              <label htmlFor="cart-toggle">
                <i className="glyphicon glyphicon-shopping-cart" />
                <div className="cart-count">99</div>
              </label>
              <input id="cart-toggle" type="checkbox" className="toggle-checkbox" />
              <div className="cart-flyout"><ShoppingCart /></div>
            </li>
            <li className="navbar-text">
              <label htmlFor="login-toggle">
                {user ? user.name : 'Login / Sign Up'}
              </label>
              <input id="login-toggle" type="checkbox" className="toggle-checkbox" />
              <div className="login-flyout">{user ? <WhoAmI /> : <Login />}</div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md">
          {children}
        </div>
      </div>
    </div>
)
