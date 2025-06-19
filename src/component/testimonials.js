import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@fortawesome/fontawesome-free/css/all.min.css";
import titIco from "../img/icons/tit_ico.svg";
import titIco2 from "../img/icons/tit_ico2.svg";
import qt from "../img/icons/qt.svg";
import vec9 from "../img/vec9.png";
import vec3 from "../img/vec3.png";

// Fallback SVG for testing
const fallbackSvg =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=";

const TestimonialsSection = () => {
  useEffect(() => {
    import("swiper/css");
    import("swiper/css/pagination");
    import("swiper/css/autoplay");
  }, []);

  return (
    <section
      id="testimonialsSection"
      className="relative py-[100px] bg-gradient-to-br from-white to-pink-100 font-['Hanken_Grotesk',sans-serif] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12 animate-slideInLeft">
          <div className="flex justify-center">
            <div className="lg:w-7/12">
              <h6 className="text-sm font-semibold text-[#510a3d] flex items-center justify-center mb-4">
                <img
                  src={titIco}
                  alt="title icon"
                  className="h-[20px] mr-2"
                  onError={(e) => (e.target.src = fallbackSvg)}
                />
                <span>Our Testimonials Says</span>
                <img
                  src={titIco2}
                  alt="title icon 2"
                  className="h-[20px] ml-2"
                  onError={(e) => (e.target.src = fallbackSvg)}
                />
              </h6>
              <h2 className="text-5xl lg:text-7xl font-bold text-[#510a3d] leading-tight">
                What Clients Say About Our Company
              </h2>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
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
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1.5, centeredSlides: true },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            className="testi-slider"
          >
            <SwiperSlide>
              <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200 hover:border-[#510a3d] hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fadeIn">
                <div className="flex items-center mb-4">
                  <img
                    src={qt}
                    alt="quote icon"
                    className="h-[24px] mr-2"
                    onError={(e) => (e.target.src = fallbackSvg)}
                  />
                  <span className="text-2xl font-bold text-[#510a3d]">4.5</span>
                  <div className="flex text-pink-500 ml-4">
                    <i className="fas fa-star text-lg"></i>
                    <i className="fas fa-star text-lg"></i>
                    <i className="fas fa-star text-lg"></i>
                    <i className="fas fa-star text-lg"></i>
                    <i className="fas fa-star-half-alt text-lg"></i>
                  </div>
                  <span className="text-sm text-gray-500 opacity-60 ml-2 capitalize">
                    reviews
                  </span>
                </div>
                <div className="text-lg text-gray-500 mb-6 leading-relaxed">
                  A small team with a personal touch, they truly value their clients. They confidently suggest and challenge ideas, making them an excellent partner for managing our social media. Highly recommend their services.
                </div>
                <div>
                  <a
                    href="#footerSection"
                    className="inline-block px-4 py-2 rounded-xl border-2 border-[#510a3d] text-[#510a3d] text-sm font-semibold hover:bg-[#510a3d] hover:text-white transition-all duration-300"
                  >
                    Social Media Management
                  </a>
                  <h6 className="text-xl font-semibold text-[#510a3d] mt-4">
                    Kiran Khadka
                  </h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200 hover:border-[#510a3d] hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fadeIn">
                <div className="flex items-center mb-4">
                  <img
                    src={qt}
                    alt="quote icon"
                    className="h-[24px] mr-2"
                    onError={(e) => (e.target.src = fallbackSvg)}
                  />
                  <span className="text-2xl font-bold text-[#510a3d]">5.0</span>
                  <div className="flex text-pink-500 ml-4">
                    <i className="fas fa-star text-lg"></i>
                    <i className="fas fa-star text-lg"></i>
                    <i className="fas fa-star text-lg"></i>
                    <i className="fas fa-star text-lg"></i>
                    <i className="fas fa-star text-lg"></i>
                  </div>
                  <span className="text-sm text-gray-500 opacity-60 ml-2 capitalize">
                    reviews
                  </span>
                </div>
                <div className="text-lg text-gray-500 mb-6 leading-relaxed">
                  Their SEO expertise transformed our online presence. We saw a significant increase in traffic and rankings. A dedicated and knowledgeable team that delivers outstanding results.
                </div>
                <div>
                  <a
                    href="#footerSection"
                    className="inline-block px-4 py-2 rounded-xl border-2 border-[#510a3d] text-[#510a3d] text-sm font-semibold hover:bg-[#510 equate3d] hover:text-white transition-all duration-300"
                  >
                    SEO
                  </a>
                  <h6 className="text-xl font-semibold text-[#510a3d] mt-4">
                    Susant Raut
                  </h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200 hover:border-[#510a3d] hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fadeIn">
                <div className="flex items-center mb-4">
                  <img
                    src={qt}
                    alt="quote icon"
                    className="h-[24px] mr-2"
                    onError={(e) => (e.target.src = fallbackSvg)}
                  />
                  <span className="text-2xl font-bold text-[#510a3d]">4.0</span>
                  <div className="flex text-pink-500 ml-4">
                    <i className="fas fa-star text-lg"></i>
                    <i className="fas fa-star text-lg"></i>
                    <i className="fas fa-star text-lg"></i>
                    <i className="fas fa-star text-lg"></i>
                    <i className="fas fa-star-half-alt text-lg"></i>
                  </div>
                  <span className="text-sm text-gray-500 opacity-60 ml-2 capitalize">
                    reviews
                  </span>
                </div>
                <div className="text-lg text-gray-500 mb-6 leading-relaxed">
                  Their design team brings a personal touch and innovative ideas, making us feel valued as clients. They consistently deliver exceptional work and are a fantastic partner for all our design needs.
                </div>
                <div>
                  <a
                    href="#footerSection"
                    className="inline-block px-4 py-2 rounded-xl border-2 border-[#510a3d] text-[#510a3d] text-sm font-semibold hover:bg-[#510a3d] hover:text-white transition-all duration-300"
                  >
                    Graphics Design
                  </a>
                  <h6 className="text-xl font-semibold text-[#510a3d] mt-4">
                    Anirub Puri
                  </h6>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-pagination mt-8"></div>
          </Swiper>
        </div>
      </div>
      <img
        src={vec9}
        alt="decorative shape"
        className="absolute top-[15%] left-0 z-[1] pointer-events-none h-[120px] opacity-10 animate-float"
        onError={(e) => (e.target.src = fallbackSvg)}
      />
      <img
        src={vec3}
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

export default TestimonialsSection;