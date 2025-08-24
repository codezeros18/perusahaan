// components/LandingBanner.tsx
interface LandingBannerProps {
  image: string;
  name: string;
  description: string;
}

export default function LandingBanner({ image, name, description }: LandingBannerProps) {
  return (
    <div className="relative w-full h-[35vh] md:h-screen overflow-hidden group">
      <div
        className="relative h-[35vh] md:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-500"></div>

        {/* Content */}
        <div className="relative z-10 w-full flex items-center justify-start h-full pt-8 md:pt-0">
          <div className="max-w-7xl mx-2 md:mx-auto my-10 px-4 text-center w-full">
            <h2 className="mx-auto max-w-[20rem] md:max-w-3xl text-[16px] md:text-[61px] leading-[16px] md:leading-[61px] tracking-normal md:tracking-[3px] font-[400] uppercase font-anton text-white">
              {name}
            </h2>
            <div className="h-[0.5px] w-24 bg-white mx-auto mt-2 md:mt-5 mb-4 md:mb-8" />
            <p className="max-w-32 md:max-w-[550px] mx-auto text-[6px] md:text-[23px] leading-[6px] md:leading-[24px] font-[400] tracking-normal md:tracking-[1px] text-white/90 font-dm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
