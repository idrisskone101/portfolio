import React from 'react';
import Image from 'next/image';

export default function PortfolioGrid({
  projects,
  handleProjectClick,
  placeholderImage,
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group relative overflow-hidden rounded-lg border border-gray-700 cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:border-gray-500"
          onClick={() => handleProjectClick(project)}
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={project.image || placeholderImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={project.id <= 2} // Prioritize loading first two images
            />
            <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="inline-block px-3 py-1 mb-2 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm">
                {project.category || 'Project'}
              </span>
              <h3 className="mb-1 text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 transition-opacity duration-300 opacity-0 line-clamp-2 group-hover:opacity-100">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
