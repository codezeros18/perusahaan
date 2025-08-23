// import React from 'react';
import MicroWat from '../assets/microwatt-logo.png';
import { FiChevronRight } from "react-icons/fi";

const footer = () => {
  // Data Arrays
  const contactInfo = [
    { type: 'link', text: 'By phone: ', linkText: '1-855-753-2645', href: 'tel:18557532645' },
  ];

  const services = [
    'GENERAL CONTRACTOR',
    'MECHANICAL CONTRACTOR',
    'ELECTRICAL CONTRACTOR',
  ];

  const locations = [
    'Rajeg, Indonesia',
    'Karawaci, Indonesia',
  ];

  const logos = [
    { src: MicroWat, alt: 'MicroWatt Logo' },
  ];

  return (
    <>
      <footer className="bg-footer text-white/70 px-3 lg:px-6 py-10 md:py-20 font-dm">
        <div className="max-w-6xl mx-auto px-1 md:px-6 grid md:grid-cols-4 gap-10 text-sm">

          {/* CONTACT */}
          <div>
            <h2 className="text-[20px] leading-[35px] tracking-wide font-[400] mb-2 uppercase">Let’s Get Started</h2>
            <div className="h-[1px] w-8 bg-white mb-4 md:mb-8" />
            <p className="text-[14px] leading-[25px] font-[400] tracking-wide mb-2">
              We lead the way in innovative steam plant solutions. Reach out to the AEI boiler experts today.
            </p>
            <ul className="space-y-1">
              {contactInfo.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FiChevronRight className="text-white flex-shrink-0" />
                  {item.type === 'link' ? (
                    <>
                      {item.text}
                      <a href={item.href} className="text-gray-300 hover:underline">
                        {item.linkText}
                      </a>
                    </>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="text-[20px] leading-[35px] tracking-wide font-[400] mb-2 uppercase">Solutions That Work</h2>
            <div className="h-[1px] w-8 bg-white mb-4 md:mb-8" />
            <p className="text-[14px] leading-[25px] font-[400] tracking-wide mb-2">
              AEI delivers complete boiler service and repair as a fully licensed contractor.
            </p>
            <ul className="space-y-1">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FiChevronRight className="text-white" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* LOCATIONS */}
          <div>
            <h2 className="text-[20px] leading-[35px] tracking-wide font-[400] mb-2 uppercase">Where to Find Us</h2>
            <div className="h-[1px] w-8 bg-white mb-4 md:mb-8" />
            <p className="text-[14px] leading-[25px] font-[400] tracking-wide mb-2">AEI proudly serves customers from two strategic locations:</p>
            <ul className="space-y-1">
              {locations.map((loc, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FiChevronRight className="text-white flex-shrink-0" />
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TRUSTED EXPERIENCE */}
          <div>
            <h2 className="text-[20px] leading-[35px] tracking-wide font-[400] mb-2">TRUSTED EXPERIENCE</h2>
            <div className="h-[1px] w-8 bg-white mb-4 md:mb-8" />
            <div className="flex gap-2 items-center flex-wrap mt-4">
              {logos.map((logo, idx) => (
                <img key={idx} src={logo.src} alt={logo.alt} className="h-24" />
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* COPYRIGHT BAR */}
      <div className="h-auto py-6 bg-footer2 font-montserrat justify-center flex text-center">
        <div className="max-w-7xl mx-auto px-24">
          <p className='text-[14px] leading[25px] tracking-wide font-[400] text-white opacity-60'>
            Copyright 2025 by Anugrah Energi Indonesia. All rights reserved.
          </p>
        </div>
    </div>


    </>
  );
};

export default footer;
