import React from 'react';
import ProductForm from '../components/Products/ProductForm';
import ProductList from '../components/Products/ProductList';
import ProductDetail from '../components/Products/ProductDetail';

const ProductsPage = () => {
  return (
    <div>
      <h2>Products</h2>
      <ProductForm />
      <ProductList />
      <ProductDetail />
    </div>
  );
};

export default ProductsPage;
