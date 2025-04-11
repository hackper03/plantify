import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import Layout from './components/Layout/Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import CareTips from './components/CareTips/CareTips.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import Service from './components/Services/Service.jsx'
import Cart2 from './components/Cart/Cart2.jsx'
import Wishlist from './components/Wishlist/Wishlist.jsx'
import Featured2 from './components/FeaturedPlants/Featured2.jsx'
import ProducPage from './components/ProductPage/ProducPage.jsx'
import ProductContent from './components/context/ProductContent.jsx'
import Product from './components/ProductPage/Product.jsx'
// import Featured from './components/FeaturedPlants/Featured.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='login' element={<SignUp />} />
      <Route path='contact' element={<Contact />} />
      <Route path='services' element={<Service />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/plant-care-tips' element={<CareTips />} />
      <Route path='/featured-products' element={<Featured2 />} />
      <Route path='/cart' element={<Cart2 />} />
      <Route path='wishlist' element={<Wishlist />} />
      <Route path='indoor-plant/' element={<ProducPage />} />
      <Route path='outdoor-plant/' element={<ProducPage />} />
      <Route path="/plant/:id" element={<Product />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
