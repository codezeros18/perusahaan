interface HeroSectionProps {
  bg: string;
  title: string;
  description: string;
  buttonText: string;
}

export default function HeroSection({
  bg,
  title,
  description,
  buttonText,
}: HeroSectionProps) {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden group">
      <div
        className="relative h-[60vh] md:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-500" />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="max-w-7xl px-4 text-center">
            <h2 className="mx-auto max-w-[20rem] md:max-w-3xl text-[28px] leading-[34px] tracking-[2.8px] font-[400] font-dm text-white">
              {title}
            </h2>
            <p className="max-w-[550px] my-4 md:my-6 mx-auto text-[18px] leading-[26px] font-[400] tracking-[0.5px] text-white font-dm">
              {description}
            </p>
            <button
              className="mt-2 text-white text-[14px] leading-[18px] font-bold px-7 py-4 font-dm
             hover:text-white/90 hover:bg-[#F37021] transition duration-500 
             cursor-pointer border-[1px] border-white/90 hover:border-[#F37021] rounded-sm uppercase"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
