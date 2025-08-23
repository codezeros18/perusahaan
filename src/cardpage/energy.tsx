import LandingBanner from '../components/landingbanner'
import SplitSection from '../components/splitsection'
import HeroSection from '../components/herosection'
import bgEnergy from '../energy/powerplant/11.jpg'
import imgEnergy from '../energy/powerplant/8.jpg'
import heroBg from '../energy/bagfilter/4.jpeg'

import NavBar from '../layout/navbarwrap'
import Footer from '../layout/footer'
import HomeClose from '../components/homeclose'
import Card from '../components/card'

import CardGallery from "../components/cardgallery";
import card1 from "../energy/powerplant/1.jpg";
import card2 from "../energy/bagfilter/1.jpeg";

const energy = () => {
    const data = {
  name: 'Energy Solutions',
  description: 'Providing innovative, sustainable, and efficient energy systems to keep your operations running at peak performance.',
  image: bgEnergy,
}

    const energyProducts = [
    { title: "Power Plant", image: card1, link: "/power-plant" },
    { title: "Bag Filter", image: card2, link: "/bag-filter" },
    ];

  return (
    <>
        <NavBar isSidebarOpen={false} setIsSidebarOpen={function (): void {throw new Error("Function not implemented.")} } />
            <div>
                <LandingBanner 
                    image={data.image} 
                    name={data.name} 
                    description={data.description} 
                />
            </div>
            {/* Components1 */}
            <SplitSection
                bg={bgEnergy}
                img={imgEnergy}
                heading="Sustainable"
  highlight="Energy for Tomorrow"
  description="AEI delivers end-to-end energy solutions designed to optimize performance, reduce environmental impact, and ensure long-term reliability. 
  From power plants to filtration systems, we provide the technologies that industries trust to meet modern energy challenges."
            />
            {/* Components2 */}
            <HeroSection
                bg={heroBg}
                title="What Energy Solution Fits Your Needs?"
  description="Share your requirements, and our experts will help design the most efficient and sustainable energy system for your facility."
  buttonText="Consult Our Experts"
            />
            <CardGallery
            items= {energyProducts}
heading="Innovative Energy Systems"
  description="From large-scale power generation to advanced filtration, AEI’s energy solutions are built to support cleaner, safer, and more efficient operations."
            />
            <Card/>
            <HomeClose />
        <Footer />
    </>
  )
}

export default energy