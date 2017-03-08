import React from 'react';
import { connect } from 'react-redux';
import {changeStatus} from '../../reducers/orders';
import { Link } from 'react-router';

const urlMap = {
	Record: 'records',
	Service: 'services',
	Equipment: 'singleEquipment'
};

const idMap = {
	Record: 'record',
	Service: 'service',
	Equipment: 'equipment'
};

export const Orders = ({orders, changeStatusProp}) => (
	<div>
		{orders.map((order) => (
			<div key={order.id} className="panel panel-default">
				<div className="panel-heading"><label htmlFor={`orders-panel-${order.id}`}>
					{new Date(order.created_at).toLocaleString()}&nbsp;
					{order.user.name}&nbsp;
					&lt;{order.user.email}&gt;&nbsp;
					<select value={order.status} onChange={(event) => changeStatusProp(order.id, event.target.value)}>
						<option>Not Shipped</option>
						<option>Processing</option>
						<option>Cancelled</option>
						<option>Completed</option>
					</select>
				</label></div>
				<input type="checkbox" id={`orders-panel-${order.id}`} className="toggle-checkbox" />
				<div className="panel-body">
					<ol>
						{order.orderItems.map((item) => (
							<li key={item.id}>
								{item.quantity}x&nbsp;
								<Link to={`/${urlMap[item.product.primaryCategory]}/${item.product[idMap[item.product.primaryCategory]].id}`}>
									{item.product.name}
								</Link>&nbsp;
								(${item.price})
							</li>
						))}
					</ol>
				</div>
			</div>
		))}
	</div>
);

const mapStateToProps = ({orders}) => ({
	orders
});

const mapDispatchToProps = (dispatch) => ({
	changeStatusProp: (orderId, status) => dispatch(changeStatus(orderId, status))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Orders);
