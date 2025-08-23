// src/data/boilerData.ts
import black from '../assets/black.jpg';
import img1 from '../assets/fbc2.jpeg';
import img2 from '../assets/cfbc2.jpg';
import img5 from '../assets/gaoi3a.jpg';
import img10 from '../boilersystems/ashbin/2.jpg';
import img1grid1 from '../assets/fbc1.jpeg';
import img1grid2 from '../assets/fbc4.png';
import img2grid1 from '../assets/cfbc1.jpg';
import img2grid2 from '../assets/cfbc2.jpg';
import img5grid1 from '../assets/gaoi3a.jpg';
import img5grid2 from '../assets/gaoi4a.jpg';
import img10grid1 from '../boilersystems/ashbin/1.jpg';
import img10grid2 from '../boilersystems/ashbin/5.jpg';

export interface BoilerInfo {
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

export const boilerData: Record<string, BoilerInfo> = {
  "fluidized-bed-boiler": {
    name: "Fluidized Bed Boiler",
    image: img1,
    description: "An advanced combustion system designed for fuel flexibility and cleaner energy.",
    title1 : "Fuel flexibility for multiple industries",
    title2 : "Efficient performance with lower emissions",
    description1 : "Fluidized Bed Boilers use a unique method of suspending fuel particles on a stream of air, creating a fluid-like motion. This allows for even combustion and high efficiency when using various fuels such as coal, biomass, or industrial waste.",
    description2 : "Operating at lower combustion temperatures, these boilers reduce nitrogen oxide emissions and allow in-furnace sulfur removal using limestone, making them an eco-friendly option.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI offers sales, rental, field service and repair of boilers and boiler room equipment.",
    contactButton: "Contact AEI",
    specs: [
      "High efficiency",
      "Fuel flexibility",
      "Lower emissions",
      "Durable design"
    ],
    grid : [
      { id: 1, src: img1grid1},
      { id: 2, src: img1grid2 },
    ],
  },
  "cfbc": {
    name: "Circulating Fluidized Bed Combustion",
    image: img2,
    description: "A fluidized bed boiler with enhanced circulation for even greater efficiency.",
    title1 : "Optimized combustion process",
    title2 : "Eco-friendly and reliable solution",
    description1 : "The Circulating Fluidized Bed Combustion (CFBC) system improves fuel efficiency by continuously recirculating solid particles, ensuring complete combustion and better heat utilization.",
    description2 : "It can handle a wide variety of fuels while significantly reducing emissions, making it a dependable choice for power and industrial plants.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI offers sales, rental, field service and repair of boilers and boiler room equipment.",
    contactButton: "Contact AEI",
    specs: [
      "Consistent performance",
      "Lower emissions",
      "Wide fuel range",
      "Reliable operation"
    ],
    grid : [
      { id: 1, src: img2grid1},
      { id: 2, src: img2grid2},
    ],
  },
  "chain-grate-boiler": {
    name: "Chain Grate Boiler",
    image: black,
    description: "A mechanical stoker boiler using a moving chain to feed fuel into the furnace.",
    title1 : "Simple and effective design",
    title2 : "Proven reliability in operation",
    description1 : "The Chain Grate Boiler uses a traveling chain mechanism to move solid fuels such as coal or biomass into the combustion chamber, providing steady fuel feeding.",
    description2 : "This system offers stable performance, low maintenance, and has been widely used for decades in various industries.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI offers sales, rental, field service and repair of boilers and boiler room equipment.",
    contactButton: "Contact AEI",
    specs: [
      "Reliable operation",
      "Simple maintenance",
      "Stable performance",
      "Durable design"
    ],
    grid : [],
  },
  "reciprocrating-grate-boiler": {
    name: "Reciprocating Grate Boiler",
    image: black,
    description: "A moving grate system designed for flexible fuel handling and efficient combustion.",
    title1 : "Flexible combustion technology",
    title2 : "Durable design with optimized airflow",
    description1 : "Reciprocating Grate Boilers use a step-grate firing system where fuel is moved gradually across the grate. This allows different moisture and size fuels to burn efficiently.",
    description2 : "The system provides controlled combustion, better fuel mixing, and stable operation with minimal manual intervention.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI offers sales, rental, field service and repair of boilers and boiler room equipment.",
    contactButton: "Contact AEI",
    specs: [
      "Fuel flexibility",
      "Efficient combustion",
      "Stable performance",
      "Robust construction"
    ],
    grid : [],
  },
  "gas-oil-boiler": {
    name: "Gas & Oil Boiler",
    image: img5,
    description: "Efficient steam and hot water generation using natural gas or oil as fuel.",
    title1 : "Fast and reliable heating",
    title2 : "Flexible fuel choices",
    description1 : "Gas & Oil Boilers are widely used for industrial heating applications, offering quick start-up, high efficiency, and compact designs.",
    description2 : "They can be configured for natural gas, propane, or oil, providing a dependable energy source across many industries.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI offers sales, rental, field service and repair of boilers and boiler room equipment.",
    contactButton: "Contact AEI",
    specs: [
      "High efficiency",
      "Fuel flexibility",
      "Compact design",
      "Reliable operation"
    ],
    grid : [
      { id: 1, src: img5grid1},
      { id: 2, src: img5grid2 },
    ],
  },
  "thermal-oil-boiler": {
    name: "Thermal Oil Boiler",
    image: black,
    description: "A heat transfer system using thermal oil instead of steam or water.",
    title1 : "High temperature with low pressure",
    title2 : "Safe and efficient heat transfer",
    description1 : "Thermal Oil Boilers circulate heated oil through a closed-loop system, allowing for precise temperature control without the risks of high-pressure steam.",
    description2 : "They are ideal for industries requiring stable high temperatures such as chemical, textile, and food processing plants.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI offers sales, rental, field service and repair of boilers and boiler room equipment.",
    contactButton: "Contact AEI",
    specs: [
      "Stable high temperature",
      "Safe operation",
      "Efficient heat transfer",
      "Low maintenance"
    ],
    grid : [],
  },
  "ash-bin-system": {
    name: "Ash Bin System",
    image: img10,
    description: "An ash handling solution designed to collect and store combustion byproducts safely.",
    title1 : "Efficient ash collection",
    title2 : "Reliable storage system",
    description1 : "The Ash Bin System is engineered to handle ash generated from combustion processes, ensuring clean and safe storage without disrupting boiler operations.",
    description2 : "It improves plant cleanliness, reduces manual handling, and supports compliance with environmental standards.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI offers sales, rental, field service and repair of boilers and boiler room equipment.",
    contactButton: "Contact AEI",
    specs: [
      "Efficient ash handling",
      "Safe storage",
      "Low maintenance",
      "Improved cleanliness"
    ],
    grid : [
      { id: 1, src: img10grid1},
      { id: 2, src: img10grid2},
    ],
  }
};
