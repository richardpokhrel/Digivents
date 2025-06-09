import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../img/icons/arrow_lg.svg';
import vec from '../img/icons/vec1.svg';
import AboutImage from '../img/about1.jpg';
import Shape from '../img/icons/tit_ico2.svg';

const AboutSection = () => {
  return (
    <section
      id="aboutSection"
      className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-pink-50 font-['Hanken_Grotesk',sans-serif] overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-slideInLeft">
            <img
              src={AboutImage}
              srcSet={`${AboutImage} 1x, ${AboutImage.replace('.webp', '-2x.webp')} 2x`}
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="DigiVents team blending creativity and technology"
              className="rounded-3xl shadow-lg w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <img
              src={Shape}
              srcSet={`${Shape} 1x, ${Shape.replace('.webp', '-2x.webp')} 2x`}
              sizes="(max-width: 768px) 60px, 80px"
              alt="Decorative shape enhancing About section"
              className="absolute bottom-[-20px] sm:bottom-[-30px] left-[-20px] sm:left-[-30px] w-12 sm:w-16 opacity-20 animate-parallax"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-slideInRight">
            <div className="inline-flex items-center bg-pink-100 text-pink-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4" role="note">
              <img src={vec} alt="Decorative icon for About DigiVents" className="w-4 h-4 mr-2" loading="lazy" />
              About DigiVents
            </div>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#510a3d] leading-tight tracking-tight"
            >
              We Blend Creativity <br className="hidden sm:block" /> With Technology
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl leading-relaxed">
              At DigiVents, we are driven by innovation and powered by creativity. From UI/UX designs to full-scale digital solutions, we craft experiences that captivate and convert.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 text-[#510a3d] hover:text-pink-600 font-semibold text-base sm:text-lg transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
              aria-label="Learn more about DigiVents' mission and services"
            >
              About us
              <img
                src={arrow}
                alt="Arrow icon for navigation"
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Decoration */}
      <img
        src={vec}
        srcSet={`${vec} 1x, ${vec.replace('.webp', '-2x.webp')} 2x`}
        sizes="(max-width: 768px) 60px, 80px"
        alt="Decorative floating shape for About section"
        className="absolute top-10 right-10 w-16 sm:w-20 opacity-15 pointer-events-none animate-parallax-reverse"
        loading="lazy"
      />

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes parallax {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
        }

        @keyframes parallax-reverse {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(10px) translateX(-5px);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out 0.2s both;
        }

        .animate-parallax {
          animation: parallax 8s ease-in-out infinite;
        }

        .animate-parallax-reverse {
          animation: parallax-reverse 10s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .animate-parallax,
          .animate-parallax-reverse {
            animation-duration: 6s;
          }

          .animate-slideInLeft,
          .animate-slideInRight {
            animation-duration: 0.6s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-slideInLeft,
          .animate-slideInRight,
          .animate-parallax,
          .animate-parallax-reverse {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;