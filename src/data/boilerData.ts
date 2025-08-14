// src/data/boilerData.ts
import black from '../assets/black.jpg';
import img1 from '../assets/fbc2.jpeg';
import img2 from '../assets/cfbc2.jpg';
// import img3 from '../assets/chain.jpg';
// import img4 from '../assets/recip.jpg';
// import img5 from '../assets/gaoi1.jpg';
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
      { id: 2, src: img1grid2 },
    ],
  },
  "cfbc": {
    name: "Circulating Fluidized Bed Combustion",
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
  "chain-grate-boiler": {
    name: "Chain Grate Boiler",
    image: black,
    description: "A type of mechanical stoker for a furnace, in which the grate consists of an endless chain",
    title1 : "Rugged durability for a variety of fuels.",
    title2 : "High efficiency and low emissions.",
    description1 : "A type of mechanical stoker for a furnace, in which the grate consists of an endless chain that draws the solid fuel into the furnace as it rotates.",
    description2 : "A wide endless traveling chain that feeds and supports the fuel in a boiler furnace.",
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
      { id: 1, src: ""},
      { id: 2, src: ""},
    ],
  },
  "reciprocrating-grate-boiler": {
    name: "Reciprocrating Grate Boiler",
    image: black,
    description: "Boiler ini menggunakan prinsip pembakaran pada bed yang terfluidisasi...",
    title1 : "Rugged durability for a variety of fuels.",
    title2 : "High efficiency and low emissions.",
    description1 : "The grate is air cooled and divided into three to five zones per lane with one to three lanes in total. The grate bars’ speed and the primary air supply are regulated for each grate zone individually. The individualized control of each zone offers an optimized combustion. The grate bars are made of high-alloyed cast steel and supplied pre-mounted. The grate is function tested before delivery.",
    description2 : "A reciprocating step grate firing is one of commercialized combustion technologies suitable for burning various types of biomass fuels with varying moisture contents and particle sizes such as wood pallets and refuse-derived fuel.",
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
      { id: 1, src: ""},
      { id: 2, src: ""},
    ],
  },
  "gas-oil-boiler": {
    name: "Gas & Oil Boiler",
    image: img5,
    description: "Gas boilers are powered by natural gas or propane and are more efficient than standard boilers",
    title1 : "Rugged durability for a variety of fuels.",
    title2 : "High efficiency and low emissions.",
    description1 : "Gas boilers are powered by natural gas or propane and are more efficient than standard boilers. The fuel for a gas boiler is piped into the boiler from an outside source that is connected directly to the boiler. The distribution of heat using a gas steam boiler depends on its configuration.",
    description2 : "Gas steam boilers can be used for industrial purposes and low-pressure applications.",
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
      { id: 1, src: img5grid1},
      { id: 2, src: img5grid2 },
    ],
  },
  "thermal-oil-boiler": {
    name: "Thermal Oil Boiler",
    image: black,
    description: "Boiler ini menggunakan prinsip pembakaran pada bed yang terfluidisasi...",
    title1 : "Rugged durability for a variety of fuels.",
    title2 : "High efficiency and low emissions.",
    description1 : "A thermal oil boiler fires through a helical coil and generates energy from the hot products of combustion. This, by heating the coil through radiation and convection. The coil heats the thermal oil or fluid that is pumped through the thermal oil boiler. The thermal oil heats coils in various types of heat users.",
    description2 : "A thermal oil is commonly used as a working fluid that circulate through the absorber tube and transform the solar irradiation into thermal energy and carries heat to heat exchangers or analogous for driving a Rankine steam turbine. The Rankine cycle is an idealized thermodynamic cycle describing the process by which certain heat engines, such as steam turbines or reciprocating steam engines, allow mechanical work to be extracted from a fluid as it moves between a heat source and heat sink.",
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
      { id: 1, src: ""},
      { id: 2, src: ""},
    ],
  },
  "ash-bin-system": {
    name: "Ash Bin System",
    image: img10,
    description: "Boiler ini menggunakan prinsip pembakaran pada bed yang terfluidisasi...",
    title1 : "Rugged durability for a variety of fuels.",
    title2 : "High efficiency and low emissions.",
    description1 : "A power plant is a type of industrial building used to produce electricity using raw materials. To meet society's electrical needs, the majority of power plants use one or more generators that transform mechanical energy into electrical energy. Solar power plants are an exception, as they produce this electricity without the usage of a turbine by using photovoltaic cells.",
    description2 : "A power plant is a set of equipment and machinery used to generate electrical energy through the process of transforming energy from various energy sources. Most types of power plants produce a 3-phase alternating current mains voltage. In addition, most electricity generation uses synchronous generators powered by prime movers who derive energy from fuel or natural resources. The main components in power plants include primary energy installations, start-up installations, cooling installations and electrical installations. The type of power plant is generally named according to the initial driving force used, including water (PLTA), diesel (PLTD), steam (PLTU), gas (PLTG), gas and steam (PLTGU), geothermal (PLTP), and nuclear (NPP).",
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
      { id: 1, src: img10grid1},
      { id: 2, src: img10grid2},
    ],
  }
};
