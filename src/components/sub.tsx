import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import img1 from '../assets/aboutus1a.jpg'; // Adjust the path as necessary

const accordionData = [
  { title: "MORE POWER TO YOU", content: "Industrial Boiler & Mechanical specializes in the sale of new and reconditioned used boilers as well as the repair, installation and start up of steam process boiler systems for commercial, industrial and power utility facilities in the U.S. and abroad." },
  { title: "OVER 30 YEARS OF SERVICE", content: "Serving the steam process industry since 1987, we have successfully completed over 13,000 projects with a 99% on time completion rate." },
  { title: "INDUSTRIAL BOILER EXPERTS", content: "We're available 24 hours a day and have specialized personnel ready to service every aspect of your boiler & steam plant needs." },
];

const SubSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center items-center text-[#333333] font-dm">
      {/* Grid dengan 3 kolom di desktop */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-[1150px] w-full mx-auto px-4 pb-10 lg:pb-28 mt-auto items-start">
        {/* Accordion Section (1/3 lebar) */}
        <div className="md:col-span-2 flex flex-col gap-3">
          {accordionData.map((item, index) => (
            <div key={index}>
              {/* Title with border */}
              <div
                className="border border-gray-300/50 cursor-pointer flex items-center"
                onClick={() => toggleAccordion(index)}
              >
                <div className="w-12 h-12 flex items-center justify-center border-r border-gray-300/50">
                  {activeIndex === index ? (
                    <FaMinus className="text-gray-700" />
                  ) : (
                    <FaPlus className="text-gray-700" />
                  )}
                </div>
                  <div
                        className={`flex-1 px-4 py-3 text-[15px] leading-[21px] font-[400] transition-colors duration-200 ${
                          activeIndex === index
                            ? "text-[#F37021]"
                            : "text-[#333333]/80"
                        }`}
                  >
                  {item.title}
                </div>
              </div>

              {/* Animated content outside border */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 py-3 text-[14px] leading-[25.2px] font-[400] tracking-[0.5px] text-gray-600">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>



        {/* Video / Image Section (2/3 lebar) */}
        <div className="md:col-span-3 flex flex-col border border-gray-300/50">
          <img
            src={img1}
            alt="IBM Logo"
            className="w-full h-32 md:h-[200px] object-cover"
          />
          <div className="py-4 text-center text-sm border-t border-gray-300/50">
            Photo
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubSection;
