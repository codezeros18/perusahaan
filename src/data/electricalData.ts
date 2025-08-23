// src/data/boilerData.ts
import img1 from '../electrical/esp/2.jpg';
import img1grid1 from '../electrical/esp/3.jpg';
import img1grid2 from '../electrical/esp/6.jpeg';

import img2 from '../electrical/flyash/4.jpg';
import img2grid1 from '../electrical/flyash/1.jpg';
import img2grid2 from '../electrical/flyash/2.jpg';

import img3 from '../electrical/generator/1.jpg';
import img3grid1 from '../electrical/generator/2.jpg';
import img3grid2 from '../electrical/generator/3.jpg';

import img4 from '../electrical/genset/1.jpg';
import img4grid1 from '../electrical/genset/1.jpg';
import img4grid2 from '../electrical/genset/1.jpg';

import img5 from '../electrical/trafo/1.jpg';
import img5grid1 from '../electrical/trafo/1.jpg';
import img5grid2 from '../electrical/trafo/1.jpg';

import img6 from '../electrical/lvmv/1.jpg';
import img6grid1 from '../electrical/lvmv/1.jpg';
import img6grid2 from '../electrical/lvmv/2.jpg';

import img7 from '../electrical/turbine/1.jpg';
import img7grid1 from '../electrical/turbine/2.jpg';
import img7grid2 from '../electrical/turbine/3.jpg';

import img8 from '../electrical/grounding/1.jpg';
import img8grid1 from '../electrical/grounding/3.jpg';
import img8grid2 from '../electrical/grounding/6.jpg';

import img9 from '../electrical/plc/12.jpg';
import img9grid1 from '../electrical/plc/4.jpg';
import img9grid2 from '../electrical/plc/8.jpg';

import img10 from '../electrical/scada/3.jpg';
import img10grid1 from '../electrical/scada/3.jpg';
import img10grid2 from '../electrical/scada/3.jpg';

import img11 from '../electrical/swass/2.jpg';
import img11grid1 from '../electrical/swass/1.jpg';
import img11grid2 from '../electrical/swass/2.jpg';




