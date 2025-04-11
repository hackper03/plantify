import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import CartProvider from '../context/CartContext'

const Layout = () => {
  return (
    <>
    <CartProvider >
      <Navbar />
    </CartProvider>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout