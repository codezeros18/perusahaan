// src/data/boilerData.ts
import img1 from '../assets/au1.jpg';
import img1grid1 from '../assets/au2.png'

import img2 from '../assets/au6.jpg';
import img2grid1 from '../assets/au11.jpg';
import img2grid2 from '../assets/au4.png';
export interface SmartInfo {
  name: string;
  image: string;
  description: string;
  specs: string[];
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  contactTitle: string;
  contactNumber: string;
  contactSubtitle: string;
  contactButton: string;
  grid: { id: number; src: string }[];
}

export const smartData: Record<string, SmartInfo> = {
  "automation": {
    name: "Automation",
    image: img1,
    description: "Fluidized Bed Boiler is an interesting and innovative combustion system used to produce steam",
    title1 : "Rugged durability for a variety of fuels.",
    title2 : "High efficiency and low emissions.",
    description1 : "Fluidized Bed Boiler, FBB is an interesting and innovative combustion system used to produce steam or electricity in a variety of industries. Its greatness is ability to burn a wide array of fuels efficiently, including low-quality coal, biomass, and industrial waste.",
    description2 : "The fluidized bed boiler process centers on the concept of (fluidization), in which solid fuels such as sand or limestone are suspended and heated by a stream of air or gas flowing through the bed of those particles. The fluidization effect creates an article similar to that of a boiling liquid, allowing better mixing and contact between fuel and combustion air.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI offers single-source sales, emergency rental, field service and repair of boilers and boiler room equipment.",
    contactButton: "Contact AEI",
    specs: [
      "Kapasitas besar",
      "Efisiensi tinggi",
      "Ramah lingkungan",
      "Pengurangan emisi"
    ],
    grid : [
      { id: 1, src: img1grid1},
      // { id: 2, src: img1grid2},
    ],
  },
  "iot": {
    name: "Iot",
    image: img2,
    description: "The circulating fluidized bed (CFB) is a type of fluidized bed combustion that utilizes a recirculating loop for even greater efficiency",
    title1 : "Rugged durability for a variety of fuels.",
    title2 : "High efficiency and low emissions.",
    description1 : "The circulating fluidized bed (CFB) is a type of fluidized bed combustion that utilizes a recirculating loop for even greater efficiency of combustion. while achieving lower emission of pollutants. Reports suggest that up to 95% of pollutants can be absorbed before being emitted into the atmosphere.",
    description2 : "The technology is limited in scale however, due to its extensive use of limestone, and the fact that it produces waste byproducts.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI offers single-source sales, emergency rental, field service and repair of boilers and boiler room equipment.",
    contactButton: "Contact AEI",
    specs: [
      "Kapasitas besar",
      "Efisiensi tinggi",
      "Ramah lingkungan",
      "Pengurangan emisi"
    ],
    grid : [
      { id: 1, src: img2grid1},
      { id: 2, src: img2grid2},
    ],
  },
};
