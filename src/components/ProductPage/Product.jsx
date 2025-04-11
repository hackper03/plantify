import React from 'react'
import ProductContent, { ProductProvider } from '../context/ProductContent'
import ProducPage from './ProducPage'

const Product = () => {
  return (
    <>
    <ProductProvider>
        <ProducPage />
    </ProductProvider>
    </>
  )
}

export default Product