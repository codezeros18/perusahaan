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
    description: "Advanced automation solutions to streamline industrial operations.",
    title1: "Effortless operations, maximized efficiency.",
    title2: "Smart workflows, reduced manual error.",
    description1:
      "AEI's Automation services deploy intelligent systems—including robotics, PLCs, and control logic—to automate repetitive or complex tasks. This enables faster production, higher precision, and minimized human error.",
    description2:
      "With automation, you get scalable solutions that boost throughput, free up workforce for high-value tasks, and elevate operational consistency—key for meeting rigorous industrial standards.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle:
      "AEI delivers industrial automation—from design and programming to implementation and optimization.",
    contactButton: "Contact AEI",
    specs: [
      "Improves operational efficiency",
      "Minimizes manual errors",
      "Supports high-volume throughput",
      "Scalable and flexible"
    ],
    grid: [
      { id: 1, src: img1grid1 },
      // { id: 2, src: img1grid2 },
    ],
  },
  "iot": {
    name: "Industrial IoT",
    image: img2,
    description: "Connected sensors and devices unlocking real-time data, efficiency, and insights.",
    title1: "Visibility across all operations.",
    title2: "Data-driven decisions on demand.",
    description1:
      "Industrial IoT (IIoT) integrates sensors, connectivity, and analytics to gather real-time data from equipment and processes. AEI's IIoT solutions enable predictive maintenance, energy optimization, and remote asset monitoring to keep your operations smart and proactive." ,
    description2:
      "IIoT empowers immediate insights, improved safety, and resource efficiency—with faster response to anomalies, predictive planning, and data-driven strategy shaping next-gen operations." ,
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle:
      "AEI offers IIoT strategy, implementation, and analytics integration for smart industrial operations.",
    contactButton: "Contact AEI",
    specs: [
      "Real-time system insights",
      "Proactive maintenance",
      "Enhanced safety monitoring",
      "Energy and cost optimization"
    ],
    grid: [
      { id: 1, src: img2grid1 },
      { id: 2, src: img2grid2 },
    ],
  },
};

