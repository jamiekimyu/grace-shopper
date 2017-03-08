import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const Equipment = ({equipment}) => (
	<div className="container-fluid">
		<h4>Equipment</h4>
		<div className="row">
			{
				equipment && equipment.map(equipment => (
					<div className="col-md-4" key={equipment.id}>
						<Link className="thumbnail" to={`/equipment/${equipment.id}`}>
							<img src={equipment.product.photo} />
							<h1>{equipment.product.name}</h1>
						</Link>
					</div>
				))
			}
		</div>
	</div>
);

const mapStateToProps = ({equipment}) => ({equipment});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Equipment);
