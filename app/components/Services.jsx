import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const Services = ({services}) => (
	<div className="container-fluid">
		<h4>Services</h4>
		<div className="row">
			{
				services && services.map(service => (
					<div className="col-md-4" key={service.id}>
						<Link className="thumbnail" to={`/services/${service.id}`}>
							<img src={service.product.photo} />
							<h1>{service.product.name}</h1>
						</Link>
					</div>
				))
			}
		</div>
	</div>

);

const mapStateToProps = ({services}) => ({services});

const mapDispatchToProps = () => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Services);
