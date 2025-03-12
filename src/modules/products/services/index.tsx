'use server'
import { Prisma } from "@/lib/prisma";
import { Product } from "@prisma/client";
import { redirect } from "next/navigation";

export const getProducts = async () => {
    const result = await Prisma.product.findMany({ include: { images: true } });
    return result
}
export const getProductsById = async (id: string) => {
    const result = await Prisma.product.findUnique({ where: { id }, include: { images: true } });
    if (!result) {
        return null
    }
    return result
}

export const upsertProduct = async (product: Product) => {
    const { id } = product
    let result
    if (id) {
        result = await Prisma.product.update({
            where: {
                id,
            },
            data: product
        })
    } else {
        result = await Prisma.product.create({
            data: product
        })
    }


    return result
}


export const deleteProduct = async (id : string)=> {
    await Prisma.product.delete({where : {id}}) 
    redirect('/dashboard/products')
}