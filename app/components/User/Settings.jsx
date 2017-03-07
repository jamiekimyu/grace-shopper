import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const Settings = ({auth}) => (
  <div>
    <div className="form-group col-md-12">
      <label htmlFor="user-name">Name</label>
      <input
        type="text"
        className="form-control"
        id="user-name"
        value={auth && auth.name || ''}
        onChange={() => {}}
      />
    </div>
    <div className="form-group col-md-12">
      <label htmlFor="user-email">Email</label>
      <input
        type="text"
        className="form-control"
        id="user-email"
        value={auth && auth.email || ''}
        onChange={() => {}}
      />
    </div>
    <div className="form-group col-md-12">
      <label htmlFor="user-password">Password</label>
      <input
        type="text"
        className="form-control"
        id="user-password"
        value={auth && auth.password || ''}
        onChange={() => {}}
      />
    </div>
  </div>
);

const mapStateToProps = ({auth}) => ({auth});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
