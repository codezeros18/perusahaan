// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Product from './pages/product'
import './App.css'
import BoilerDetail from "./detail/boilerDetail";
import EnergyDetail from "./detail/energyDetail";
import ElectricalDetail from "./detail/electricalDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/boiler-systems/:boilerId" element={<BoilerDetail />} />
        <Route path="/energy-solutions/:energyId" element={<EnergyDetail />} />
        <Route path="/electrical-instrument/:electricalId" element={<ElectricalDetail />} />
      </Routes>
    </>
  )
}

export default App
