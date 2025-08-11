import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Product from './pages/product'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
