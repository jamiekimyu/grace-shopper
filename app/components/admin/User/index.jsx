import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Table from './Table';
// Replace with user reducers
//import {deleteProduct, changeProduct, createProduct} from '../../../reducers/products';
import Form from './Form';

export const User = ({users, current, deleteUserProp, handleSubmit}) => (
  <div>
    <Table users={users} deleteUserProp={deleteUserProp} />
    <hr />
    <Form current={current} handleSubmit={handleSubmit} />
  </div>
);

const mapStateToProps = ({users}, {params}) => ({
	users,
	current: (
    params.id !== undefined ?
	    users.find((user) => user.id == params.id) :
      {}
  )
});

const mapDispatchToProps = (dispatch) => ({
	deleteProductProp: (userId) => dispatch(deleteProduct(userId)),
	handleSubmit: (userId, user) => (
		userId ?
		dispatch(changeProduct(userId, user)) :
		dispatch(createProduct(user))
	)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
