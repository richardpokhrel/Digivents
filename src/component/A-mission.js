import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import vec9 from '../img/vec9.png';
import vec2 from '../img/vec2.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const fallbackSvg =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=';

const OurMissionSlide = ({
  title = 'Our Mission',
  subtitle = 'Empowering Digital Transformation',
  description = 'At DigiVents, our mission is to harness creativity and technology to deliver innovative solutions that inspire, connect, and transform businesses worldwide.',
  ctaText = 'Discover Our Impact',
  ctaLink = '/portfolio',
  companyName = 'DigiVents',
  pillars = [
    { icon: 'fas fa-lightbulb', title: 'Innovation', description: 'Pushing boundaries with cutting-edge solutions.' },
    { icon: 'fas fa-users', title: 'Collaboration', description: 'Partnering with clients to achieve shared goals.' },
    { icon: 'fas fa-rocket', title: 'Impact', description: 'Driving measurable success for businesses.' },
  ],
}) => {
  return (
    <section
      className="relative min-h-[80vh] bg-gradient-to-br from-white via-gray-50 to-pink-50 font-['Hanken_Grotesk',sans-serif] overflow-hidden flex items-center justify-center py-12 sm:py-16 lg:py-20"
      id="ourMissionSection"
      aria-labelledby="our-mission-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Content */}
        <header className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto animate-slideIn">
          <div className="inline-flex items-center bg-pink-100 text-pink-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
            <i className="fas fa-bullseye mr-2" aria-hidden="true"></i>
            {companyName}'s Vision
          </div>
          <h1
            id="our-mission-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#510a3d] leading-tight tracking-tight"
          >
            {title}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium">
            {subtitle}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
          <Link
            to={ctaLink}
            className="inline-flex items-center mt-6 bg-[#510a3d] text-white px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-[#6b1552] hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#510a3d] focus:ring-offset-2"
            aria-label={`Explore ${ctaText} at DigiVents`}
          >
            {ctaText}
            <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
          </Link>
        </header>

        {/* Mission Pillars */}
        <div className="relative max-w-6xl mx-auto mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {pillars.map((pillar, index) => (
            <article
              key={index}
              className={`relative bg-white rounded-xl shadow-md p-6 sm:p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-slideUp delay-${index}`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#510a3d] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <i className={`${pillar.icon} text-lg sm:text-xl`} aria-hidden="true"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#510a3d] mb-3">{pillar.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{pillar.description}</p>
              <div className="absolute inset-0 bg-pink-100 opacity-0 hover:opacity-10 rounded-xl transition-opacity duration-300 -z-10"></div>
            </article>
          ))}
        </div>
      </div>

      {/* Decorative Background Shapes with Parallax */}
      <img
        src={vec9}
        srcSet={`${vec9} 1x, ${vec9.replace('.webp', '-2x.webp')} 2x`}
        sizes="(max-width: 768px) 100px, 150px"
        alt="Abstract decorative shape enhancing mission section"
        className="absolute top-10 left-10 z-0 pointer-events-none h-24 sm:h-32 md:h-40 opacity-15 animate-parallax"
        loading="lazy"
        onError={(e) => (e.target.src = fallbackSvg)}
      />
      <img
        src={vec2}
        srcSet={`${vec2} 1x, ${vec2.replace('.webp', '-2x.webp')} 2x`}
        sizes="(max-width: 768px) 100px, 150px"
        alt="Abstract decorative shape for mission section background"
        className="absolute bottom-10 right-10 z-0 pointer-events-none h-24 sm:h-32 md:h-40 opacity-15 animate-parallax-reverse"
        loading="lazy"
        onError={(e) => (e.target.src = fallbackSvg)}
      />

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-slideIn {
          animation: slideIn 1s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }

        .delay-0 {
          animation-delay: 0.2s;
        }

        .delay-1 {
          animation-delay: 0.4s;
        }

        .delay-2 {
          animation-delay: 0.6s;
        }

        .animate-parallax {
          animation: parallax 10s ease-in-out infinite;
        }

        .animate-parallax-reverse {
          animation: parallax-reverse 12s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .animate-parallax,
          .animate-parallax-reverse {
            animation-duration: 6s;
          }

          .animate-slideUp {
            animation-duration: 0.6s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-slideIn,
          .animate-slideUp,
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

OurMissionSlide.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  companyName: PropTypes.string,
  pillars: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default OurMissionSlide;