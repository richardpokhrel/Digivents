import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import vec9 from '../img/vec9.png';
import vec2 from '../img/vec2.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Fallback image
const fallbackSvg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=';

const MeetOurTeamSlide = ({
  title = 'Meet Our Team',
  subtitle = 'The Minds Behind the Magic',
  description = 'Our talented team at DigiVents combines expertise, creativity, and passion to bring your digital vision to life.',
  ctaText = 'Join Our Team',
  ctaLink = '/careers',
  companyName = 'DigiVents',
  teamMembers = [
    { name: 'Srijan Karki', role: 'Designer', icon: 'fas fa-pencil-ruler', description: 'Crafting designs that speak your brand’s language.' },
    { name: 'Karin Khadka', role: 'Ads Manager', icon: 'fas fa-bullhorn', description: 'Maximizing your reach through strategic ad campaigns.' },
    { name: 'Bishwash Shrestha', role: 'Project Manager', icon: 'fas fa-tasks', description: 'Turning visions into successful deliveries.' },
    { name: 'Sandeep Tamang', role: 'Video Editor', icon: 'fas fa-video', description: 'Editing stories that captivate and convert.' }
  ]
}) => {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-pink-50 font-['Hanken_Grotesk',sans-serif] overflow-hidden flex items-center justify-center py-20"
      id="meetOurTeamSection"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12 animate-fadeIn">
          <header className="space-y-6 relative z-20">
            <div className="inline-flex items-center bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
              <i className="fas fa-users mr-2" aria-hidden="true"></i>
              Meet the {companyName} Team
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#510a3d] leading-tight">
              {title}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium max-w-3xl mx-auto">
              {subtitle}
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {description}
            </p>
          </header>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <article
                  key={index}
                  className="relative bg-white rounded-2xl shadow-xl p-6 text-center transform transition duration-500 hover:shadow-2xl hover:-translate-y-2 group z-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#510a3d] to-pink-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center">
                    <i className={`${member.icon} text-4xl text-[#510a3d] mb-4`} aria-hidden="true"></i>
                    <h3 className="text-xl font-bold text-[#510a3d] mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-500 text-sm">{member.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#510a3d] to-pink-400 rounded-3xl opacity-5 transform scale-105 -rotate-3 z-0"></div>
          </div>

          <div className="pt-8 relative z-20">
            <Link
              to={ctaLink}
              className="group inline-flex items-center justify-center bg-[#510a3d] text-white py-4 px-8 rounded-xl hover:bg-[#6b1a4f] hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg font-semibold"
            >
              <span>{ctaText}</span>
              <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <img
        src={vec9}
        alt="Decorative abstract shape"
        className="absolute top-10 left-10 z-0 pointer-events-none h-32 opacity-10 animate-float"
        onError={(e) => (e.target.src = fallbackSvg)}
      />
      <img
        src={vec2}
        alt="Decorative abstract shape"
        className="absolute bottom-10 right-10 z-0 pointer-events-none h-32 opacity-10 animate-float-delayed"
        onError={(e) => (e.target.src = fallbackSvg)}
      />

      {/* Animations */}
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
          animation: fadeIn 1s ease-out;
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

MeetOurTeamSlide.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  companyName: PropTypes.string,
  teamMembers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    icon: PropTypes.string,
    description: PropTypes.string
  }))
};

export default MeetOurTeamSlide;
