import { Prisma, PrismaType } from '@/lib/prisma';
import ProductListView from '@/modules/products/view/ProductListView';
import React from 'react';

const page = async () => {
 const data :PrismaType.Product[] = await Prisma.product.findMany()
console.log(data);

  return (
    <div className="pt-18">
      <ProductListView />
    </div>
  );
};

export default page;
