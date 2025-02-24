import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductDetail = (product: any) => {
  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-DanaMedium">
            {product?.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              {product?.images.length > 0 ? (
                <Image
                  src={product?.images[0].image}
                  alt="product-img"
                  width={500}
                  height={500}
                  quality={50}
                  property="1"
                  className=" rounded-xl"
                />
              ) : (
                <div className="">no img</div>
              )}
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-xl">تومان {product?.price}</p>
              <p className="text-gray-700">تعداد{product?.quantity}</p>
              <p className="mt-2 text-sm">{product?.category}</p>
              <p className="text-gray-600">{product?.deccription}</p>

              <Button className="my-5">
                <ShoppingCart />
              </Button>
              <Button variant={'secondary'} asChild>
                <Link href={'/products'}>بازگشت به فروشگاه</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
