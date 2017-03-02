import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ProductsTable from './ProductsTable';
import {deleteProduct} from '../../reducers/products';

export const Admin = ({products, current, deleteProduct}) => (
  <div>
    {JSON.stringify(current)}
    <ProductsTable products={products} deleteProduct={deleteProduct} />
    <hr />
    <form>
      <div className="form-group">
        <label htmlFor="admin-type">Type</label>
        <select className="form-control" id="admin-type">
          <option>Service</option>
          <option>Record</option>
          <option>Equipment</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="admin-name">Name</label>
        <input type="text" className="form-control" id="admin-name" />
      </div>

      <div className="form-group">
        <label htmlFor="admin-price">Price</label>
        <input type="number" min="0" className="form-control" id="admin-price" />
      </div>

      <div className="form-group">
        <label htmlFor="admin-description">Description</label>
        <textbox className="form-control" id="admin-description" />
      </div>

      <div className="form-group">
        <label htmlFor="admin-photo">Photo URL</label>
        <input type="text" className="form-control" id="admin-photo" />
      </div>

      <div className="panel panel-default">
        <div className="panel-heading">
          Record Information
        </div>
        <div className="panel-body">
          <div className="form-group">
            <label htmlFor="admin-record-artist">Artist</label>
            <input type="text" className="form-control" id="admin-record-artist" />
          </div>

          <div className="form-group">
            <label htmlFor="admin-record-release-date">Release Date</label>
            <input type="date" className="form-control" id="admin-record-release-date" />
          </div>

          <div className="form-group">
            <label htmlFor="admin-record-genre">Genre</label>
            <input type="text" className="form-control" id="admin-record-genre" />
          </div>
        </div>
      </div>
    </form>
  </div>
);

const mapStateToProps = ({products}, {params}) => ({
  products,
  current: (
    params.id !== undefined ?
     products.find((product) => product.id == params.id) :
      {}
  )
});

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (productId) => dispatch(deleteProduct(productId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
