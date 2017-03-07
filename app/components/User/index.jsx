import React from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';

export const User = () => (
	<div>
		<div className="panel panel-default">
			<div className="panel-heading">Settings</div>
			<div className="panel-body">
				<Settings />
			</div>
			<div className="panel-heading">Past Orders</div>
			<div className="panel-body">
				<Orders />
			</div>
		</div>
	</div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User);
