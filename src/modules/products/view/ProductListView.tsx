import React from 'react';
import ProductList from '../components/ProductList';
import { getProducts } from '../services';

const ProductListView = async () => {
  const products = await getProducts()
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductListView;
