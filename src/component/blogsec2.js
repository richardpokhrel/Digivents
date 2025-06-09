import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import vec9 from '../img/vec9.png';
import vec2 from '../img/vec2.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Fallback SVG for testing
const fallbackSvg =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=';

const BlogCategoriesSection = ({
  title = 'Explore by Category',
  subtitle = 'Find Insights That Matter to You',
  description = 'Browse our blog posts by category to discover content tailored to your interests, from technology trends to design tips.',
  ctaText = 'View All Categories',
  ctaLink = '/categories',
  companyName = 'DigiVents',
  categories = [
    { name: 'Technology', icon: 'fas fa-laptop-code', description: 'Latest trends in software and innovation.', image: 'https://via.placeholder.com/300x200' },
    { name: 'Design', icon: 'fas fa-paint-brush', description: 'Tips for creating stunning UI/UX.', image: 'https://via.placeholder.com/300x200' },
    { name: 'Business', icon: 'fas fa-briefcase', description: 'Strategies for digital growth.', image: 'https://via.placeholder.com/300x200' }
  ]
}) => {
  return (
    <section
      className="relative bg-gradient-to-br from-white via-gray-50 to-pink-50 font-['Hanken_Grotesk',sans-serif] overflow-hidden py-12"
      id="blogCategoriesSection"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Header Section */}
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="inline-flex items-center bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
            <i className="fas fa-folder-open mr-2"></i>
            {companyName} Categories
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#510a3d] leading-tight">
            {title}
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-600 font-medium max-w-2xl mx-auto">
            {subtitle}
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
            {description}
          </p>
        </div>

        {/* Categories Scrollable Grid */}
        <div className="mt-12 overflow-x-auto flex gap-6 snap-x snap-mandatory scrollbar-hide">
          {categories.map((category, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl snap-center"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
                onError={(e) => (e.target.src = fallbackSvg)}
              />
              <div className="p-6 text-center">
                <i className={`${category.icon} text-3xl text-[#510a3d] mb-4`}></i>
                <h3 className="text-lg font-bold text-[#510a3d] mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <Link
                  to={`/category/${category.name.toLowerCase()}`}
                  className="group inline-flex items-center text-[#510a3d] hover:text-[#6b1a4f] text-sm font-semibold transition-colors"
                >
                  Explore {category.name}
                  <i className="fas fa-chevron-right ml-2 text-xs transform group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#510a3d] to-pink-400 opacity-0 hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-10 text-center">
          <Link
            to={ctaLink}
            className="group inline-flex items-center justify-center bg-[#510a3d] text-white py-4 px-8 rounded-xl hover:bg-[#6b1a4f] hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg font-semibold"
          >
            <span>{ctaText}</span>
            <i className="fas fa-arrow-right ml-3 transform group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <img
        src={vec9}
        alt=""
        className="absolute top-10 left-10 z-0 pointer-events-none h-32 opacity-10 animate-float"
        onError={(e) => (e.target.src = fallbackSvg)}
      />
      <img
        src={vec2}
        alt=""
        className="absolute bottom-10 right-10 z-0 pointer-events-none h-32 opacity-10 animate-float-delayed"
        onError={(e) => (e.target.src = fallbackSvg)}
      />

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

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

BlogCategoriesSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  companyName: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
  }))
};

export default BlogCategoriesSection;