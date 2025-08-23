import { Link } from "react-router-dom";
import card1 from "../assets/fbc2.jpeg";
import card2 from "../electrical/esp/1.jpg";
import card3 from "../energy/bagfilter/1.jpeg";
import card4 from "../electrical/generator/1.jpg";
import card5 from "../electrical/turbine/1.jpg";
import card6 from "../services/installesp/13.jpg";
import card7 from "../energy/powerplant/10.jpg";
import card8 from "../services/overhaulesp/3.jpeg";
import card9 from "../assets/au1.jpg";
import card10 from "../assets/au6.jpg";

const divisions = [
  { title: "Fluidized Bed Boiler", image: card1, link: "/boiler-systems/fluidized-bed-boiler" },
  { title: "ESP", image: card2, link: "/electrical-instrument/esp" },
  { title: "Bag Filter", image: card3, link: "/energy-solutions/bag-filter" },
  { title: "Generator", image: card4, link: "/electrical-instrument/generator" },
  { title: "Installation", image: card6, link: "/service/installation-services" },
  { title: "Power Plant", image: card7, link: "/energy-solutions/power-plant" },
  { title: "Turbine", image: card5, link: "/electrical-instrument/turbine" },
  { title: "Maintenance", image: card8, link: "/service/maintenance-services" },
  { title: "Automation", image: card9, link: "/smart-technology/automation" },
  { title: "IoT", image: card10, link: "/smart-technology/iot" },
];



export default function Gallery() {
  return (
    <div className="flex flex-col justify-center text-[#333333] font-dm">
      {/* Heading */}
      <div className="max-w-7xl mx-2 lg:mx-auto my-10 px-4 text-center">
        <h2 className="mx-auto max-w-[20rem] lg:max-w-3xl text-[34px] leading-[35px] tracking-[1px] font-[400] mb-4">
          TRUST THE EXPERTS AT AEI
        </h2>
        <div className="h-[3px] w-14 bg-[#F37021] mx-auto mt-5 mb-8" />
        <p className="max-w-2xl mx-auto text-[14px] lg:text-[16px] leading-[25.2px] font-[400] opacity-70">
          We have ten dedicated steam plant divisions to serve every aspect of
          the boiler room, each led by highly skilled veteran technicians with
          over 20 years at IB&M. Our cross-industry service divisions include:
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5">
      {divisions.map((division, index) => (
        <Link
          key={index}
          to={division.link}
          className="relative group overflow-hidden shadow-lg"
        >
          <img
            src={division.image}
            alt={division.title}
            className="w-full h-[65vh] md:h-96 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          {/* Overlay dengan gradient */}
          <div className="absolute inset-0">
            {/* Gradient dari bawah & atas */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70" />
            {/* Lapisan tipis di tengah untuk highlight teks */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
          
          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="border border-white text-white font-semibold text-center tracking-widest uppercase px-4 py-2 w-10/12 z-10">
              {division.title}
            </span>
          </div>
        </Link>
      ))}
</div>


    </div>
  );
}
