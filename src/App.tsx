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
import ProjectDetail from "./detail/projectDetail";
import ServiceDetail from "./detail/serviceDetail";
import SmartDetail from "./detail/smartDetail";
import ScrollToTop from "./components/ScrollToTop";
import Boiler from "./cardpage/boiler";
import Energy from "./cardpage/energy";
import Electric from "./cardpage/electric";
import Service from "./cardpage/services";


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/boiler-systems" element={<Boiler />} />
        <Route path="/energy-solutions" element={<Energy />} />
        <Route path="/electrical-instrument" element={<Electric />} />
        <Route path="/service" element={<Service />} />
        <Route path="/boiler-systems/:boilerId" element={<BoilerDetail />} />
        <Route path="/energy-solutions/:energyId" element={<EnergyDetail />} />
        <Route path="/electrical-instrument/:electricalId" element={<ElectricalDetail />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/smart-technology/:smartId" element={<SmartDetail />} />
      </Routes>
    </>
  )
}

export default App
