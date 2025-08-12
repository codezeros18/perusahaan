import { Link } from "react-router-dom";
import card1 from "../assets/pp2.jpeg";
import card2 from "../assets/aboutus4.png";
import card3 from "../assets/servmec2.jpg";
import card4 from "../assets/au6.jpg";
import card5 from "../assets/au11.jpg";
import card6 from "../assets/main1.jpeg";
import card7 from "../assets/fbc2.jpeg";
import card8 from "../assets/esp1a.jpg";
import card9 from "../assets/gaoi4a.jpg";
import card10 from "../assets/cfbc2.jpg";

const divisions = [
  { title: "Power Plant", image: card1, link: "/power-plant" },
  { title: "Engineering", image: card2, link: "/power-plant" },
  { title: "Construction", image: card3, link: "/power-plant" },
  { title: "Automation", image: card4, link: "/power-plant" },
  { title: "IoT", image: card5, link: "/power-plant" },
  { title: "Maintenance", image: card6, link: "/power-plant" },
  { title: "Fluidized Bed Boiler", image: card7, link: "/power-plant" },
  { title: "Boiler Part", image: card8, link: "/power-plant" },
  { title: "Gas & Oil Boiler", image: card9, link: "/power-plant" },
  { title: "CFBC", image: card10, link: "/power-plant" },
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
