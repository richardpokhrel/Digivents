import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import vec9 from "../img/vec9.png";
import vec2 from "../img/vec2.png";
import uiImage from "../img/portfolio/1.png";
import interactiveDesignImage from "../img/portfolio/jhola.jpg";
import lincolnImage from "../img/portfolio/lincoln.jpeg";
import consultancyImage from "../img/portfolio/consultancy 2.jpg";
import brandingImage from "../img/portfolio/Branding.jpeg";
import jholaImage from "../img/portfolio/jhola.jpg";

// Fallback SVG for testing
const fallbackSvg =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=";

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    import("swiper/css");
    import("swiper/css/pagination");
    import("swiper/css/autoplay");
    import("swiper/css/navigation");
  }, []);

  return (
    <section
      id="portfolioSection"
      className="relative py-[100px] bg-gradient-to-br from-white to-pink-100 font-['Hanken_Grotesk',sans-serif] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Tabs */}
        <div className="mb-12 animate-slideInLeft">
          <h2 className="text-5xl lg:text-7xl font-bold text-[#510a3d] capitalize text-center">
            Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto text-center leading-relaxed">
            Discover our collection of innovative projects showcasing exceptional design and functionality.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`text-sm font-semibold text-[#510a3d] px-4 py-2 rounded-xl border-2 border-[#510a3d] ${
                activeTab === "all"
                  ? "bg-[#510a3d] text-white"
                  : "bg-transparent hover:bg-[#510a3d] hover:text-white"
              } transition-all duration-300`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("ux-ui")}
              className={`text-sm font-semibold text-[#510a3d] px-4 py-2 rounded-xl border-2 border-[#510a3d] ${
                activeTab === "ux-ui"
                  ? "bg-[#510a3d] text-white"
                  : "bg-transparent hover:bg-[#510a3d] hover:text-white"
              } transition-all duration-300`}
            >
              UX/UI
            </button>
            <button
              onClick={() => setActiveTab("all")} // Web Design redirects to All
              className={`text-sm font-semibold text-[#510a3d] px-4 py-2 rounded-xl border-2 border-[#510a3d] ${
                activeTab === "all"
                  ? "bg-[#510a3d] text-white"
                  : "bg-transparent hover:bg-[#510a3d] hover:text-white"
              } transition-all duration-300`}
            >
              Web Design
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "all" && (
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="project-slider h-[630px]"
            >
              <SwiperSlide>
                <div className="flex flex-col lg:flex-row items-end animate-fadeIn">
                  <div className="lg:w-4/12 mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#510a3d] mb-4">
                      Web App Development
                    </h2>
                    <p className="text-sm text-gray-500">Web Application / 2024</p>
                  </div>
                  <div className="lg:w-6/12">
                    <a href="../Pages/Protfolio.js" className="block h-[500px] overflow-hidden rounded-xl shadow-xl border border-gray-200 hover:border-[#510a3d] hover:scale-105 transition-all duration-300">
                      <img
                        src={uiImage}
                        alt="portfolio web app"
                        className="w-full h-full object-cover"
                        onError={(e) => (e.target.src = fallbackSvg)}
                      />
                    </a>
                  </div>
                  <div className="lg:w-3/12 pl-5">
                    <p className="text-lg text-gray-500 pb-8 leading-relaxed">
                      Cultivate business excellence through our meticulously crafted web application solutions. Enhance operational efficiency, elevate user experiences, and foster sustainable growth.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col lg:flex-row items-end animate-fadeIn">
                  <div className="lg:w-4/12 mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#510a3d] mb-4">
                      Interactive Design
                    </h2>
                    <p className="text-sm text-gray-500">Web Design / 2024</p>
                  </div>
                  <div className="lg:w-6/12">
                    <a href="../Pages/Protfolio.js" className="block h-[500px] overflow-hidden rounded-xl shadow-xl border border-gray-200 hover:border-[#510a3d] hover:scale-105 transition-all duration-300">
                      <img
                        src={interactiveDesignImage}
                        alt="portfolio interactive design"
                        className="w-full h-full object-cover"
                        onError={(e) => (e.target.src = fallbackSvg)}
                      />
                    </a>
                  </div>
                  <div className="lg:w-3/12 pl-5">
                    <p className="text-lg text-gray-500 pb-8 leading-relaxed">
                      Enhance user satisfaction with our meticulously designed UI/UX, ensuring seamless interaction and superior digital experiences.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <div className="arrows flex justify-center space-x-4 mt-8">
                <div className="swiper-button-prev text-[#510a3d] cursor-pointer bg-pink-100 rounded-full p-3 hover:bg-[#510a3d] hover:text-white transition-all duration-300">
                  <i className="fas fa-chevron-left text-lg"></i>
                </div>
                <div className="swiper-button-next text-[#510a3d] cursor-pointer bg-pink-100 rounded-full p-3 hover:bg-[#510a3d] hover:text-white transition-all duration-300">
                  <i className="fas fa-chevron-right text-lg"></i>
                </div>
              </div>
              <div className="swiper-pagination mt-6"></div>
            </Swiper>
          )}
          {activeTab === "ux-ui" && (
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="project-slider h-[630px]"
            >
              <SwiperSlide>
                <div className="flex flex-col lg:flex-row items-end animate-fadeIn">
                  <div className="lg:w-4/12 mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#510a3d] mb-4">
                      Minimalist Design for Powerful Business
                    </h2>
                    <p className="text-sm text-gray-500">Simple yet Effective / 2024</p>
                  </div>
                  <div className="lg:w-6/12">
                    <a href="../Pages/Protfolio.js" className="block h-[500px] overflow-hidden rounded-xl shadow-xl border border-gray-200 hover:border-[#510a3d] hover:scale-105 transition-all duration-300">
                      <img
                        src={lincolnImage}
                        alt="portfolio minimalist design"
                        className="w-full h-full object-cover"
                        onError={(e) => (e.target.src = fallbackSvg)}
                      />
                    </a>
                  </div>
                  <div className="lg:w-3/12 pl-5">
                    <p className="text-lg text-gray-500 pb-8 leading-relaxed">
                      Embrace minimalism with clean and simple design, focusing on clarity, functionality, and elegant aesthetics for seamless user experiences.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col lg:flex-row items-end animate-fadeIn">
                  <div className="lg:w-4/12 mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#510a3d] mb-4">
                      Minimalist Design for Powerful Business
                    </h2>
                    <p className="text-sm text-gray-500">Simple yet Effective / 2024</p>
                  </div>
                  <div className="lg:w-6/12">
                    <a href="../Pages/Protfolio.js" className="block h-[500px] overflow-hidden rounded-xl shadow-xl border border-gray-200 hover:border-[#510a3d] hover:scale-105 transition-all duration-300">
                      <img
                        src={consultancyImage}
                        alt="portfolio minimalist design"
                        className="w-full h-full object-cover"
                        onError={(e) => (e.target.src = fallbackSvg)}
                      />
                    </a>
                  </div>
                  <div className="lg:w-3/12 pl-5">
                    <p className="text-lg text-gray-500 pb-8 leading-relaxed">
                      Embrace minimalism with clean and simple design, focusing on clarity, functionality, and elegant aesthetics for seamless user experiences.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col lg:flex-row items-end animate-fadeIn">
                  <div className="lg:w-4/12 mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#510a3d] mb-4">
                      Branding with Mockups
                    </h2>
                    <p className="text-sm text-gray-500">Package Designing / 2023</p>
                  </div>
                  <div className="lg:w-6/12">
                    <a href="../Pages/Protfolio.js" className="block h-[500px] overflow-hidden rounded-xl shadow-xl border border-gray-200 hover:border-[#510a3d] hover:scale-105 transition-all duration-300">
                      <img
                        src={brandingImage}
                        alt="portfolio branding"
                        className="w-full h-full object-cover"
                        onError={(e) => (e.target.src = fallbackSvg)}
                      />
                    </a>
                  </div>
                  <div className="lg:w-3/12 pl-5">
                    <p className="text-lg text-gray-500 pb-8 leading-relaxed">
                      Enhance brand identity with meticulously designed mockups. Our professional approach ensures a compelling visual representation, reinforcing brand credibility and engagement.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col lg:flex-row items-end animate-fadeIn">
                  <div className="lg:w-4/12 mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#510a3d] mb-4">
                      Branding with Mockups
                    </h2>
                    <p className="text-sm text-gray-500">Package Designing / 2023</p>
                  </div>
                  <div className="lg:w-6/12">
                    <a href="../Pages/Protfolio.js" className="block h-[500px] overflow-hidden rounded-xl shadow-xl border border-gray-200 hover:border-[#510a3d] hover:scale-105 transition-all duration-300">
                      <img
                        src={jholaImage}
                        alt="portfolio packaging"
                        className="w-full h-full object-cover"
                        onError={(e) => (e.target.src = fallbackSvg)}
                      />
                    </a>
                  </div>
                  <div className="lg:w-3/12 pl-5">
                    <p className="text-lg text-gray-500 pb-8 leading-relaxed">
                      Enhance brand identity with meticulously designed mockups. Our professional approach ensures a compelling visual representation, reinforcing brand credibility and engagement.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <div className="arrows flex justify-center space-x-4 mt-8">
                <div className="swiper-button-prev text-[#510a3d] cursor-pointer bg-pink-100 rounded-full p-3 hover:bg-[#510a3d] hover:text-white transition-all duration-300">
                  <i className="fas fa-chevron-left text-lg"></i>
                </div>
                <div className="swiper-button-next text-[#510a3d] cursor-pointer bg-pink-100 rounded-full p-3 hover:bg-[#510a3d] hover:text-white transition-all duration-300">
                  <i className="fas fa-chevron-right text-lg"></i>
                </div>
              </div>
              <div className="swiper-pagination mt-6"></div>
            </Swiper>
          )}
        </div>
      </div>
      <img
        src={vec9}
        alt="decorative shape"
        className="absolute top-[15%] left-0 z-[1] pointer-events-none h-[120px] opacity-10 animate-float"
        onError={(e) => (e.target.src = fallbackSvg)}
      />
      <img
        src={vec2}
        alt="decorative shape"
        className="absolute bottom-[15%] right-0 z-[1] pointer-events-none h-[120px] opacity-10 animate-float-delayed"
        onError={(e) => (e.target.src = fallbackSvg)}
      />
      <style jsx>{`
        .swiper-pagination-bullet {
          background: #d1d5db; /* gray-300 */
          opacity: 0.6;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active {
          background: #510a3d;
          opacity: 1;
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 9s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;