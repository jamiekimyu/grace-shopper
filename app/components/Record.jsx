import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const Record = (props) => (
  <div className="container-fluid">
	{/*JSON.stringify(props.record)*/}
    <h4>Record</h4>
		{/*<img src={props.record.product.photo} className="img-thumbnail" />*/}
		<h1>{props.record.artist}</h1>
		<h1>{props.record.title}</h1>
		<h1>{props.record.product}</h1>
  </div>

);

const mapStateToProps = ({record}) => ({record});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Record);
