// import React from 'react'
import NavBar from "../layout/navbarwrap"
import Footer from "../layout/footer"
import LandingBanner from "../components/landingbanner"
import bgContact from '../assets/au11.jpg'

const contact = () => {
  const landing = {
  name: 'Contact AEI',
  description: 'We’re here to provide reliable support and expert guidance for all your boiler, electrical, and energy needs.',
  image: bgContact,
}

    const data = {
  title1: "We’d Love to Hear From You",
  description1: "Whether you need technical support, service inquiries, or product information, our team is ready to assist.",
  
  title2: "Get in Touch",
  description2: "Use the form below to send us a message, and one of our experts will respond as quickly as possible.",
  
  specs: [
    "Phone: +1 (855) 753-2645",
    "Email: contact@aei.com",
    "Address: Rajeg, Indonesia | Karawaci, Indonesia",
  ],
  
  contactTitle: "Contact Us",
  contactNumber: "+1 (855) 753-2645",
  contactSubtitle: "Have a question? Our experts are here to help.",
  contactButton: "Send Message",
}

  return (
    <>
        <NavBar isSidebarOpen={false} setIsSidebarOpen={function (): void {throw new Error("Function not implemented.")} } />
          <div>
            <LandingBanner 
              image={landing.image} 
              name={landing.name} 
              description={landing.description} 
          />
          </div>
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6 font-dm mb-8 md:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {/* Kiri: 2 kolom di desktop */}
              <div className="md:col-span-2">
                {/* Judul, deskripsi, specs */}
                <h2 className="text-[28px] leading-[34px] font-[400] tracking-[2.8px] mb-4 text-[#333333]/90">{data.title1}</h2>
                <p className="text-[14px] leading-[25.2px] tracking-[0.5px] text-[#333333]/80 mb-6 ">{data.description1}</p>
                <h2 className="text-[28px] leading-[34px] font-[400] tracking-[2.8px] mb-4 text-[#333333]/90">{data.title2}</h2>
                <p className="text-[14px] leading-[25.2px] tracking-[0.5px] text-[#333333]/80 mb-6 ">{data.description2}</p>
                <ul className="divide-y divide-gray-300 border-t border-b mt-8 border-gray-300">
                  {data.specs.map((item) => (
                    <li key={item} className="flex items-center py-3 px-4">
                      <span className="text-[#333333]/80 text-[14px] leading-[21.5px] tracking-[0.5px] font-[400]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kanan: Contact container */}
              <div className="order-3 md:order-3 lg:order-2">
                  {/* Map Embed */}
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.657380437786!2d106.61570521081497!3d-6.176599960498962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff2f69ca0d59%3A0xcfccae5b112107eb!2sJl.%20Geno%20Utomo%20No.25%2C%20RT.003%2FRW.002%2C%20Sumur%20Pacing%2C%20Kec.%20Karawaci%2C%20Kota%20Tangerang%2C%20Banten%2015114!5e0!3m2!1sen!2sid!4v1756012678426!5m2!1sen!2sid"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
              </div>
            </div>
          </div>
        <Footer />
    </>
  )
}

export default contact