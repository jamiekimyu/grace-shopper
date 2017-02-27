import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router'

import Login from './Login'
import WhoAmI from './WhoAmI'
import Sidebar from './Sidebar'
// Header

export const Vynl = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link>VYNL</Link>
          </div>
          <div className="nav navbar-nav navbar-right">
            <label for="">
              {user ? user.name : "Login / Sign Up"}
            </label>
            <input id="" type="checkbox" className="toggle-checkbox" />
            {user ? <WhoAmI/> : <Login/>}
          </div>
        </div>
      </div>
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
