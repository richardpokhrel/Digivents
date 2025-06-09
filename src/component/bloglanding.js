import React from 'react';
import PropTypes from 'prop-types';

import vec9 from '../img/vec9.png';
import vec2 from '../img/vec2.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const fallbackSvg =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=';

const BlogLandingHero = ({
  title = 'Welcome to Our Blog',
  subtitle = 'Insights, Trends, and Innovations',
  description = 'Dive into the latest in digital innovation, industry trends, and expert tips from the DigiVents team.',
  
  companyName = 'DigiVents',
  featuredPost = {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Discover the trends shaping the next generation of web experiences.',
    image: 'https://via.placeholder.com/400x300',
    category: 'Technology',
    date: 'May 20, 2025',
  },
}) => {
  return (
    <section
      className="relative min-h-[80vh] bg-gradient-to-br from-white via-gray-50 to-pink-50 font-['Hanken_Grotesk',sans-serif] overflow-hidden flex items-center justify-center py-12 sm:py-16 lg:py-20"
      id="blogHeroSection"
      aria-labelledby="blog-hero-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          {/* Left Content */}
          <header className="lg:w-1/2 text-center lg:text-left space-y-6 sm:space-y-8 animate-slideIn">
            <div className="inline-flex items-center bg-pink-100 text-pink-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm" role="note">
              <i className="fas fa-blog mr-2" aria-hidden="true"></i>
              <span>{companyName} Blog</span>
            </div>
            <h1
              id="blog-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#510a3d] leading-tight tracking-tight"
            >
              {title}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium max-w-xl mx-auto lg:mx-0">
              {subtitle}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {description}
            </p>
            
          </header>

          {/* Featured Post Card */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-slideInRight">
            <article className="relative max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500">
              <img
                src={featuredPost.image}
                srcSet={`${featuredPost.image} 1x, ${featuredPost.image.replace('.jpg', '-2x.jpg')} 2x`}
                sizes="(max-width: 768px) 100vw, 400px"
                alt={`Featured blog post: ${featuredPost.title}`}
                className="w-full h-40 sm:h-48 object-cover"
                loading="lazy"
                onError={(e) => (e.target.src = fallbackSvg)}
              />
              <div className="p-5 sm:p-6">
                <span className="inline-block mb-2 text-xs font-semibold tracking-wider text-pink-600 uppercase">
                  {featuredPost.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#510a3d] mb-2 line-clamp-2">{featuredPost.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{featuredPost.excerpt}</p>
               
                <p className="mt-4 text-xs text-gray-400">{featuredPost.date}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#510a3d] to-pink-400 opacity-0 hover:opacity-10 rounded-xl transition-opacity duration-300 -z-10"></div>
            </article>
          </div>
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <img
        src={vec9}
        srcSet={`${vec9} 1x, ${vec9.replace('.webp', '-2x.webp')} 2x`}
        sizes="(max-width: 768px) 100px, 150px"
        alt="Decorative shape for blog hero section"
        className="absolute top-10 left-10 z-0 pointer-events-none h-24 sm:h-32 md:h-40 opacity-15 animate-parallax"
        loading="lazy"
        onError={(e) => (e.target.src = fallbackSvg)}
      />
      <img
        src={vec2}
        srcSet={`${vec2} 1x, ${vec2.replace('.webp', '-2x.webp')} 2x`}
        sizes="(max-width: 768px) 100px, 150px"
        alt="Decorative shape enhancing blog hero section"
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

        @XOR: @keyframes slideInRight {
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

        .animate-slideIn {
          animation: slideIn 0.8s ease-out;
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

          .animate-slideIn,
          .animate-slideInRight {
            animation-duration: 0.6s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-slideIn,
          .animate-slideInRight,
          .animate-parallax,
          .animate-parallax-reverse {
            animation: none;
            transform: none;
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

BlogLandingHero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  companyName: PropTypes.string,
  featuredPost: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default BlogLandingHero;