// import React from 'react'
import { Link } from 'react-router-dom';
import card1 from '../assets/gaoi4a.jpg'
import card2 from '../assets/pp1.jpg'
import card3 from '../assets/servmec3.jpg'
import card4 from '../assets/au6.jpg'

const card = () => {
  const cards = [
  {
    image: card1,
    title: "Boiler",
    description: "Efficient, reliable boiler solutions for industry.",
    link: "/boiler"
  },
  {
    image: card2,
    title: "Energy",
    description: "Sustainable power systems for a better future.",
    link: "/auto"
  },
  {
    image: card3,
    title: "Infra",
    description: "Smart engineering for lasting infrastructure.",
    link: "/build"
  },
  {
    image: card4,
    title: "Smart",
    description: "Automation and IoT to boost performance.",
    link: "/service"
  },
];



  return (
    <div className="flex justify-center text-[#333333] font-montserrat">
      <div className="max-w-6xl mx-2 lg:mx-auto mt-10 lg:mt-18 px-2 lg:px-10 text-center">
        {/* Heading */}
        <h2 className="mx-auto max-w-[20rem] lg:max-w-3xl text-[30px] lg:text-[36px] leading-[35px] tracking-[1px] font-[400] mb-4">
          YOUR SINGLE SOURCE SOLUTION
        </h2>

        {/* Description */}
        <p className="max-w-[550px] mx-auto text-[12px] lg:text-[14px] leading-[25.2px] text-[#333333]/80 tracking-[0.5px] font-[400]">
          As a leader in steam plant solutions, AEI offers single-source sales,
          emergency rental, field service and repair of boilers and boiler room
          equipment.
        </p>

        {/* Divider */}
        <div className="h-[3px] w-14 bg-[#F37021] mx-auto mt-5 lg:mt-7 mb-4 md:mb-8" />

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-8 my-14">
          {cards.map((card, idx) => (
            <Link
              key={idx}
              to={card.link}
              className="group bg-[#F8F8F8] hover:bg-[#F37021] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-80 lg:h-56 object-cover"
              />
              {/* Text */}
              <div className="py-12 lg:py-10 px-4 lg:px-10 text-center">
                <h3 className="text-[28px] font-[400] tracking-[2.8px] leading-[34px] mb-2 text-[#333333] uppercase">
                  {card.title}
                </h3>
                <p className="text-[14px] px-2 md:px-0 leading-[25.2px] tracking-[0.5px] opacity-80 text-[#333333]/90 group-hover:text-white">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default card;