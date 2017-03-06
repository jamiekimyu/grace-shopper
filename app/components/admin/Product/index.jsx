import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Table from './Table';
import {deleteProduct, changeProduct, createProduct} from '../../../reducers/products';
import Form from './Form';

export const Product = ({products, current, deleteProductProp, handleSubmit}) => (
  <div>
    <Table products={products} deleteProduct={deleteProductProp} />
    <hr />
    <Form current={current} handleSubmit={handleSubmit} />
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
	deleteProductProp: (productId) => dispatch(deleteProduct(productId)),
	handleSubmit: (productId, product) => (
		productId ?
		dispatch(changeProduct(productId, product)) :
		dispatch(createProduct(product))
	)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
