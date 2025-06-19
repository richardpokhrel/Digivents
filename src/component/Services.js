import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ser1 from "../img/icons/ser1.svg";
import ser2 from "../img/icons/ser2.svg";
import ser3 from "../img/icons/ser3.svg";
import ser4 from "../img/icons/ser4.svg";
import ser5 from "../img/icons/arrow_lg.svg";
import dec from "../img/vec9.png";

// Fallback SVG for testing
const fallbackSvg =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=";

const ServicesSection = () => {
  useEffect(() => {
    import("swiper/css");
    import("swiper/css/pagination");
    import("swiper/css/autoplay");
  }, []);

  return (
    <section
      id="servicesSection"
      className="relative py-[100px] bg-gradient-to-br from-white via-gray-50 to-pink-50 font-['Hanken_Grotesk',sans-serif] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="pb-[50px] border-b border-gray-200 animate-slideInLeft">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end">
            <div className="lg:w-1/2">
              <h2 className="text-[48px] lg:text-[60px] font-bold text-[#510a3d] leading-tight">
                We Provide Service To Support Company
              </h2>
            </div>
            <div className="lg:w-4/12 mt-4 lg:mt-0">
              <p className="text-lg text-gray-500 leading-relaxed">
                We offer a comprehensive range of services designed to enhance
                your brand’s online presence, engage your audience, and drive
                business growth.
              </p>
            </div>
          </div>
        </div>

        {/* Services Slider */}
        <div className="mt-8">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              380: {slidesOerView: 1.1},
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="services-slider"
          >
            <SwiperSlide>
              <div className="relative p-[40px_20px] bg-white rounded-xl shadow-lg border border-gray-200 hover:border-[#510a3d] hover:shadow-xl group transition-all duration-300">
                <div className="icon">
                  <img
                    src={ser1}
                    alt="Digital Platform icon"
                    className="h-[80px]"
                    onError={(e) => (e.target.src = fallbackSvg)}
                  />
                </div>
                <div className="mt-4">
                  <h6 className="text-[28px] font-semibold text-[#510a3d]">
                    Digital Platform
                  </h6>
                  <p className="text-lg text-gray-500">
                    Streamline Your Presence
                  </p>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-pink-100 text-[#510a3d] text-lg font-semibold">
                    02
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>Social Media Management</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>Graphics Design</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>ADs Creation</span>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative p-[40px_20px] bg-white rounded-xl shadow-lg border border-gray-200 hover:border-[#510a3d] hover:shadow-xl group transition-all duration-300">
                <div className="icon">
                  <img
                    src={ser2}
                    alt="Business Strategy icon"
                    className="h-[80px]"
                    onError={(e) => (e.target.src = fallbackSvg)}
                  />
                </div>
                <div className="mt-4">
                  <h6 className="text-[28px] font-semibold text-[#510a3d]">
                    Business Strategy
                  </h6>
                  <p className="text-lg text-gray-500">
                    Improve Your Business
                  </p>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-pink-100 text-[#510a3d] text-lg font-semibold">
                    03
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>Brand Awareness</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>Product Marketing</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>Promotion</span>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative p-[40px_20px] bg-white rounded-xl shadow-lg border border-gray-200 hover:border-[#510a3d] hover:shadow-xl group transition-all duration-300">
                <div className="icon">
                  <img
                    src={ser3}
                    alt="Web Application icon"
                    className="h-[80px]"
                    onError={(e) => (e.target.src = fallbackSvg)}
                  />
                </div>
                <div className="mt-4">
                  <h6 className="text-[28px] font-semibold text-[#510a3d]">
                    Web Application
                  </h6>
                  <p className="text-lg text-gray-500">
                    Craft Your Web Application
                  </p>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-pink-100 text-[#510a3d] text-lg font-semibold">
                    04
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>UI/UX Design</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>Portfolio Development</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>E-commerce Development</span>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative p-[40px_20px] bg-white rounded-xl shadow-lg border border-gray-200 hover:border-[#510a3d] hover:shadow-xl group transition-all duration-300">
                <div className="icon">
                  <img
                    src={ser4}
                    alt="Search Engine Optimization icon"
                    className="h-[80px]"
                    onError={(e) => (e.target.src = fallbackSvg)}
                  />
                </div>
                <div className="mt-4">
                  <h6 className="text-[28px] font-semibold text-[#510a3d]">
                    SEO
                  </h6>
                  <p className="text-lg text-gray-500">
                    Optimize Your Website
                  </p>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-pink-100 text-[#510a3d] text-lg font-semibold">
                    01
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>Improve Traffic</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>Boosts Traffic</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>Enhances Visibility</span>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative p-[40px_20px] bg-white rounded-xl shadow-lg border border-gray-200 hover:border-[#510a3d] hover:shadow-xl group transition-all duration-300">
                <div className="icon">
                  <img
                    src={ser5}
                    alt="Content Marketing icon"
                    className="h-[80px]"
                    onError={(e) => (e.target.src = fallbackSvg)}
                  />
                </div>
                <div className="mt-4">
                  <h6 className="text-[28px] font-semibold text-[#510a3d]">
                    Content Marketing
                  </h6>
                  <p className="text-lg text-gray-500">
                    Engaging Your Audience
                  </p>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center justify-center w-[40px] h-[40px] rounded-full bg-pink-100 text-[#510a3d] text-lg font-semibold">
                    05
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>Engaging Blog Posts</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>Video Content Creation</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-500 text-lg">
                    <span className="ico">
                      <i className="fas fa-plus text-[#510a3d]"></i>
                    </span>
                    <span>Social Media Content</span>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <div className="swiper-pagination mt-6"></div>
          </Swiper>
        </div>
      </div>
      <img
        src={dec}
        alt="Decorative vector"
        className="absolute top-[20%] left-0 z-[1] pointer-events-none h-[100px] opacity-10 animate-float"
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
            transform: translateY(-10px);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;