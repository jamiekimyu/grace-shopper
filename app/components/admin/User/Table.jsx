import React from 'react';
import {Link} from 'react-router';

export default function Table({users, deleteUser, resetPassword}){
	return (
    <table className="admin-table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Is Admin</th>
        <th>Provider</th>
        <th>Reset Password</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
			{users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.isAdmin ? 'Yes' : 'No'}</td>
          <td>{user.oauth ? user.oauth.provider : 'Internal'}</td>
          <td>{user.oauth ? '' : (<a href="#" onClick={() => resetPassword(user.id)} className="btn btn-primary">Reset Password</a>)}</td>
          <td><Link to={`/admin/user/${user.id}`} className="btn btn-primary">Edit</Link></td>
          <td><a href="#" onClick={() => deleteUser(user.id)} className="btn btn-primary">Delete</a></td>
        </tr>
			))}
      </tbody>
    </table>
	);
}
