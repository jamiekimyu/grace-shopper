import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const Record = ({record, product}) => (
	<div className="container-fluid">
		<h4>Record</h4>
		<img src={record.product && record.product.photo} className="img-thumbnail" />
		<h1>Artist: {record.artist}</h1>
		<h1>Album: {record.title}</h1>
	</div>

);

const mapStateToProps = ({record}) => ({
	record,
	//product: record.product || {}
});

const mapDispatchToProps = () => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Record);
