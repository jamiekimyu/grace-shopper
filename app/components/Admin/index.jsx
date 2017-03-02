import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ProductsTable from './ProductsTable';
import {deleteProduct} from '../../reducers/products';
import Form from './Form';
export const Admin = ({products, current, deleteProduct}) => (
  <div>
    {JSON.stringify(current)}
    <ProductsTable products={products} deleteProduct={deleteProduct} />
    <hr />
    <Form current={current} />
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
