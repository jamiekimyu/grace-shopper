import React from 'react';
import { connect } from 'react-redux';
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

export const Orders = ({userOrders}) => (
  <div>
    {userOrders.map((order) => (
      <div key={order.id} className="panel panel-default">
	      <div className="panel-heading"><label htmlFor={`orders-panel-${order.id}`}>{new Date(order.created_at).toLocaleString()} ({order.status})</label></div>
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

const mapStateToProps = ({userOrders}) => ({userOrders});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
