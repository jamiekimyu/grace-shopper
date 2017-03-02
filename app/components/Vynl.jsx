import React from 'react';
import {connect} from 'react-redux';

import Sidebar from './Sidebar';
import {Header} from './Header';

export const Vynl = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <Header user={user} />
      <div className="container-fluid">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          {children}
        </div>
      </div>
    </div>
);
