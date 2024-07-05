import { useState } from 'react'
import LandingPageComp from './components/LandingPageComp'
import Header from './components/Header'
import {
  Routes,
  Route
} from 'react-router-dom'
import ContactComp from './components/ContactComp'
import ProductsComp from './components/ProductsComp'
import Login from './components/Login'
import Signup from './components/Signup'
import CartComp from './components/CartComp'
import SIngleProductComp from './components/SIngleProductComp'
import AboutComp from './components/AboutComp'
import OrderDetails from './components/OrderDetails'
import OrderesComp from './components/OrderesComp'

function App() {
  

  return (
    <>
    <Header />
   <Routes>
      <Route path="/" element={<LandingPageComp />} />
      <Route path="/contact" element={<ContactComp />} />
      <Route path="/store" element={<ProductsComp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/cart" element={<CartComp />} />
      <Route path="/product/:id" element={<SIngleProductComp />} />
      <Route path="/about" element={<AboutComp />} />
      <Route path="/orderdetails" element={<OrderDetails />} />
      <Route path="/orders" element={<OrderesComp /> } />
      <Route path="*" element={<h1 className='mt-32 text-8xl m-auto' >404 Not Found</h1>} />

      </Routes>
    </>
  )
}

export default App
