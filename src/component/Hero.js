import React from 'react';
import { Link } from 'react-router-dom';
import headershapes from '../img/header_shaps.png';
import headersh from '../img/header_shaps.png';
import hero2 from '../img/hero2.png';
import hero3 from '../img/hero3.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Fallback SVG for testing
const fallbackSvg =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=';

const HeroSection = () => {
  return (
    <div
      className="relative min-h-screen text-white overflow-hidden bg-gradient-to-br from-gray-100 via-[#510a3d] to-purple-300"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#510a3d]/20"></div>

      {/* Decorative Shape Overlay - Covers Entire Section */}
      <div className="absolute inset-0 z-0 w-full h-[100vh]">
        <img
          src={headershapes}
          alt="Decorative shapes"
          className="absolute inset-0 w-full h-full opacity-100 object-cover"
          style={{
            mixBlendMode: 'overlay',
            filter: 'brightness(1.2) contrast(0.8)'
          }}
          onError={(e) => (e.target.src = fallbackSvg)}
        />
      </div>

      {/* Decorative Elements */}
      {/* Larger orange semi-circle (top center) */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-orange-400 rounded-t-full opacity-40 z-5"></div>

      {/* Bottom left decorative shape */}
      <img
        src={headersh}
        alt="Decorative shape"
        className="absolute bottom-4 left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 opacity-60 z-5"
        onError={(e) => (e.target.src = fallbackSvg)}
      />

      <div className="container mx-auto px-4 pt-32 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <div className="relative">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[128px] font-black leading-tight font-['Hanken_Grotesk',sans-serif]">
                <div className="flex items-center mb-2 md:mb-4">
                  <span>Digital</span>
                  <div className="ml-3 md:ml-6 w-16 h-8 md:w-20 md:h-10 lg:w-24 lg:h-12 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=100&fit=crop&crop=face"
                      alt="Team meeting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center mb-2 md:mb-4">
                  <span>Marketing</span>
                </div>
                <div className="flex items-center">
                  {/* User avatars with count */}
                  <div className="relative w-24 h-10 sm:w-32 sm:h-12 md:w-36 md:h-14 lg:w-40 lg:h-16 mr-2 md:mr-4 flex-shrink-0">
                    <div className="absolute left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white z-30">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                        alt="User 1"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute left-4 sm:left-5 md:left-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white z-20">
                      <img
                        src="https://images.unsplash.com/photo-1494790108755-2616b96829c1?w=50&h=50&fit=crop&crop=face"
                        alt="User 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute left-8 sm:left-10 md:left-12 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white z-10">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
                        alt="User 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute right-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-900 border border-white/20 flex flex-col items-center justify-center text-xs font-light z-40">
                      <span className="text-sm sm:text-base md:text-lg font-semibold">10K+</span>
                      <span className="text-xs">Clients</span>
                    </div>
                  </div>
                  <span>Agency</span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <div className="max-w-md space-y-2 text-gray-400 text-sm sm:text-base md:text-[17px] leading-relaxed font-['Hanken_Grotesk',sans-serif]">
              <p>Our digital marketing agency specializes in innovative strategies to elevate your online presence. 
              Partner with us for data-driven results and expert guidance, ensuring your business thrives in the digital landscape.</p>
            </div>

            {/* Call-to-Action Button */}
            <div>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center bg-[#510a3d] text-white py-4 px-8 rounded-xl hover:bg-[#6b1a4f] hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg font-semibold font-['Hanken_Grotesk',sans-serif]"
              >
                <span>Let's Talk </span>
                <i className="fas fa-arrow-right ml-3 transform group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>

          {/* Right Content - Hemispherical Domes */}
          <div className="relative w-full max-w-6xl mx-auto px-4">
            <div className="relative flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2 md:space-x-4 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
              {/* Taller Dome with Image and Stats */}
              <div className="relative w-full max-w-[280px] sm:max-w-none h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] rounded-t-full overflow-hidden border-4 border-gray-900 shadow-2xl">
                <img
                  src={hero2}
                  alt="Business meeting"
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.src = fallbackSvg)}
                />
                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black border-t border-white/10 px-2 sm:px-4 py-2">
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold">110+</div>
                      <div className="text-gray-500 text-xs sm:text-sm font-medium">Reviews</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold">05+</div>
                      <div className="text-gray-500 text-xs sm:text-sm font-medium">Years of experience</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shorter Dome with Image Only */}
              <div className="relative w-full max-w-[280px] sm:max-w-none h-[400px] sm:h-[400px] md:h-[450px] lg:h-[480px] xl:h-[500px] rounded-t-full overflow-hidden border-4 border-gray-900 shadow-2xl">
                <img
                  src={hero3}
                  alt="Decorative shape"
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.src = fallbackSvg)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;