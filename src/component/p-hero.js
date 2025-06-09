import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import vec9 from '../img/vec9.png';
import vec2 from '../img/vec2.png';

import '@fortawesome/fontawesome-free/css/all.min.css';


// Fallback SVG for testing
const fallbackSvg =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=';

const PortfolioHero = ({
  title = 'Creative Portfolio',
  subtitle = 'Showcasing Excellence in Digital Innovation',
  description = 'Discover our collection of cutting-edge web applications, stunning UI/UX designs, and transformative digital solutions that drive business success.',
  
  secondaryCtaText = 'Get Started',
  secondaryCtaLink = '/contact',
  companyName = 'DigiVents',
  stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' }
  ]
}) => {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-pink-50 font-['Hanken_Grotesk',sans-serif] overflow-hidden flex items-center"
      id="portfolioHeroSection"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8 animate-slideInLeft">
            {/* Company Badge */}
            <div className="inline-flex items-center bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="fas fa-star mr-2"></i>
              {companyName} Portfolio
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-[#510a3d] leading-tight mb-4">
                {title}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 font-medium mb-6">
                {subtitle}
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
              {description}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              <Link
                to={secondaryCtaLink}
                className="inline-flex items-center justify-center border-2 border-[#510a3d] text-[#510a3d] py-4 px-8 rounded-xl hover:bg-[#510a3d] hover:text-white transition-all duration-300 text-lg font-semibold"
              >
                <span>{secondaryCtaText}</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#510a3d] mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Element */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-slideInRight">
            <div className="relative">
              {/* Main Portfolio Showcase */}
              <div className="relative w-[400px] h-[500px] lg:w-[500px] lg:h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#510a3d] to-pink-400 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                  <div className="h-full flex flex-col">
                    {/* Mock Browser Header */}
                    <div className="bg-gray-100 p-4 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 ml-4">
                        portfolio.digivents.com
                      </div>
                    </div>
                    
                    {/* Portfolio Preview Content */}
                    <div className="flex-1 p-6 bg-gradient-to-br from-white to-gray-50">
                      <div className="space-y-4">
                        <div className="h-8 bg-[#510a3d] rounded-lg w-3/4"></div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="h-24 bg-pink-100 rounded-lg"></div>
                          <div className="h-24 bg-purple-100 rounded-lg"></div>
                          <div className="h-24 bg-blue-100 rounded-lg"></div>
                          <div className="h-24 bg-green-100 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-pink-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#510a3d] rounded-full opacity-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <img
        src={vec9}
        alt=""
        className="absolute top-20 left-0 z-0 pointer-events-none h-24 opacity-10 animate-float"
        onError={(e) => (e.target.src = fallbackSvg)}
      />
      <img
        src={vec2}
        alt=""
        className="absolute bottom-20 right-0 z-0 pointer-events-none h-24 opacity-10 animate-float-delayed"
        onError={(e) => (e.target.src = fallbackSvg)}
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll to explore</span>
          <i className="fas fa-chevron-down text-lg"></i>
        </div>
      </div>

      <style jsx>{`
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
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
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
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 1s ease-out 0.2s both;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

PortfolioHero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  secondaryCtaText: PropTypes.string,
  secondaryCtaLink: PropTypes.string,
  companyName: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.string,
    label: PropTypes.string
  }))
};

export default PortfolioHero;