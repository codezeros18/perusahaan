interface SplitSectionProps {
  bg: string;
  img: string;
  heading: string;
  highlight: string;
  description: string;
}

export default function SplitSection({
  bg,
  img,
  heading,
  highlight,
  description,
}: SplitSectionProps) {
return (
    <div className="relative grid grid-cols-1 md:grid-cols-12 items-center gap-x-14 gap-y-12 md:gap-y-0 px-6 py-8 md:py-14 lg:px-16 font-dm">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-left bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      />
      {/* Overlay Background */}
      <div className="absolute inset-0 grid grid-cols-12">
        <div className="col-span-5 bg-white/90" />
        <div className="col-span-7 bg-white" />
      </div>

      {/* Text */}
      <div className="relative md:col-span-5 text-left z-10">
        <h2 className="text-3xl md:text-[50px] text-[#333333]/90 font-[400] tracking-[2.5px] leading-[40px] md:leading-[60px]">
          {heading} <br />
          <span className="font-[700]">{highlight}</span>
        </h2>
        <div className="h-[1px] w-20 bg-[#F37021] mt-8 mb-12 md:mx-0" />
        <p className="text-[#333333]/90 text-[14px] leading-[25.2px] tracking-[0.5px] mx-auto">
          {description}
        </p>
      </div>

      {/* Image */}
      <div className="relative md:col-span-7 flex justify-center md:justify-end z-10">
        <img
          src={img}
          alt="Split Section Image"
          className="max-h-[70vh] w-[100%] object-cover"
        />
      </div>
    </div>
  );
}
