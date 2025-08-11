import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaLinkedinIn, url: "https://linkedin.com", color: "hover:text-blue-600" },
  { icon: FaInstagram, url: "https://youtube.com", color: "hover:text-red-500" },
  { icon: FaEnvelope, url: "mailto:info@example.com", color: "hover:text-gray-400" },
];

const HeaderBar = () => {
  return (
    <div className="text-white/90 text-[14px] leading-[20px] tracking-[0.7px] font-[400] font-dm">
      <div className="max-w-6xl mx-auto hidden lg:flex justify-between items-center px-4 pt-1">
        {/* Left: Company name + contact */}
        <div className="flex items-center gap-4">
          <span className="tracking-wider">ANUGRAH ENERGI INDONESIA</span>
          <button className="hover:text-[#F37C1D] transition duration-300 cursor-pointer">CONTACT</button>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, url, color }, index) => (
            <React.Fragment key={index}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`cursor-pointer transition ${color}`}
              >
                <Icon />
              </a>

              {/* Only show divider if it's not the last item */}
              {index < socialLinks.length - 1 && (
                <div className="w-px h-10 bg-white/30"></div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HeaderBar;
