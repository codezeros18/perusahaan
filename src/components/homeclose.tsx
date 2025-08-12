import sampleImg from "../assets/aboutus1.jpg"; // ganti gambar kamu
import bg from "../assets/bg1.jpeg"; // ganti gambar kamu
import { Link } from "react-router-dom";

const sections = [
  {
    subtitle: "A new chapter began in 2020",
    title: "RESHAPING INDUSTRY STANDARDS",
    description:
      "2020 marked a pivotal year for us. In the face of global challenges, we expanded our expertise, embraced new technologies, and reinforced our commitment to delivering reliable solutions. That year wasn’t just about adapting — it was about redefining what’s possible for our clients and partners.",
    button: "SEE WHAT WE ACHIEVED",
    image: sampleImg,
  },
];

const HomeClose = () => {
  return (
    <div
      className="flex justify-center text-[#333333] font-dm relative bg-cover bg-center bg-no-repeat py-10 md:py-0"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay putih supaya teks lebih terbaca */}
      <div className="absolute inset-0 bg-white/95"></div>

      <div className="max-w-7xl mx-2 lg:mx-auto px-2 lg:px-10 relative z-10 w-full">
        {sections.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[75vh]"
          >
            {/* Bagian Kiri */}
            <div className="md:col-span-7 flex flex-col items-center justify-center text-center">
                <p className="italic text-[14px] leading-[25.2px] font-[400] tracking-[0.5px] text-[#333333]/90">{item.subtitle}</p>
                <div className="h-[2px] w-14 bg-[#F37021] mt-4 lg:mt-5 mb-4 md:mb-6" />
                <h2 className="text-[28px] leading-[35px] tracking-[1px] font-[400] text-[#333333] mb-6">{item.title}</h2>
                <p className="text-[#333333]/90 text-[14px] leading-[25.2px] mb-6 font-[400] tracking-[0.5px] max-w-3xl">
                    {item.description}
                </p>
                <Link
                to="/projects" // ganti dengan path tujuan kamu
                className="border text-[13px] leading-[18.5px] tracking-[0.5px] font-[400] border-[#F37021] text-[#F37021] mt-2 md:mt-4 px-6 py-3 rounded hover:bg-[#333333] hover:border-[#333333] cursor-pointer hover:text-white transition inline-block"
                >
                {item.button}
                </Link>
            </div>
            {/* Bagian Kanan */}
            <div className="md:col-span-5">
              <div className="rounded shadow-md">
                <img src={item.image} alt={item.title} className="w-full h-44 md:h-64 object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeClose;
