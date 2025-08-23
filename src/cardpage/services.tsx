import LandingBanner from '../components/landingbanner'
import SplitSection from '../components/splitsection'
import HeroSection from '../components/herosection'
import bgServices from '../services/installflyash/4.jpg'
import imgServices from '../services/installflyash/2.jpg'
import heroBg from '../services/maintenanceboilergas/3.jpeg'

import NavBar from '../layout/navbarwrap'
import Footer from '../layout/footer'
import HomeClose from '../components/homeclose'
import Card from '../components/card'

import CardGallery from "../components/cardgallery";
import card1 from "../services/maintenance/1.jpeg";
import card2 from "../services/spareparts/sparepart.png";
import card3 from "../services/installesp/13.jpg";
import card4 from "../services/terminasi/2.jpg";


const services = () => {
    const data = {
  name: 'Our Services',
  description: 'Comprehensive maintenance, installation, and support to keep your systems running at their best.',
  image: bgServices,
}
    const services = [
    { title: "Maintenance", image: card1, link: "/maintenance" },
    { title: "Spare Parts", image: card2, link: "/spare-parts" },
    { title: "Installation", image: card3, link: "/installation" },
    { title: "Termination", image: card4, link: "/termination" },
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
                bg={bgServices}
                img={imgServices}
                heading="End-to-End"
  highlight="Service You Can Trust"
  description="AEI offers a full range of services to ensure your equipment operates safely, efficiently, and reliably. 
  From routine maintenance and spare parts supply to complete installations and system terminations, our team is committed to supporting your facility every step of the way."
            />
            {/* Components2 */}
            <HeroSection
                bg={heroBg}
                title="How Can We Support Your Operations?"
  description="Whether you need emergency service, preventive maintenance, or expert installation, AEI is here to provide tailored solutions that keep your systems performing at their best."
  buttonText="Get Service Support"
            />
            <CardGallery
            items= {services}
 heading="Our Core Services"
  description="AEI’s skilled team provides professional maintenance, spare parts, installation, and termination services — ensuring your facility has the reliable support it needs."
            />
            <Card/>
            <HomeClose />
        <Footer />
    </>
  )
}

export default services