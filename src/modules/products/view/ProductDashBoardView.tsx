import React from 'react'
import ProductTable from '../components/ProductTable'
import { getProducts } from '../services'

const ProductDashBoardView = async () => {
    const products = await getProducts()
    return (
        <div className='container'>
            <ProductTable products={products} />
        </div>
    )
}

export default ProductDashBoardView