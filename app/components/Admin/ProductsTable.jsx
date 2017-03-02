import React from 'react';
import {Link} from 'react-router';

export default function ProductsTable({products, deleteProduct}){
	return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Price
          </th>
          <th>
            Edit
          </th>
          <th>
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              {product.name}
            </td>
            <td>${product.price}</td>
            <td><Link to={`/admin/${product.id}`} className="btn btn-primary">Edit</Link></td>
            {/*This button would allow user to delete this item*/}
            <td><a href="#" onClick={() => deleteProduct(product.id)} className="btn btn-primary">Delete</a></td>
          </tr>
        ))}
      </tbody>
    </table>
	);
}
