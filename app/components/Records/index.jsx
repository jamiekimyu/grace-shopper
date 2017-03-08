import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const Records = ({records}) => (
  <div className="container-fluid">
    <h4>Records</h4>
    <div className="row">
      {
        records && records.map(record => (
          <div className="col-md-4" key={record.id}>
            <Link className="thumbnail" to={`/records/${record.id}`}>
              <img src={record.product.photo} />
            </Link>
          </div>
        ))
      }
    </div>
  </div>

);

export default Records;
