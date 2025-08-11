import { useState } from 'react'
import NavbarWrapper from '../layout/navbarwrap'
import Header from '../components/header'
import Footer from '../layout/footer'
import Card from '../components/card'
import Map from '../components/map'
// import Gallery from '../components/gallery'
import Sub from '../components/sub'

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <NavbarWrapper isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div
        className={`transition-transform duration-300`} // pt sesuai tinggi NavbarWrapper
      >
        <Header />
        <div className='my-auto'>
          <Card />
        </div>
        <div className='my-auto'>
          <Sub />
        </div>
        <div>
          <Map />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
