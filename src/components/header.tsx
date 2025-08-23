// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useState } from 'react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
import { motion } from 'framer-motion'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import bgImg1 from '../assets/bg1.jpeg';
import bgImg2 from '../assets/bg2.jpeg';
import bgImg3 from '../assets/bg3.jpeg';

const slides = [
  {
    title: "YOUR TRUSTED PARTNER\nIN BOILER SOLUTIONS",
    subtitle:
      "We deliver complete industrial boiler systems, automation, and maintenance services to keep your operations running at peak performance.",
    image: bgImg1,
  },
  {
    title: "SOLUTIONS FOR MODERN INDUSTRY",
    subtitle:
      "Our expertise spans boiler installation, modernization, automation, and IoT integration — ensuring efficiency and reliability across industries.",
    image: bgImg2,
  },
  {
    title: "EXPERIENCE THAT DRIVES\nRELIABILITY & INNOVATION",
    subtitle:
      "With years of service in the power and process industries, we provide reliable, safe, and sustainable energy solutions tailored to your needs.",
    image: bgImg3,
  },
];



const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative w-full h-[35vh] lg:h-screen overflow-hidden font-dm group">
      {/* Navigation Arrows */}
      <button className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white cursor-pointer text-[12px] leading-[40px] md:text-2xl p-4 -mx-4 mt-8 bg-black/20 hover:bg-white hover:text-gray-700 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <FaChevronLeft />
      </button>
      <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white cursor-pointer text-[12px] leading-[40px] md:text-2xl p-4 -mx-4 mt-8 bg-black/20 hover:bg-white hover:text-gray-700 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <FaChevronRight />
      </button>

      {/* Swiper */}
      <Swiper
        direction="vertical"
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        allowTouchMove={false} // ❌ Matikan swipe di HP
        simulateTouch={false}  // ❌ Matikan drag di desktop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full mt-6 md:mt-0"
      >
        {slides.map((slide, index) => (
        <SwiperSlide key={index}>
            <div
                className="relative h-[35vh] lg:h-screen bg-cover bg-center flex items-center justify-start"
                style={{ backgroundImage: `url(${slide.image})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute left-0 top-0 h-full w-[80%] md:w-[90%] bg-gradient-to-r from-black/90 to-transparent" />

                {/* Slide Content */}
                <div className="relative z-10 w-full">
                  <div className="max-w-7xl mx-auto pl-12 px-4">
                      <div key={activeIndex} className="max-w-4xl md:pl-12">
                        <motion.div
                          initial="hidden"
                          animate="show"
                          variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.15 } }
                          }}
                        >
                          <motion.h1 
                            variants={{
                              hidden: { opacity: 0, x: -40 },
                              show: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.4 }}
                            className="text-[16px] lg:text-[61px] tracking-normal leading-[20px] lg:leading-[76px] font-bold text-white whitespace-pre-line"
                          >
                            {slide.title}
                          </motion.h1>

                          <motion.p
                            variants={{
                              hidden: { opacity: 0, x: -40 },
                              show: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.4 }}
                            className="mt-2 lg:mt-6 text-[6px] lg:text-[23px] leading-[6px] lg:leading-[23px] font-[300] text-white/90 whitespace-pre-line"
                          >
                            {slide.subtitle}
                          </motion.p>

                          <motion.button
                          variants={{
                            hidden: { opacity: 0, x: -40 },
                            show: { opacity: 1, x: 0 }
                          }}
                          transition={{ duration: 0.1 }}  // ❌ remove delay here
                          className="mt-4 lg:mt-12 text-[#F37021] text-[4px] lg:text-[15px] font-bold px-3 py-1 lg:px-6 lg:py-2 
                                    hover:text-gray-700 hover:bg-white transition duration-500 
                                    cursor-pointer border-[1px] border-[#333333] rounded-sm"
                        >
                          LEARN MORE
                        </motion.button>

                        </motion.div>

                      </div>
                  </div>
                </div>
            </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
