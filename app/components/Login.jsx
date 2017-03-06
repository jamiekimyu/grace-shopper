import React from 'react';

export const Login = ({ login, register }) => (
	<form onSubmit={
		(evt) => {
			evt.preventDefault();
			if (document.activeElement.id === 'register'){
				register(evt.target.username.value, evt.target.password.value);
			} else {
				login(evt.target.username.value, evt.target.password.value);
			}
		}
	}>
		<input name="username" placeholder="Email" className="form-control" />
		<input name="password" type="password" placeholder="Password" className="form-control" />
		<input type="submit" id="login" value="Login" className="btn btn-primary" />
		<input type="submit" id="register" value="Register" className="btn btn-primary" />
		<a href="http://localhost:1337/api/auth/login/google" className="btn btn-default">Login With Google</a>
		<a href="http://localhost:1337/api/auth/login/facebook" className="btn btn-default">Login With Facebook</a>
		<a href="http://localhost:1337/api/auth/login/github" className="btn btn-default">Login With Github</a>

	</form>
);

import {login, register} from 'APP/app/reducers/auth';
import {connect} from 'react-redux';

export default connect(
	state => ({}),
	{login, register}
)(Login);
