'use client'

import { Product, ProductCategory } from '@prisma/client'
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useForm } from "react-hook-form";
import Link from 'next/link'
import { upsertProduct } from '../services'


const ProductForm = (props: { product: Product | null }) => {
    const { product } = props
    const { register, handleSubmit, setValue } = useForm<Product>()

    const onSubmitForm = (data: Product) => {
        const _product = {...data,
            price : parseFloat(data.price?.toString() || '0'),
            quantity : parseFloat(data.quantity?.toString() || '0')
        }
        upsertProduct(_product)
    }

    return (
        <Card className='w-[448px] mx-auto mt-10'>
            <form className='max-w-md' onSubmit={handleSubmit(onSubmitForm)}>
                <CardHeader>
                    <CardTitle>محصولات</CardTitle>
                    <CardDescription>ساخت محصول جدید</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="my-2">
                        <Label htmlFor='name'>نام محصول</Label>
                        <Input {...register('name')} id='name' required defaultValue={product?.name || ''} />
                    </div>
                    <div className="my-2">
                        <Label htmlFor='category'>دسته بندی</Label>
                        <Select
                            onValueChange={(value) => setValue('category', value as ProductCategory)}
                            required
                            defaultValue={product?.category || ProductCategory.OTHERS}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="انتخاب دسته بندی"></SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                {Object.values(ProductCategory).map((cat) => (
                                    <SelectItem key={cat} value={cat}>
                                        {cat}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="my-2">
                        <Label htmlFor='description'>توضیحات</Label>
                        <Textarea
                        {...register('description')}
                            id='description'
                            defaultValue={product?.description || ''}
                        />
                    </div>
                    <div className="my-2">
                        <Label htmlFor='price'>قیمت</Label>
                        <Input
                        {...register('price')}
                            type='number'
                            id='price'
                            step={'1000000'}
                            defaultValue={product?.price || ''}
                        />
                    </div>
                    <div className="my-2">
                        <Label htmlFor='quantity'>تعداد</Label>
                        <Input
                        {...register('quantity')}
                            type='number'
                            id='quantity'
                            defaultValue={product?.quantity || ''}
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button variant={'outline'} asChild>
                        <Link href={'/dashboard/products'}>بازگشت</Link>
                    </Button>
                    <Button type='submit' className='mx-2'>
                        {product?.id ? 'آپدیت محصول' : 'اضافه کردن'}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default ProductForm