import React from 'react'
import CartProvider from '../context/CartContext'
import Cart from './Cart'

const Cart2 = () => {
  return (
    <>
    <CartProvider >
        <Cart />
    </CartProvider>
    </>
  )
}

export default Cart2