export interface ElectricalInfo {
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

export const electricalData: Record<string, ElectricalInfo> = {
  "esp": {
    name: "ESP (Electrostatic Precipitator)",
    image: img1,
    description: "Efficient dust collection system for industrial applications.",
    title1: "Reliable air pollution control.",
    title2: "Clean operation with low maintenance.",
    description1: "An Electrostatic Precipitator (ESP) is used to remove fine particles such as dust and smoke from flue gas. It is widely used in power plants and industries to maintain air quality.",
    description2: "By charging particles electrically and collecting them on plates, ESPs achieve high efficiency while keeping emissions low and the environment cleaner.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI offers single-source sales, emergency rental, field service and repair of boilers and electrical equipment.",
    contactButton: "Contact AEI",
    specs: [
      "High collection efficiency",
      "Durable construction",
      "Low operating cost",
      "Environmentally friendly"
    ],
    grid: [
      { id: 1, src: img1grid1 },
      { id: 2, src: img1grid2 },
    ],
  },
  "fly-ash": {
    name: "Fly Ash Handling System",
    image: img2,
    description: "Safe and efficient system for managing fly ash from combustion.",
    title1: "Reliable ash handling.",
    title2: "Clean and safe operations.",
    description1: "Fly ash handling systems are designed to collect, transport, and store ash produced from combustion processes. They help maintain plant cleanliness and safety.",
    description2: "With effective sealing and transport methods, these systems reduce dust, improve working conditions, and support environmentally responsible operations.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI provides complete solutions for ash handling and electrical support systems.",
    contactButton: "Contact AEI",
    specs: [
      "Efficient ash removal",
      "Low maintenance needs",
      "Dust-free operation",
      "Durable and reliable"
    ],
    grid: [
      { id: 1, src: img2grid1 },
      { id: 2, src: img2grid2 },
    ],
  },
  "generator": {
    name: "Generator",
    image: img3,
    description: "Reliable power generation equipment for industrial use.",
    title1: "Consistent power output.",
    title2: "Built for long-term reliability.",
    description1: "Generators convert mechanical energy into electrical power. They are essential for power plants, industries, and backup energy solutions.",
    description2: "With robust design and adaptable configurations, generators ensure continuous operation and energy security in critical applications.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI supplies and services generators for industrial and commercial applications.",
    contactButton: "Contact AEI",
    specs: [
      "Stable electricity supply",
      "High efficiency",
      "Durable design",
      "Easy maintenance"
    ],
    grid: [
      { id: 1, src: img3grid1 },
      { id: 2, src: img3grid2 },
    ],
  },
  "genset": {
    name: "Genset",
    image: img4,
    description: "Compact power solution for backup and continuous use.",
    title1: "Reliable backup power.",
    title2: "Compact and efficient design.",
    description1: "Gensets combine a generator with an engine, offering an all-in-one solution for power generation. They are widely used in industrial, commercial, and emergency applications.",
    description2: "Available in various capacities, gensets ensure uninterrupted electricity supply where grid power is unavailable or unreliable.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI provides gensets for diverse applications, from standby to continuous power.",
    contactButton: "Contact AEI",
    specs: [
      "Quick start-up",
      "Fuel efficient",
      "Reliable performance",
      "Easy installation"
    ],
    grid: [
      { id: 1, src: img4grid1 },
      { id: 2, src: img4grid2 },
    ],
  },
  "trafo-auxiliary": {
    name: "Auxiliary Transformer",
    image: img5,
    description: "Transformer for stable and efficient voltage management.",
    title1: "Reliable power distribution.",
    title2: "Efficient voltage control.",
    description1: "Auxiliary transformers step down power for use in plant auxiliary systems. They ensure reliable power supply for equipment and operations.",
    description2: "Built for durability and efficiency, these transformers support stable operations across industries.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI supplies, installs, and services transformers for industrial applications.",
    contactButton: "Contact AEI",
    specs: [
      "Stable voltage output",
      "Durable design",
      "High efficiency",
      "Low maintenance"
    ],
    grid: [
      { id: 1, src: img5grid1 },
      { id: 2, src: img5grid2 },
    ],
  },
  "lv-mv": {
    name: "LV-MV Switchgear",
    image: img6,
    description: "Reliable switching and protection equipment for electrical systems.",
    title1: "Safe power distribution.",
    title2: "Durable and efficient design.",
    description1: "LV (Low Voltage) and MV (Medium Voltage) switchgear are used to control, protect, and isolate electrical equipment. They ensure safe and efficient operation of electrical networks.",
    description2: "Designed to handle varying loads and conditions, switchgear systems protect equipment and personnel while minimizing downtime.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI offers a full range of switchgear solutions for power distribution and protection.",
    contactButton: "Contact AEI",
    specs: [
      "Safe operation",
      "Reliable protection",
      "Durable build",
      "Easy maintenance"
    ],
    grid: [
      { id: 1, src: img6grid1 },
      { id: 2, src: img6grid2 },
    ],
  },
  "turbine": {
    name: "Turbine",
    image: img7,
    description: "High-performance turbines for industrial power generation.",
    title1: "Efficient energy conversion.",
    title2: "Built for continuous operation.",
    description1: "Turbines convert thermal or mechanical energy into rotational energy, which is then used to generate electricity. They are the backbone of most power plants worldwide.",
    description2: "With robust construction and advanced design, turbines deliver high efficiency, long service life, and reliable performance under demanding conditions.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI provides turbines and full service support for industrial power generation.",
    contactButton: "Contact AEI",
    specs: [
      "High efficiency",
      "Reliable performance",
      "Durable construction",
      "Low maintenance needs"
    ],
    grid: [
      { id: 1, src: img7grid1 },
      { id: 2, src: img7grid2 },
    ],
  },
"grounding": {
    name: "Grounding System",
    image: img8,
    description: "Safety-critical system that ties electrical equipment to earth for protection and stability.",
    title1: "Foundation for electrical safety.",
    title2: "Reliable fault protection.",
    description1: "Grounding (or earthing) connects electrical systems or devices to earth using a low-resistance path. It provides a reference voltage level and safely directs fault or excess currents into the ground, minimizing risk of electrical shock or fire.",
    description2: "Proper grounding protects both systems and personnel by stabilizing voltage during faults, reducing electromagnetic interference, and ensuring compliance with safety standards.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI offers sales, installation, testing, and maintenance of grounding and electrical protection systems.",
    contactButton: "Contact AEI",
    specs: [
      "Ensures electrical safety",
      "Protects equipment and personnel",
      "Reduces electrical noise",
      "Standards-compliant"
    ],
    grid: [
      { id: 1, src: img8grid1 },
      { id: 2, src: img8grid2 }
    ],
  },
  "plc": {
    name: "Programmable Logic Controller (PLC)",
    image: img9,
    description: "Ruggedized industrial computer for reliable automation and control.",
    title1: "Flexible machine control.",
    title2: "Built for harsh environments.",
    description1: "A PLC is an industrial computer designed to control machinery and processes in real time. It monitors sensor inputs, executes programmed logic, and controls outputs to automate operations efficiently.",
    description2: "Built to withstand vibration, temperature extremes, and electrical noise, PLCs deliver reliable performance, modular expansion, and easy reprogramming.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI supplies, configs, and services PLC solutions for industrial automation.",
    contactButton: "Contact AEI",
    specs: [
      "Real-time control",
      "Modular and programmable",
      "Rugged construction",
      "Application-flexible"
    ],
    grid: [
      { id: 1, src: img9grid1 },
      { id: 2, src: img9grid2 }
    ],
  },
  "scada-system": {
    name: "SCADA System",
    image: img10,
    description: "Centralized system for real-time monitoring and control of industrial processes.",
    title1: "Comprehensive process oversight.",
    title2: "Remote control and automation.",
    description1: "SCADA—Supervisory Control and Data Acquisition—integrates hardware and software to monitor and control industrial operations. It gathers real-time data from devices like PLCs, displays them to operators, and enables remote control.",
    description2: "By combining data acquisition, HMIs, historical logging, and control interfaces, SCADA systems enhance operational efficiency, support alarm handling, and facilitate rapid decision-making.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI delivers SCADA solutions including setup, integration, and ongoing support.",
    contactButton: "Contact AEI",
    specs: [
      "Real-time monitoring",
      "Alarm and data logging",
      "Remote control capability",
      "Scalable integration"
    ],
    grid: [
      { id: 1, src: img10grid1 },
      { id: 2, src: img10grid2 }
    ],
  },
  "swass-system": {
    name: "SWAS System (Steam Water Analysis System)",
    image: img11,
    description: "Monitoring system for assessing steam and water quality in power and boiler systems.",
    title1: "Protects plant integrity.",
    title2: "Optimizes efficiency and safety.",
    description1: "A SWAS system analyzes and monitors the chemical properties of steam and water in boiler systems. It detects conditions like scaling, corrosion, or foaming to maintain operation efficiency and prevent equipment damage.",
    description2: "By providing reliable sampling and measurement, SWAS systems support proactive maintenance, safeguard plant assets, and ensure regulatory compliance.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle: "AEI delivers SWAS panels, calibration, and maintenance for steam and water systems.",
    contactButton: "Contact AEI",
    specs: [
      "Continuous water/steam monitoring",
      "Prevents corrosion & scaling",
      "Enhances safety",
      "Helps meet standards"
    ],
    grid: [
      { id: 1, src: img11grid1 },
      { id: 2, src: img11grid2 }
    ],
  },
};
