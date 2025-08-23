import LandingBanner from '../components/landingbanner'
import SplitSection from '../components/splitsection'
import HeroSection from '../components/herosection'
import bgBoiler from '../boilersystems/1.jpg'
import imgBoiler from '../boilersystems/cgb/1.jpg'
import heroBg from '../boilersystems/gasoil/gaoi1.jpeg'

import NavBar from '../layout/navbarwrap'
import Footer from '../layout/footer'
import HomeClose from '../components/homeclose'
import Card from '../components/card'

import CardGallery from "../components/cardgallery";
import card1 from "../assets/fbc3e.jpg";
import card2 from "../boilersystems/cfbc/cfbc2.jpg";
import card3 from "../boilersystems/cgb/1.jpg";
import card4 from "../electrical/generator/1.jpg";
import card5 from "../boilersystems/gasoil/gaoi3a.jpg";
import card6 from "../services/installesp/13.jpg";

const boiler = () => {
    const data = {
    name: 'Industrial Boiler Solutions',
    description: 'Powering industries with reliable, efficient, and safe boiler systems built for your needs.',
    image: bgBoiler, // Add a default image value or update as needed
    }
    const boilerProducts = [
    { title: "Fluidized Bed Boiler", image: card1, link: "/fluidized-bed-boiler" },
    { title: "CFBC", image: card2, link: "/cfbc" },
    { title: "Chain Grate Boiler", image: card3, link: "/chain-grate-boiler" },
    { title: "Reciprocrating Grate Boiler", image: card4, link: "/turbine" },
    { title: "Gas & Oil Boiler", image: card5, link: "/gas-oil-boiler" },
    { title: "Thermal Oil Boiler", image: card6, link: "/thermal-oil-boiler" },
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
                bg={bgBoiler}
                img={imgBoiler}
                heading="Find the"
                highlight="Right Boiler Today"
                description="AEI partners with leading global manufacturers to bring you a wide selection of new and
                    expertly reconditioned boilers. Our team works closely with you to understand your needs
                    and match you with the most efficient and reliable system for your facility."
            />
            {/* Components2 */}
            <HeroSection
                bg={heroBg}
                title="What Boiler Solution Do You Need?',"
                description="Share your requirements, and our experts will recommend the right boiler system for your facility."
                buttonText="Contact Our Experts"
            />
            <CardGallery
            items={boilerProducts}
            heading="Our Diverse Industrial Boiler Experience"
            description="Industrial Boiler and Mechanical can help you determine the best equipment solution for your unique steam generation needs."
            />
            <Card/>
            <HomeClose />
            {/* <div className="bg-yellow-400 text-[#333333]/90 px-6 py-10 md:py-14 font-dm">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 px-2 md:px-6 items-center gap-4 md:gap-6">
                    <div className="md:col-span-2">
                    <h2 className="text-[24px] lg:text-[30px] leading-[36px] text-center md:text-start tracking-[2.16px] mb-2 md:mb-4 font-[700] uppercase">
                        BOILER EXPERTS
                    </h2>
                    <p className="text-[14px] lg:text-[20px] leading-[25.2px] lg:leading-[36px] text-center md:text-start font-[400] tracking-[0.7px] lg:tracking-[1px]">
                        We deliver reliable, energy-efficient boiler solutions tailored to your facility. Call us at (855) 753-2645 to
                        speak with our engineers today.
                    </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <button className="border cursor-pointer border-[#333333]/80 px-8 py-3 flex items-center gap-2 uppercase font-medium tracking-wide hover:bg-white hover:border-white hover:text-[#333333] transition duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>   */}
        <Footer />
    </>
  )
}

export default boiler