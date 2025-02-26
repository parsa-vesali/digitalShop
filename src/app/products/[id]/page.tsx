import ProductDetail from '@/modules/products/components/ProductDetail';
import {getProductsById } from '@/modules/products/services';
import { ProductsWithImages } from '@/types';
import React from 'react';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const data = await params;
  const { id } = data;
  const products = await getProductsById(id) as ProductsWithImages;
  return <ProductDetail {...products} />;
};

export default page;
