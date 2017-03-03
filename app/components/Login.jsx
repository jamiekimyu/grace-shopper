import React from 'react';

export const Login = ({ login }) => (
  <form onSubmit={evt => {
	console.log(document.activeElement.id);
	evt.preventDefault();
	if (document.activeElement.id === 'register'){
		// reducer
	} else {
		login(evt.target.username.value, evt.target.password.value);
	}
} }>
    <input name="username" placeholder="Email" className="form-control" />
    <input name="password" type="password" placeholder="Password" className="form-control" />
    <input type="submit" id="login" value="Login" className="btn btn-primary" />
		<input type="submit" id="register" value="Register" className="btn btn-primary" />
  </form>
);

import {login} from 'APP/app/reducers/auth';
import {connect} from 'react-redux';

export default connect(
  state => ({}),
  {login}
)(Login);
