// import React from 'react'
import card1 from '../assets/gaoi4a.jpg'
import card2 from '../assets/au6.jpg'
import card3 from '../assets/servmec3.jpg'
import card4 from '../assets/main1.jpeg'

const card = () => {
const cards = [
  {
    image: card1,
    title: "Boiler",
    description: "Solutions for boiler systems and power plant operations",
  },
  {
    image: card2,
    title: "Auto",
    description: "Industrial automation and IoT integration for smart systems",
  },
  {
    image: card3,
    title: "Build",
    description: "Engineering and construction projects for industrial needs",
  },
  {
    image: card4,
    title: "Service",
    description: "Comprehensive maintenance, service, and repair solutions",
  },
];

  return (
    <div className="flex justify-center text-[#333333] font-dm">
      <div className="max-w-6xl mx-2 lg:mx-auto mt-10 lg:mt-18 px-4 text-center">
        {/* Heading */}
        <h2 className="mx-auto max-w-[20rem] lg:max-w-3xl text-[34px] leading-[35px] tracking-[1px] font-[400] mb-4">
          YOUR SINGLE <br /> SOURCE SOLUTION
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-[14px] lg:text-[16px] leading-[25.2px] font-[400] opacity-70">
          As a leader in steam plant solutions, AEI offers single-source sales,
          emergency rental, field service and repair of boilers and boiler room
          equipment.
        </p>

        {/* Divider */}
        <div className="h-[3px] w-14 bg-[#F37021] mx-auto mt-5 lg:mt-7 mb-4 md:mb-8" />

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8 my-14">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-[#F8F8F8] hover:bg-[#F37021] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-96 lg:h-56 object-cover"
              />
              {/* Text */}
              <div className="p-10 text-center">
                <h3 className="text-[28px] font-[400] tracking-[2.8px] leading-[34px] mb-2 text-black">
                  {card.title}
                </h3>
                <p className="text-[14px] leading-[25.2px] tracking-[0.5px] opacity-80 text-black group-hover:text-white">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  )
}

export default card