'use client ';
import { Data } from '@/modules/products/mock/product';

import React from 'react';
import { Card, CardContent } from '../ui';
import Image from 'next/image';

const CatalogList = () => {
  const images = Data[0].images;
  return (
    <div className="flex flex-wrap justify-center mb-4">
      {images?.map((_image: any, index) => (
        <div className="p-1" key={index}>
          <Card>
            <CardContent className="flex w-96 h-96 items-center justify-center p-6">
              <Image
                src={_image?.image}
                alt="galery"
                width={400}
                height={400}
                className="hover:scale-105 transform transition-transform duration-300"
              />
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CatalogList;
