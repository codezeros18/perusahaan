// src/data/boilerData.ts
import img1 from '../assets/au10.jpg';
import img1grid1 from '../assets/aboutus4.png';

import img2 from '../assets/servmec1.jpg';
import img2grid1 from '../assets/servmec2.jpg';
import img2grid2 from '../assets/servmec3.jpg';
export interface ProjectInfo {
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

export const projectData: Record<string, ProjectInfo> = {
  "engineering": {
    name: "Engineering",
    image: img1,
    description: "Comprehensive engineering solutions for power plants and industrial energy systems.",
    title1: "Innovative designs tailored to your needs.",
    title2: "Efficient, safe, and sustainable.",
    description1:
      "AEI’s Engineering division provides end-to-end technical expertise in the design and optimization of energy systems, power generation facilities, and industrial equipment. From feasibility studies to detailed design, our team ensures reliability, safety, and performance.",
    description2:
      "We specialize in integrating modern technologies such as automation, pollution control, and energy efficiency enhancements. Each project is customized to meet client objectives while maintaining compliance with international standards.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle:
      "AEI delivers complete engineering support—planning, design, and optimization—for power and industrial projects.",
    contactButton: "Contact AEI",
    specs: [
      "Customized design solutions",
      "Advanced system integration",
      "Safety & compliance focus",
      "Sustainable engineering practices",
    ],
    grid: [
      { id: 1, src: img1grid1 },
      // { id: 2, src: img1grid2 },
    ],
  },
  "construction": {
    name: "Construction",
    image: img2,
    description: "Full-scope construction services for industrial and power generation facilities.",
    title1: "Precision execution of complex projects.",
    title2: "Built to last, on time and on budget.",
    description1:
      "AEI’s Construction division specializes in the execution of industrial plants, power stations, and supporting infrastructure. We manage projects from site preparation through commissioning with a focus on quality, safety, and reliability.",
    description2:
      "Our teams bring extensive experience in handling large-scale energy and industrial projects. With a commitment to efficiency, we ensure smooth coordination between engineering and construction to deliver world-class results.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle:
      "AEI provides turnkey construction solutions, ensuring timely and safe delivery of industrial and energy facilities.",
    contactButton: "Contact AEI",
    specs: [
      "Turnkey project delivery",
      "Strict safety standards",
      "Cost-effective solutions",
      "On-time completion",
    ],
    grid: [
      { id: 1, src: img2grid1 },
      { id: 2, src: img2grid2 },
    ],
  },
};
