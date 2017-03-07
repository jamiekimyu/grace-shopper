import React from 'react';

export const WhoAmI = ({ user, logout }) => (
	<div className="whoami">
		{/*Why doesn't this work????<Link to="/user">Profile</Link>*/}
		<a className="btn btn-primary" href="/user">Profile</a>
		<button className="btn btn-secondary" onClick={logout}>Logout</button>
	</div>
);

import {logout} from 'APP/app/reducers/auth';
import {connect} from 'react-redux';

export default connect(
	({ auth }) => ({ user: auth }),
	{logout}
)(WhoAmI);
