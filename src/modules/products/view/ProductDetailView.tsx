import React from 'react'
import ProductForm from '../components/ProductForm'
import { getProductsById } from '../services'

const ProductDetailView = async (props: { id: string }) => {
  const { id } = props
  const product = await getProductsById(id)
  return (
    <div>
      <ProductForm product={product} />
    </div>
  )
}

export default ProductDetailView