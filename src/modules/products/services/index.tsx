import { Prisma } from "@/lib/prisma";

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