// src/data/boilerData.ts
import img1 from '../services/maintenance/2.jpeg';
import img1grid1 from '../services/maintenance/1.jpeg';
import img1grid2 from '../services/maintenance/5.jpeg';

import img2 from '../assets/sparepart.png';
import img2grid1 from '../assets/sparepart.png';

import img3 from '../services/installesp/15.jpg';
import img3grid1 from '../services/installesp/13.jpg';
import img3grid2 from '../services/installflyash/1.jpg';

import img4 from '../services/terminasi/10.jpg';
import img4grid1 from '../services/terminasi/2.jpg';
import img4grid2 from '../services/terminasi/13.jpg';

export interface ServiceInfo {
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

export const serviceData: Record<string, ServiceInfo> = {
  "maintenance-services": {
    name: "Maintenance Services",
    image: img1,
    description: "Comprehensive maintenance solutions to optimize industrial equipment performance.",
    title1: "Maximize uptime, minimize risk.",
    title2: "Proactive care for critical systems.",
    description1:
      "Our Maintenance Services cover a full spectrum—from preventive and predictive maintenance to corrective repairs. We focus on inspection, calibration, troubleshooting, and parts replacement to ensure your systems run reliably and efficiently.",
    description2:
      "By combining systematic maintenance strategies with condition monitoring tools, we help prevent costly breakdowns, extend equipment life, and maintain plant safety and compliance.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle:
      "AEI delivers tailored maintenance plans including preventive, predictive, and corrective services for industrial assets.",
    contactButton: "Contact AEI",
    specs: [
      "Prevents downtime",
      "Extends equipment lifespan",
      "Safe, reliable operations",
      "Data-driven maintenance"
    ],
    grid: [
      { id: 1, src: img1grid1 },
      { id: 2, src: img1grid2 }
    ],
  },
  "spareparts": {
    name: "Spare Parts Supply",
    image: img2,
    description: "Reliable sourcing and delivery of quality spare parts for industrial systems.",
    title1: "Fast, accurate parts delivery.",
    title2: "Genuine parts for sustained performance.",
    description1:
      "Our Spare Parts service ensures you always have access to critical components when needed. We manage inventory and sourcing of high-quality parts—filters, valves, sensors, electrical components, and more—from trusted manufacturers.",
    description2:
      "Quick access to the right parts helps reduce downtime, improve maintenance efficiency, and support long-term asset reliability.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle:
      "AEI offers comprehensive spare parts support—inventory management, sourcing, and logistics for seamless operations.",
    contactButton: "Contact AEI",
    specs: [
      "Fast sourcing",
      "Quality-assured parts",
      "Inventory support",
      "Minimizes downtime"
    ],
    grid: [{ id: 1, src: img2grid1 }],
  },
  "installation-services": {
    name: "Installation Services",
    image: img3,
    description: "Expert installation of equipment and systems to industrial-grade standards.",
    title1: "Precision installations, guaranteed.",
    title2: "Built right, built once.",
    description1:
      "AEI’s Installation Services specialize in setting up a wide range of industrial systems—such as electrical equipment, piping, control systems, and support infrastructure—ensuring everything meets design specifications and safety guidelines.",
    description2:
      "Our experienced installation teams focus on accuracy, safety, and timely commissioning, minimizing rework and helping your operations go live on schedule.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle:
      "AEI provides professional installation services—focused on quality execution, safety, and compliance.",
    contactButton: "Contact AEI",
    specs: [
      "Accurate system setup",
      "Safety-first approach",
      "On-schedule delivery",
      "Engineered precision"
    ],
    grid: [
      { id: 1, src: img3grid1 },
      { id: 2, src: img3grid2 }
    ],
  },
  "termination": {
    name: "Termination Services",
    image: img4,
    description: "Professional cable termination and connection services for reliable electrical performance.",
    title1: "Secure, high-integrity connections.",
    title2: "Engineered for long-term stability.",
    description1:
      "Our Termination Services cover installation, termination, and testing of electrical cables and conductors—Low Voltage up to Medium Voltage. Proper termination ensures optimal conductivity and reduces risk of failure.",
    description2:
      "By following industry standards and using quality materials, we enhance electrical safety, system reliability, and longevity.",
    contactTitle: "One Call Does It All",
    contactNumber: "+1 (800) 123-4567",
    contactSubtitle:
      "AEI delivers expert cable termination, commissioning, and quality checks for electrical systems.",
    contactButton: "Contact AEI",
    specs: [
      "High-quality connections",
      "Meets electrical standards",
      "Improves system reliability",
      "Safe and precise"
    ],
    grid: [
      { id: 1, src: img4grid1 },
      { id: 2, src: img4grid2 }
    ],
  },
};
