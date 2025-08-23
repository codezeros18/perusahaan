// src/data/boilerData.ts
import img1 from '../assets/pp2.jpeg';
import img2 from '../energy/bagfilter/1.jpeg';
import img1grid1 from '../energy/powerplant/10.jpg';
import img1grid2 from '../energy/powerplant/11.jpg';
import img2grid1 from '../energy/bagfilter/1.jpeg';
import img2grid2 from '../energy/bagfilter/2.jpg';
export interface EnergyInfo {
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

export const energyData: Record<string, EnergyInfo> = {
  "power-plant": {
    name: "Power Plant",
    image: img1,
    description: "Industrial facility that generates electricity by converting energy from various sources.",
    title1: "Reliable electricity generation.",
    title2: "Flexible energy sourcing.",
    description1:
      "A Power Plant—also known as a generating station—is an industrial facility that converts various forms of energy into electric power. Most power plants use generators driven by mechanical energy created through thermal, hydraulic, nuclear, or renewable processes to supply electricity to the grid.",
    description2:
      "Depending on configuration, plants can harness energy from fossil fuels (coal, gas, oil), nuclear reactions, water flow (hydroelectric), wind, solar, or geothermal heat. Some modern plants also combine cycles—like gas and steam turbines—to improve efficiency and adapt to fluctuating demand.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle:
      "AEI offers turnkey design, construction, and maintenance services for power generation facilities across energy types.",
    contactButton: "Contact AEI",
    specs: [
      "Scalable output capacity",
      "Diverse fuel/energy sources",
      "Grid-ready integration",
      "Optimized efficiency"
    ],
    grid: [
      { id: 1, src: img1grid1 },
      { id: 2, src: img1grid2 },
    ],
  },
  "bag-filter": {
    name: "Bag Filter",
    image: img2,
    description:
      "Air pollution control device that captures fine dust and particulates from industrial exhaust.",
    title1: "High-performance filtration.",
    title2: "Improves air quality and efficiency.",
    description1:
      "Bag Filters—or Baghouse systems—use fabric bags to capture fine particles from flue gases before release into the atmosphere. Common in power plants, cement kilns, steel mills, and other industries, they help meet stringent emissions standards.",
    description2:
      "With filtration efficiencies often exceeding 99%, modern designs include automated cleaning (e.g., pulse-jet systems). Bag Filters protect downstream equipment, reduce maintenance needs, and contribute to safer, cleaner plant operations.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle:
      "AEI provides complete Bag Filter solutions—selection, installation, and upkeep—for industrial air quality control.",
    contactButton: "Contact AEI",
    specs: [
      "Ultra-fine particulate capture",
      "Durable filter media",
      "Automated bag cleaning",
      "Environmental compliance"
    ],
    grid: [
      { id: 1, src: img2grid1 },
      { id: 2, src: img2grid2 },
    ],
  },
};

