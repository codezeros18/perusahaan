import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

interface GalleryCardItem {
  link: string;
  image: string;
  title: string;
}

interface GalleryCardProps {
  item: GalleryCardItem;
}

export default function GalleryCard({ item }: GalleryCardProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Link
      to={item.link}
      className="relative group cursor-pointer overflow-hidden shadow-md"
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-[65vh] lg:h-96 object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Mobile */}
      <div
        className="absolute inset-0 flex items-center justify-center md:hidden"
        onTouchStart={() => setIsActive(true)}
        onTouchMove={() => setIsActive(true)}
        onTouchEnd={() => setIsActive(false)}
      >
        {/* Background */}
        <div
          className={`absolute inset-0 bg-orange-500/80 transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="border border-white text-white font-semibold text-center tracking-widest uppercase px-4 py-2 w-10/12 z-10"
        >
          {item.title}
        </motion.div>
      </div>

      {/* Desktop */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center group">
        {/* Background muncul saat hover */}
        <div className="absolute inset-0 bg-orange-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Border selalu ada */}
        <div className="border border-white p-4 text-white font-semibold text-center tracking-widest uppercase z-10">
          {item.title}
        </div>
      </div>
    </Link>
  );
}
