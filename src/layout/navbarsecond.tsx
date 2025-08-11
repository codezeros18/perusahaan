import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logos121.png";
import { BiChevronDown } from "react-icons/bi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuLevel, setMenuLevel] = useState(0);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  interface NavItem {
    label: string;
    subItems: string[];
  }

  const navItems: NavItem[] = [
    { label: "Boiler Systems", subItems: ["Fluidized Bed Boiler", "CFBC", "Chain Grate Boiler", "Reciprocrating Grate Boiler", "Gas & Oil Boiler", "Thermal Oil Boiler", "Boiler Part"] },
    { label: "Energy Solutions", subItems: ["Power Plant"] },
    { label: "Projects", subItems: ["Engineering", "Construction"] },
    { label: "Smart Technology", subItems: ["Automation", "IoT"] },
    { label: "After Sales", subItems: ["Maintenance & Services", "Spareparts"] },
    { label: "Company", subItems: ["About Us", "Contact"] },
  ];

  const openSubMenu = (label: NavItem["label"]) => {
    setActiveMenu(label);
    setMenuLevel(1);
  };

  const closeSubMenu = () => {
    setMenuLevel(0);
    setActiveMenu(null);
  };

  return (
    <div className="text-white border-t border-white/30 font-poppins relative">
      {/* === Navbar === */}
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-1">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 lg:h-20" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-7 text-sm font-medium">
          {navItems.map((item, idx) => (
            <div key={idx} className="group relative cursor-pointer">
              {/* Label */}
              <div className="flex flex-col items-center">
                <span className="flex items-center gap-1 text-[15px] text-white/85 font-[700] leading-[33px] tracking-[0.5px] py-4 transition-colors duration-300 group-hover:text-[#F37021] relative">
                  {item.label}
                  <BiChevronDown />
                  {/* Underline animation */}
                  <span
                    className="absolute bottom-2 left-0 w-full h-[2px] bg-[#F37021] 
                    origin-left scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-500 ease-out delay-75"
                  ></span>
                </span>
              </div>

              {/* Hover bridge to keep dropdown open over gap */}
              <div className="absolute left-0 top-full h-4 w-full"></div>

              {/* Dropdown */}
              <div
                className="absolute top-full -left-4 w-52 mt-4 bg-white text-black shadow-xl 
                opacity-0 group-hover:opacity-100 
                translate-y-2 group-hover:translate-y-0 
                pointer-events-none group-hover:pointer-events-auto
                transition-all duration-300 z-50"
              >
                {item.subItems.map((sub, i) => (
                  <Link
                    key={i}
                    to="/"
                    className="block px-4 py-3 hover:bg-[#F37021] transition-colors duration-200 hover:text-white"
                  >
                    <span className="block text-[12px] transition-transform duration-200 ease-out group/item hover:translate-x-2">
                      {sub}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} className="text-black font-bold text-[18px]">
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[9998] bg-black/10 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.32 }}
        className="fixed top-0 right-0 h-full w-[80%] bg-[#F3F3F3] text-black z-[9999] overflow-hidden"
        style={{
          boxShadow: "-6px 0 20px rgba(0,0,0,0.18)",
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b-[0.1px] border-b-gray-300">
          {menuLevel === 1 ? (
            <button onClick={closeSubMenu} className="flex items-center gap-2 text-sm font-semibold">
              <FaChevronLeft />
            </button>
          ) : (
            <div className="w-[20px]" />
          )}
          <span className="text-[14px] leading-[20px] font-[400] tracking-tight text-[#333333]">
            {menuLevel === 0 ? "Menu" : activeMenu}
          </span>
          <button
            onClick={() => {
              setIsOpen(false);
              setMenuLevel(0);
            }}
            className="text-2xl"
          >
            <FiX />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="relative h-full overflow-hidden">
          <AnimatePresence mode="wait">
            {/* Main Menu */}
            {menuLevel === 0 && (
              <motion.div
                key="main"
                initial={{ x: 0, opacity: 1 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.36 }}
                className="absolute top-0 left-0 w-full"
              >
                {navItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between pr-6 ml-6 py-1 border-b-[0.1px] border-b-gray-300 text-sm font-semibold"
                  >
                    <span className="flex-1 pr-4 border-r text-[14px] leading-[20px] font-[400] tracking-tight text-[#333333] border-gray-200">
                      {item.label}
                    </span>
                    <button
                      onClick={() => openSubMenu(item.label)}
                      className="ml-4 flex-shrink-0 bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center text-[13px] font-medium shadow-sm"
                    >
                      {item.subItems.length}
                    </button>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Sub Menu */}
            {menuLevel === 1 && (
              <motion.div
                key="sub"
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.36 }}
                className="absolute top-0 left-0 w-full"
              >
                {navItems
                  .find((m) => m.label === activeMenu)
                  ?.subItems.map((sub, idx) => (
                    <Link
                      key={idx}
                      to="/"
                      className="block pr-6 ml-6 py-3 border-b-[0.1px] border-b-gray-300 text-[14px] leading-[20px] font-[400] tracking-tight text-[#333333] border-gray-200"
                      onClick={() => {
                        setIsOpen(false);
                        setMenuLevel(0);
                      }}
                    >
                      {sub}
                    </Link>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default NavBar;
