import { Button } from '@/components/ui'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Edit, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getProducts } from '../services'

const ProductTable = async (props: {
  products: Awaited<ReturnType<typeof getProducts>>
}) => {
  const { products } = props
  return (
    <div className='border border-gray-200 rounded-lg shadow-md mt-4'>
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <h1 className='text-xl font-DanaMedium'>محصولات</h1>
        <Button asChild>
          <Link href={'/dashboard/products/new'}>
            اضافه کردن محصول جدید
          </Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-right'>نام</TableHead>
            <TableHead className='text-center'>دسته بندی</TableHead>
            <TableHead className='text-center'>قیمت</TableHead>
            <TableHead className='text-center'>تعداد</TableHead>
            <TableHead className='text-center'>عکس</TableHead>
            <TableHead className='text-center'>عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product: any) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell className='text-center'>{product.category}</TableCell>
              <TableCell className='text-center'>{product.price}</TableCell>
              <TableCell className='text-center'>{product.quantity}</TableCell>
              <TableCell className='text-center'>
                <Image
                  src={product.images[0]?.image || '/image/mock/3.webp'}
                  alt={product.name}
                  width={50}
                  height={50}
                  className='rounded-full m-auto'
                />
              </TableCell>
              <TableCell className='text-center'>
                <div className="flex justify-center gap-2 items-center">
                  <Button variant={'ghost'} asChild>
                    <Link href={`/dashboard/products/${product.id}`}>
                      <Edit />
                    </Link>
                  </Button>
                  <Button variant={'ghost'}>
                    <Trash2 />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>total</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export default ProductTable