import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui';
import { GalleryThumbnails, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductItem = async (props: { product: any }) => {
  const { product } = props;
  return (
    <Card className="w-64 transform transition-transform duration-300 hover:scale-105">
      <CardHeader>
        <div className="relative flex justify-center w-full h-40">
          <Image
          src={'/image/mock/3.webp'}
            // src={product?.images[0]?.image}
            alt={product.name}
            fill
            className=" rounded-t-lg object-cover"
          />
        </div>
      </CardHeader>
      <CardContent>
        <h2 className=" font-DanaMedium line-clamp-1">{product?.name}</h2>
        <p className="text-gray-500">{product?.category}</p>
        <div className="flex items-center justify-between">
          <p className="mt-4 font-DanaMedium">{product?.price?.toFixed(2)}</p>
          <div className="flex gap-2">
            <Heart />
            <Link href={`/products/(.)catalog?id=${product.id}`}>
              <GalleryThumbnails />
            </Link>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`products/${product.id}`}>مشاهده</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductItem;
