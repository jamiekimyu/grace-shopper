import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const Sidebar = ({ isAdmin }) => (
  <ul className="nav nav-stacked">
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/records">Records</Link></li>
    <li><Link to="/equipment">Equipment</Link></li>
    { isAdmin ? ( <li><hr /></li> ) : null }
    { isAdmin ? ( <li><Link to="/admin">Admin</Link></li> ) : null }
  </ul>
);

const mapStateToProps = () => ({
	isAdmin: true
});

const mapDispatchToProps = () => ({
  //
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
