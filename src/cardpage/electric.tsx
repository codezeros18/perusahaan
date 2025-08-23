import LandingBanner from '../components/landingbanner'
import SplitSection from '../components/splitsection'
import HeroSection from '../components/herosection'
import bgElectrical from '../electrical/flyash/2.jpg'
import imgElectric from '../electrical/flyash/4.jpg'
import heroBg from '../electrical/flyash/18.jpg'

import NavBar from '../layout/navbarwrap'
import Footer from '../layout/footer'
import HomeClose from '../components/homeclose'
import Card from '../components/card'

import CardGallery from "../components/cardgallery";
import card1 from "../electrical/esp/1.jpg";
import card2 from "../electrical/flyash/1.jpg";
import card3 from "../electrical/generator/1.jpg";
import card4 from "../electrical/genset/1.jpg";
import card5 from "../electrical/trafo/1.jpg";
import card6 from "../electrical/lvmv/1.jpg";
import card7 from "../electrical/turbine/1.jpg";
import card8 from "../electrical/grounding/1.jpg";
import card9 from "../electrical/plc/1.jpg"
import card10 from "../electrical/scada/1.jpg"
import card11 from "../electrical/swass/1.jpg"

const electric = () => {
    const data = {
  name: 'Electrical Power Solutions',
  description: 'Delivering reliable, efficient, and safe electrical systems to power your operations with confidence.',
  image: bgElectrical,
}

    const electricalProducts = [
    { title: "ESP", image: card1, link: "/esp" },
    { title: "Fly Ash", image: card2, link: "/fly-ash" },
    { title: "Generator", image: card3, link: "/generator" },
    { title: "Genset", image: card4, link: "/genset" },
    { title: "Trafo Auxiliary", image: card5, link: "/trafo-auxiliary" },
    { title: "LV/MV", image: card6, link: "/lv-mv" },
    { title: "Turbine", image: card7, link: "/turbine" },
    { title: "Grounding", image: card8, link: "/grounding" },
    { title: "Panel PLC", image: card9, link: "/plc" },
    { title: "SCADA System", image: card10, link: "/scada-system" },
    { title: "SWASS System", image: card11, link: "/swass-system" },
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
                bg={bgElectrical}
                img={imgElectric}
                heading="Powering"
                highlight="Industries with Confidence"
                description="AEI provides a complete range of electrical solutions—from generators and turbines to SCADA and PLC systems. 
                Our products are engineered for reliability, safety, and performance to keep your facility running without interruption."
            />
            {/* Components2 */}
            <HeroSection
                bg={heroBg}
                title="Which Electrical Solution Do You Need?"
                description="Tell us about your project, and our experts will help you select the right system to maximize efficiency and safety."
                buttonText="Talk to Our Experts"
            />
            <CardGallery
            items={electricalProducts}
           heading="Comprehensive Electrical Systems"
            description="From power generation to automation and control, AEI offers a wide portfolio of electrical solutions to meet the demands of modern industries."
            />
            <Card/>
            <HomeClose />
        <Footer />
    </>
  )
}

export default electric