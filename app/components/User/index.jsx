import React from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';
import Orders from './Orders';
import {updateUser} from '../../reducers/auth';

export const User = ({auth, handleSettingsSubmit}) => (
	<div>
		<div className="panel panel-default">
			<div className="panel-heading">Settings</div>
			<div className="panel-body">
				<Settings current={auth} handleSubmit={handleSettingsSubmit} />
			</div>
		</div>
		<div className="panel panel-default">
			<div className="panel-heading">Past Orders</div>
			<div className="panel-body">
				<Orders />
			</div>
		</div>
	</div>
);

const mapStateToProps = ({auth}) => ({auth});

const mapDispatchToProps = (dispatch) => ({
	handleSettingsSubmit: (settings) => dispatch(updateUser(settings))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User);
