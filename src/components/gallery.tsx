// import React from "react";
import img1 from "../assets/bg1.jpeg";

const divisions = [
  {
    title: "Rental Boiler",
    image: img1,
  },
  {
    title: "Field Service",
    image: img1,
  },
  {
    title: "Boiler Controls",
    image: img1,
  },
  {
    title: "Combustion",
    image: img1,
  },
  {
    title: "Stack Monitoring",
    image: img1,
  },
  {
    title: "Rental Boiler",
    image: img1,
  },
  {
    title: "Field Service",
    image: img1,
  },
  {
    title: "Boiler Controls",
    image: img1,
  },
  {
    title: "Combustion",
    image: img1,
  },
  {
    title: "Stack Monitoring",
    image: img1,
  },
  // Tambahkan item lain sesuai kebutuhan
];

const Gallery = () => {
  return (
    <div className="flex flex-col justify-center text-[#333333] font-dm">
      <div className="max-w-7xl mx-2 lg:mx-auto my-10 px-4 text-center">
        {/* Heading */}
        <h2 className="mx-auto max-w-[20rem] lg:max-w-3xl text-[34px] leading-[35px] tracking-[1px] font-[400] mb-4">
          TRUST THE EXPERTS AT AEI
        </h2>

        {/* Divider */}
        <div className="h-[3px] w-14 bg-[#F37021] mx-auto mt-5 mb-8" />

        {/* Description */}
        <p className="max-w-2xl mx-auto text-[14px] lg:text-[16px] leading-[25.2px] font-[400] opacity-70">
          We have ten dedicated steam plant divisions to serve every aspect of
          the boiler room, each led by highly skilled veteran technicians with
          over 20 years at IB&M. Our cross-industry service divisions include:
        </p>
      </div>
       {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {divisions.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[65vh] lg:h-96 object-cover transform group-hover:scale-105 transition duration-500"
              />
              {/* Overlay */}
              <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white py-3 px-4 text-center transition duration-300 group-hover:bg-opacity-90">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm opacity-80">Division</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Gallery;
