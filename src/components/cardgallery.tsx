import { Link } from "react-router-dom";

interface CardGalleryItem {
  title: string;
  image: string;
  link: string;
}

interface CardGalleryProps {
  items: CardGalleryItem[];
  heading?: string;
  description?: string;
}

export default function CardGallery({ items, heading, description }: CardGalleryProps) {
  return (
    <div className="flex flex-col justify-center text-[#333333] my-8 font-dm">
      {/* Heading (optional) */}
      {(heading || description) && (
        <div className="max-w-7xl mx-2 lg:mx-auto my-10 px-4 text-center">
          {heading && (
            <h2 className="mx-auto max-w-[20rem] lg:max-w-3xl text-[28px] leading-[35px] tracking-[1px] text-[#333333]/90 font-[400] mb-4">
              {heading}
            </h2>
          )}
          {description && (
            <p className="max-w-2xl mx-auto text-[14px] lg:text-[16px] leading-[25.2px] font-[400] opacity-70">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Grid Cards */}
      <div className="max-w-6xl mx-2 lg:mx-auto my-10 px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((division, index) => (
            <Link
              key={index}
              to={division.link}
              className="relative group overflow-hidden shadow-lg"
            >
              <img
                src={division.image}
                alt={division.title}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="border border-white text-white font-semibold text-center tracking-widest uppercase px-4 py-2 w-10/12 z-10">
                  {division.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
