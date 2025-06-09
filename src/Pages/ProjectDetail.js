// pages/ProjectDetail.jsx
import React, { useParams } from 'react';
import { projects } from '../component/p-data';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const fallbackSvg =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=';

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mb-12">
      <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300">
        <div className="relative h-[400px]">
          {project.isVideo ? (
            <video
              src={project.videoUrl}
              controls
              poster={project.thumbnail || fallbackSvg}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={project.image || fallbackSvg}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold text-[#510a3d]">{project.title}</h1>
          <p className="mt-3 text-gray-700">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {(project.technologies || []).map((tech, idx) => (
              <span
                key={idx}
                className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
