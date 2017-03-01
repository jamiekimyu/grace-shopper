import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const Home = () => (
  <div>
    <img className="float-left" src="aboutPuppy.png" />
    <h1>Welcome To VYNL</h1>
    <p>We sell records.</p>
  </div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
