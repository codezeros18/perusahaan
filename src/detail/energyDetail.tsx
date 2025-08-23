// src/pages/energyDetail.tsx
import { useParams } from "react-router-dom";
import { energyData } from "../data/energyData";
import NavBar from "../layout/navbarwrap";
import Footer from "../layout/footer";
import Card from "../components/card";
import { useState } from "react";

export default function EnergyDetail() {
  const { energyId } = useParams<{ energyId: string }>();
  const data = energyId ? energyData[energyId] : null;
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);

  if (!data) {
    return <p className="p-6">energy tidak ditemukan.</p>;
  }

  return (
    <>
        <NavBar isSidebarOpen={false} setIsSidebarOpen={function (): void {
              throw new Error("Function not implemented.");
            } } />
          <div className="relative w-full h-[35vh] md:h-screen overflow-hidden group">
            {/* Background image tetap di sini */}
            <div
              className="relative h-[35vh] md:h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${data.image})` }}
            >
              {/* Overlay darken absolute, full cover, opacity dan smooth transition */}
              <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-500"></div>

              {/* Konten utama di atas overlay */}
              <div className="relative z-10 w-full flex items-center justify-start h-full pt-8 lg:pt-0">
                <div className="max-w-7xl mx-2 lg:mx-auto my-10 px-4 text-center w-full">
                  {/* Heading */}
                  <h2 className="mx-auto max-w-[20rem] lg:max-w-3xl text-[16px] lg:text-[61px] leading-[16px] lg:leading-[61px] tracking-normal lg:tracking-[3px] font-[400] uppercase font-anton text-white">
                    {data.name}
                  </h2>

                  {/* Divider */}
                  <div className="h-[0.5px] w-24 bg-white mx-auto mt-2 lg:mt-5 mb-4 lg:mb-8" />

                  {/* Description */}
                  <p className="max-w-32 lg:max-w-[550px] mx-auto text-[6px] lg:text-[23px] leading-[6px] lg:leading-[24px] font-[400] tracking-normal lg:tracking-[1px] text-white/90 font-dm">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6 font-dm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {/* Kiri: 2 kolom di desktop */}
              <div className="md:col-span-2">
                {/* Judul, deskripsi, specs */}
                <h2 className="text-[28px] leading-[34px] font-[400] tracking-[2.8px] mb-4 text-[#333333]/90">{data.title1}</h2>
                <p className="text-[14px] leading-[25.2px] tracking-[0.5px] text-[#333333]/80 mb-6 ">{data.description1}</p>
                <h2 className="text-[28px] leading-[34px] font-[400] tracking-[2.8px] mb-4 text-[#333333]/90">{data.title2}</h2>
                <p className="text-[14px] leading-[25.2px] tracking-[0.5px] text-[#333333]/80 mb-6 ">{data.description2}</p>
                <ul className="divide-y divide-gray-300 border-t border-b mt-8 border-gray-300">
                  {data.specs.map((item) => (
                    <li key={item} className="flex items-center py-3 px-4">
                      <svg className="w-5 h-5 text-[#333333] font-[900] mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#333333]/80 text-[14px] leading-[21.5px] tracking-[0.5px] font-[400]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-3 md:col-span-2 order-2 md:order-2 lg:order-3">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                  {data.grid.map((photo) => (
                    <div
                      key={photo.id}
                      className="relative group cursor-pointer overflow-hidden shadow-md"
                      onClick={() => setZoomSrc(photo.src)} // buka zoom dengan src asli
                    >
                      <img
                        src={photo.src}
                        alt={`photo-${photo.id}`}
                        className="w-full h-36 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Overlay orange saat hover */}
                      <div className="absolute inset-0 bg-orange-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        {/* Kotak teks di tengah overlay */}
                        <div className="border border-white p-4 text-white font-semibold text-center tracking-widest uppercase">
                          Zoom
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal zoom */}
              {zoomSrc && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
                  onClick={() => setZoomSrc(null)} // klik area hitam untuk close
                >
                  <img
                    src={zoomSrc}
                    alt="Zoomed"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              )}

              {/* Kanan: Contact container */}
              <div className="bg-[#F8F8F8] px-8 py-6 text-gray-800 self-start order-3 md:order-3 lg:order-2">
                <p className="mb-2 font-[400] text-[25px] leading-[35px] tracking-[1px] text-[#333333]/90">{data.contactTitle}</p>
                <p className="text-orange-500/80 text-[20px] leading-[30px] tracking-normal font-[400] mb-4">{data.contactNumber}</p>
                <p className="mb-6 text-[#333333]/80 text-[13px] leading-[26px] tracking-[0.7px] font-[400]">
                  {data.contactSubtitle}
                </p>
                <button className="bg-orange-500 hover:bg-[#333333] text-[13px] leading-[19.5px] uppercase tracking-[0.52px] text-white py-2 px-6 cursor-pointer rounded transition duration-500 font-[500]">
                  {data.contactButton}
                </button>
              </div>
            </div>
          </div>
        <Card />
          <div className="bg-yellow-400 text-[#333333]/90 px-6 py-10 md:py-14 font-dm">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 px-2 md:px-6 items-center gap-4 md:gap-6">
            {/* Kiri: Text */}
            <div className="md:col-span-2">
              <h2 className="text-[24px] lg:text-[30px] leading-[36px] text-center md:text-start tracking-[2.16px] mb-2 md:mb-4 font-[700] uppercase">
                energy EXPERTS
              </h2>
              <p className="text-[14px] lg:text-[20px] leading-[25.2px] lg:leading-[36px] text-center md:text-start font-[400] tracking-[0.7px] lg:tracking-[1px]">
                Contact IB&amp;M today at (855) 753-energy to speak with our sales engineers about
                selecting the right new or fully reconditioned used oil fired energy for your facility.
              </p>
            </div>

            {/* Kanan: Button */}
            <div className="flex justify-center md:justify-end">
              <button className="border cursor-pointer border-[#333333]/80 px-8 py-3 flex items-center gap-2 uppercase font-medium tracking-wide hover:bg-white hover:border-none hover:text-[#333333] transition duration-300">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#3b2300"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m2 0a2 2 0 002-2V8a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2h10z"
                  />
                </svg> */}
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <Footer />
    </>
  );
}
