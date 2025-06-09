import React from 'react';
import { useParams, Link } from 'react-router-dom';
import vec9 from '../img/vec9.png';
import vec2 from '../img/vec2.png';
import { projects } from './p-data';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Fallback SVG for testing
const fallbackSvg =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-['Hanken_Grotesk',sans-serif] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#510a3d] mb-4">Project Not Found</h2>
          <Link
            to="/portfolio"
            className="inline-flex items-center bg-[#510a3d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6b1a4f] transition-all duration-300"
          >
            Back to Portfolio
            <i className="fas fa-arrow-left ml-2"></i>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 font-['Hanken_Grotesk',sans-serif] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center bg-pink-100 text-pink-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <i className="fas fa-project-diagram mr-2"></i>
            Project Details
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-[#510a3d] mb-4">{project.title}</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">{project.description}</p>
        </div>

        {/* Main Media */}
        <div className="mb-12">
          {project.mediaType === 'video' && project.videoUrl ? (
            <video
              src={project.videoUrl}
              controls
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              onError={(e) => (e.target.src = fallbackSvg)}
            />
          )}
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '100ms' }}>
            <h3 className="text-3xl font-bold text-[#510a3d]">Overview</h3>
            <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-400">Client</span>
                <p className="text-lg font-semibold text-[#510a3d]">{project.client}</p>
              </div>
              <div>
                <span className="text-sm text-gray-400">Category</span>
                <p className="text-lg font-semibold text-[#510a3d]">{project.category}</p>
              </div>
              <div>
                <span className="text-sm text-gray-400">Year</span>
                <p className="text-lg font-semibold text-[#510a3d]">{project.year}</p>
              </div>
              <div>
                <span className="text-sm text-gray-400">Technologies</span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '200ms' }}>
            <h3 className="text-3xl font-bold text-[#510a3d]">Challenges</h3>
            <p className="text-gray-600 leading-relaxed">{project.challenges}</p>
            <h3 className="text-3xl font-bold text-[#510a3d]">Solutions</h3>
            <p className="text-gray-600 leading-relaxed">{project.solutions}</p>
            <h3 className="text-3xl font-bold text-[#510a3d]">Results</h3>
            <p className="text-gray-600 leading-relaxed">{project.results}</p>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#510a3d] mb-8 text-center">Project Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
                <img
                  src={img}
                  alt={`${project.title} gallery ${index + 1}`}
                  className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                  onError={(e) => (e.target.src = fallbackSvg)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center bg-[#510a3d] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#6b1a4f] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Back to Portfolio
            <i className="fas fa-arrow-left ml-3"></i>
          </Link>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#510a3d] opacity-10 rounded-full animate-float-delayed"></div>
      <img
        src={vec9}
        alt=""
        className="absolute top-1/4 left-0 z-0 pointer-events-none h-20 opacity-10 animate-pulse"
        onError={(e) => (e.target.src = fallbackSvg)}
      />
      <img
        src={vec2}
        alt=""
        className="absolute bottom-1/4 right-0 z-0 pointer-events-none h-20 opacity-10 animate-pulse"
        onError={(e) => (e.target.src = fallbackSvg)}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
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
            transform: translateY(-20px);
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
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
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

export default ProjectDetail;
