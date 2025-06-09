import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import vec9 from '../img/vec9.png';
import vec2 from '../img/vec2.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Fallback SVG
const fallbackSvg =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=';

const AboutUsSlide = ({
  title = 'Our Story',
  subtitle = 'Building the Future, One Innovation at a Time',
  description = 'DigiVents was founded with a vision to transform ideas into impactful digital experiences. From humble beginnings to industry leaders, our journey is driven by passion, creativity, and a commitment to excellence.',
  ctaText = 'Join Our Journey',
  ctaLink = '/contact',
  companyName = 'DigiVents',
  milestones = [
    { year: '2018', event: 'Founded DigiVents with a small team of dreamers' },
    { year: '2020', event: 'Launched our first award-winning web platform' },
    { year: '2023', event: 'Expanded to serve global clients' }
  ]
}) => {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-pink-50 font-['Hanken_Grotesk',sans-serif] overflow-hidden flex items-center justify-center py-20"
      id="aboutUsSection"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-10 animate-fadeIn">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
              <i className="fas fa-globe mr-2"></i>
              <span>{companyName}'s Journey</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#510a3d] leading-tight">
              {title}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium max-w-3xl mx-auto">
              {subtitle}
            </h2>
            <p className="text-md md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>

            {/* CTA */}
            <div className="mt-6">
              <Link
                to={ctaLink}
                className="inline-block bg-[#510a3d] text-white px-6 py-3 rounded-lg shadow hover:bg-[#3b072e] transition-all duration-300"
              >
                {ctaText}
              </Link>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto mt-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#510a3d] opacity-20"></div>
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center mb-12 opacity-0 animate-slideInUp`}
                style={{ animationDelay: `${index * 0.3}s`, animationFillMode: 'forwards' }}
              >
                <div className="md:w-1/2 px-6">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                    <div className="text-xl md:text-2xl font-bold text-[#510a3d] mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">{milestone.event}</p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center my-4 md:my-0">
                  <div className="w-4 h-4 bg-[#510a3d] rounded-full z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <img
        src={vec9}
        alt="Decorative shape"
        className="absolute top-10 left-10 z-0 pointer-events-none h-32 opacity-10 animate-float"
        onError={(e) => (e.target.src = fallbackSvg)}
      />
      <img
        src={vec2}
        alt="Decorative shape"
        className="absolute bottom-10 right-10 z-0 pointer-events-none h-32 opacity-10 animate-float-delayed"
        onError={(e) => (e.target.src = fallbackSvg)}
      />

      {/* Custom Animations */}
      <style jsx>{`
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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 1s ease-out both;
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

AboutUsSlide.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  companyName: PropTypes.string,
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      event: PropTypes.string.isRequired
    })
  )
};

export default AboutUsSlide;
