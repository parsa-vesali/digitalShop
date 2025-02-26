import React from 'react';
import ProductItem from './ProductItem';
import { ProductsWithImages } from '@/types';


const ProductList = (props: { products: ProductsWithImages[]}) => {

  const {products} = props 
  return (
    <div className="flex items-center gap-x-5 w-full my-10">
      {products.map((item) => (
        <ProductItem key={item.name} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
