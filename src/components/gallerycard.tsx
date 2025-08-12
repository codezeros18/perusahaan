import { motion } from "framer-motion";
import { Link } from "react-router-dom";
interface GalleryCardItem {
  link: string;
  image: string;
  title: string;
}

interface GalleryCardProps {
  item: GalleryCardItem;
}

export default function GalleryCard({ item }: GalleryCardProps) {

  return (
    <Link
  to={item.link}
  className="relative group cursor-pointer overflow-hidden shadow-md h-[65vh] lg:h-96"
>
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
  />

  {/* Mobile Overlay */}
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="border border-white px-4 py-2 text-white font-semibold uppercase tracking-widest text-center max-w-[90%]"
    >
      {item.title}
    </motion.div>
  </div>

  {/* Desktop Overlay */}
  <div className="absolute inset-0 hidden md:grid place-items-center group pointer-events-none">
    <div className="absolute inset-0 bg-orange-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto" />
    <div className="border border-white p-4 text-white font-semibold text-center tracking-widest uppercase z-10 pointer-events-auto">
      {item.title}
    </div>
  </div>
</Link>

  );
}
