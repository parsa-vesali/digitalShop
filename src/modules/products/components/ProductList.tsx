import React from 'react';
import { Data } from '../mock/product';
import ProductItem from './ProductItem';
const ProductList = () => {
  return (
    <div className="flex items-center gap-x-5 w-full my-10">
      {Data.map((item) => (
        <ProductItem key={item.name} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
