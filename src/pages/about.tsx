// import React from 'react'
import NavBar from "../layout/navbarwrap"
import Footer from "../layout/footer"
import LandingBanner from "../components/landingbanner"
import bgAbout from '../assets/aboutus1a.jpg'
import { Link } from "react-router-dom"
import Card from "../components/card"

const About = () => {
  const landing = {
    name: 'About AEI',
    description:
      'Discover who we are, what drives us, and why industries trust AEI to deliver reliable solutions every single day.',
    image: bgAbout,
  }

  const data = {
    sections: [
      {
        title: "Here’s Our Story",
        description: `
        Our story began with a simple mission: to support industries with dependable, high-performing systems that keep operations running smoothly. From our early days serving local facilities to becoming a trusted name across the energy and mechanical sectors, AEI has always put customers at the center of what we do. Over the years, we’ve partnered with global manufacturers, introduced cutting-edge technologies, and built a reputation for being the team you can call when it matters most. Our journey has been shaped by challenges, innovations, and the trust of our clients — and we’re only just getting started. The future of AEI is driven by the same values that defined our beginning: reliability, efficiency, and integrity.
        `,
      },
      {
        title: "AEI Today",
        description: `
          Today, AEI stands as a trusted partner to industries across the region. We are more than just a provider of boilers, electrical systems, and energy solutions — we are problem-solvers, innovators, and dedicated engineers who believe in doing things the right way. Every project we take on, from the smallest spare part to the largest power system installation, reflects our commitment to quality, safety, and long-term reliability. With a growing team of skilled professionals and multiple service locations, AEI continues to expand its reach while staying true to our mission of powering industries with confidence. 
        `,
      },
    ],

    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle:
      "AEI offers sales, rental, field service and repair of boilers and boiler room equipment.",
    contactButton: "Contact AEI",
  }

  const specs = [
    "Head Office – Jakarta, Indonesia",
    "Branch Office – Surabaya & Medan",
    "Certified Engineers & Technicians",
    "24/7 Customer Support",
    "ISO 9001 & ISO 14001 Certified",
  ]

  return (
    <>
      <NavBar
        isSidebarOpen={false}
        setIsSidebarOpen={function (): void {
          throw new Error("Function not implemented.")
        }}
      />
      <div>
        <LandingBanner
          image={landing.image}
          name={landing.name}
          description={landing.description}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6 font-dm mb-8 md:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {/* Left: Sections + Specs */}
          <div className="md:col-span-2">
            {data.sections.map((section, idx) => (
              <div key={idx} className="mb-6">
                <h2 className="text-[28px] leading-[34px] font-[400] tracking-[2.8px] text-[#333333]/90">
                  {section.title}
                </h2>
                <p className="text-[14px] leading-[25.2px] tracking-[0.5px] text-[#333333]/80 whitespace-pre-line">
                  {section.description}
                </p>
              </div>
            ))}

            <h2 className="text-[28px] leading-[34px] font-[400] tracking-[2.8px] text-[#333333]/90 mb-8">Company Highlights</h2>
            <ul className="divide-y divide-gray-300 border-t border-b border-gray-300">
              {specs.map((item, index) => (
                <li key={index} className="flex items-center py-3 px-4">
                  <span className="text-[#333333]/80 text-[14px] leading-[21.5px] tracking-[0.5px] font-[400]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact container */}
          <div className="bg-[#F8F8F8] px-8 py-6 text-gray-800 self-start order-3 md:order-3 lg:order-2">
            <p className="mb-2 font-[400] text-[25px] leading-[35px] tracking-[1px] text-[#333333]/90">
              {data.contactTitle}
            </p>
            <p className="text-orange-500/80 text-[20px] leading-[30px] tracking-normal font-[400] mb-4">
              {data.contactNumber}
            </p>
            <p className="mb-6 text-[#333333]/80 text-[13px] leading-[26px] tracking-[0.7px] font-[400]">
              {data.contactSubtitle}
            </p>
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-[#333333] text-[13px] leading-[19.5px] uppercase tracking-[0.52px] text-white py-2 px-6 cursor-pointer rounded transition duration-500 font-[500]"
            >
              {data.contactButton}
            </Link>
          </div>
        </div>
      </div>

      <Card />
      <Footer />
    </>
  )
}

export default About
