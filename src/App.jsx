import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Featured from './components/FeaturedPlants/Featured'
import Hero from './components/Hero/Hero'
import Reviews from './components/Reviews/Reviews'
import CareTips from './components/CareTips/CareTips'
import Contact from './components/Contact/Contact'
import SignUp from './components/SignUp/SignUp'
import Event from './components/GetEvent/Event'
import NotFound from './components/NotFound/NotFound'
import Cart from './components/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Cart />
     <Hero />
     <Featured />
     <Reviews />
     <CareTips />
     <Contact />
     <SignUp />
     <Footer />
     <NotFound />
     {/* <Event /> */}
    </>
  )
}

export default App
