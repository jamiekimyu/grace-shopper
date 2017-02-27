import React from 'react'
import {connect} from 'react-redux'

import Login from './Login'
import WhoAmI from './WhoAmI'


export const Vynl = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)
