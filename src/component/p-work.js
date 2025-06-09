
import React, { useState, useMemo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import vec9 from '../img/vec9.png';
import vec2 from '../img/vec2.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Sample project data (move to ./p-data if preferred)
const projects = [
  {
    id: 1,
    title: 'Brand X Social Media Campaign',
    category: 'Reels',
    description: 'Engaging Instagram reels boosting engagement by 40%.',
    image: 'https://example.com/brandx-reel-thumbnail.webp',
    mediaType: 'video',
    videoUrl: 'https://example.com/brandx-reel.mp4',
    technologies: ['Scriptwriting', 'Video Editing', 'Social Media'],
    year: '2025',
    featured: true,
  },
  {
    id: 2,
    title: 'Product Launch Flyer',
    category: 'Flyers',
    description: 'Vibrant flyer for a product launch across digital and print.',
    image: 'https://example.com/product-launch-flyer.webp',
    mediaType: 'image',
    technologies: ['Graphic Design', 'Adobe Photoshop'],
    year: '2024',
    featured: false,
  },
  {
    id: 3,
    title: 'Corporate Promotional Video',
    category: 'Promotional Videos',
    description: 'Professional video from storyboard to final cut.',
    image: 'https://example.com/corporate-promo-thumbnail.webp',
    mediaType: 'video',
    videoUrl: 'https://example.com/corporate-promo.mp4',
    technologies: ['Video Production', 'Animation'],
    year: '2025',
    featured: true,
  },
];

// Fallback SVG for testing
const fallbackSvg =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=';

const PortfolioWorkShowcase = ({
  title = 'Our Digital Marketing Portfolio',
  subtitle = 'Creative Campaigns That Drive Results',
  description = 'Explore our flyers, reels, and promotional videos, crafted from concept to execution to elevate brands.',
  companyName = 'Your Digital Marketing Agency',
}) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const projectRefs = useRef([]);

  // Memoize categories to prevent recalculation
  const categories = useMemo(
    () => ['All', ...new Set(projects.map(project => project.category))],
    []
  );

  // Memoize filtered projects
  const filteredProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter(project => project.category === activeFilter),
    [activeFilter]
  );

  // Custom Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProjects]);

  return (
    <section
      className="relative py-16 bg-gradient-to-b from-white to-gray-50 font-['Hanken_Grotesk',sans-serif] overflow-hidden"
      id="portfolioWorkShowcaseSection"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <i className="fas fa-bullhorn mr-2"></i>
            Marketing Showcase
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#510a3d] mb-3">{title}</h2>
          <h3 className="text-xl text-gray-600 font-medium mb-4">{subtitle}</h3>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">{description}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-[#510a3d] text-white shadow-md'
                  : 'bg-white text-[#510a3d] border border-gray-200 hover:border-[#510a3d]'
              }`}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => (projectRefs.current[index] = el)}
              className={`group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 opacity-0 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Media */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image || fallbackSvg}
                  alt={project.title || 'Campaign thumbnail'}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Image failed to load:', project.image);
                    e.target.src = fallbackSvg;
                  }}
                />
                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-[#510a3d] bg-opacity-85 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="text-center text-white space-y-3">
                    <div className="flex flex-wrap justify-center gap-2">
                      {(project.technologies || []).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-flex items-center bg-white text-[#510a3d] px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
                      aria-label={`View details for ${project.title || 'campaign'}`}
                    >
                      View Campaign
                      <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </div>
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    <i className="fas fa-star mr-1"></i>
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-pink-600 bg-pink-100 px-2 py-1 rounded-full">
                    {project.category || 'Uncategorized'}
                  </span>
                  <span className="text-xs text-gray-400">{project.year || 'N/A'}</span>
                </div>
                <h4 className="text-lg font-bold text-[#510a3d] mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {project.title || 'Untitled Campaign'}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2">{project.description || 'No description available.'}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center bg-[#510a3d] text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-all duration-300"
            aria-label="Contact us to start a campaign"
          >
            Start Your Campaign
            <i className="fas fa-rocket ml-2"></i>
          </Link>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <img
        src={vec9}
        alt=""
        className="absolute top-1/4 left-0 z-0 pointer-events-none h-16 opacity-10"
        loading="lazy"
        onError={(e) => (e.target.src = fallbackSvg)}
      />
      <img
        src={vec2}
        alt=""
        className="absolute bottom-1/4 right-0 z-0 pointer-events-none h-16 opacity-10"
        loading="lazy"
        onError={(e) => (e.target.src = fallbackSvg)}
      />

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

PortfolioWorkShowcase.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  companyName: PropTypes.string,
};

export default PortfolioWorkShowcase;
