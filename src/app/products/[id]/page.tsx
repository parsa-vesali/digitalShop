import ProductDetail from '@/modules/products/components/ProductDetail';
import { Data } from '@/modules/products/mock/product';
import React from 'react';

const page = ({ params }: { params: Promise<{ id: string }> }) => {
  const product = Data[0];
  return <ProductDetail {...product} />;
};

export default page;
