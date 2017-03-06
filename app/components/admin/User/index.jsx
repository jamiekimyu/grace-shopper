import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Table from './Table';
// Replace with user reducers
import {deleteUser, changeUser, createUser} from '../../../reducers/users';
import Form from './Form';

export const User = ({users, current, deleteUserProp, handleSubmit}) => (
  <div>
    <Table users={users} deleteUser={deleteUserProp} />
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
	deleteUserProp: (userId) => dispatch(deleteUser(userId)),
	handleSubmit: (userId, user) => (
		userId ?
		dispatch(changeUser(userId, user)) :
		dispatch(createUser(user))
	)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
