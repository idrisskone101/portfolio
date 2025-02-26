import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

// Organized tech data with exact hex values including opacity
const techData = {
  // Frontend technologies
  React: { className: 'bg-[#7ee1fc26] text-[#7ee1fc]' },
  TypeScript: { className: 'bg-[#007acc26] text-[#007acc]' },
  JavaScript: { className: 'bg-[#f0db4f26] text-[#f0db4f]' },
  Tailwind: { className: 'bg-[#44a8b326] text-[#44a8b3]' },
  'Tailwind CSS': { className: 'bg-[#44a8b326] text-[#44a8b3]' },
  Sass: { className: 'bg-[#cf649a26] text-[#cf649a]' },
  HTML: { className: 'bg-[#dd4b2526] text-[#dd4b25]' },
  CSS: { className: 'bg-[#264de426] text-[#264de4]' },
  'CSS Modules': { className: 'bg-[#264de426] text-[#264de4]' },
  'Next.js': { className: 'bg-[#ffffff14] text-white' },
  'Remix Run': { className: 'bg-[#ffffff14] text-white' },
  'Styled Components': { className: 'bg-[#db709326] text-[#db7093]' },
  'Framer Motion': { className: 'bg-[#0055FF26] text-[#0055FF]' },
  'GSAP Animation': { className: 'bg-[#88ce0226] text-[#88ce02]' },
  Redux: { className: 'bg-[#764abc26] text-[#764abc]' },

  // Backend technologies
  'Node.js': { className: 'bg-[#6fa66026] text-[#6fa660]' },
  Python: { className: 'bg-[#30699826] text-[#306998]' },
  Express: { className: 'bg-[#ffffff14] text-white' },
  MongoDB: { className: 'bg-[#4db33d26] text-[#4db33d]' },
  Vite: { className: 'bg-[#646cff26] text-[#646cff]' },
  GraphQL: { className: 'bg-[#e8457c] text-[#e8457c]' },

  // Tools and platforms
  GitHub: { className: 'bg-[#ffffff14] text-white' },
  WordPress: { className: 'bg-[#ffffff14] text-white' },
  Shopify: { className: 'bg-[#8CBC5A] text-[#8CBC5A]' },
  Webflow: { className: 'bg-[#ffffff14] text-white' },
  Squarespace: { className: 'bg-[#ffffff14] text-white' },
  Git: { className: 'bg-[#ffffff14] text-white' },

  // APIs
  'Weather API': { className: 'bg-[#00aaff26] text-[#00aaff]' },
  'IP Geolocation API': { className: 'bg-[#5a7d9a26] text-[#5a7d9a]' },
  'Leaflet Maps': { className: 'bg-[#19990026] text-[#199900]' },
  'TMDB API': { className: 'bg-[#01d27726] text-[#01d277]' },
  'Pokemon API': { className: 'bg-[#ffcb0526] text-[#ffcb05]' },
};

export default function ProjectDialog({
  dialogOpen,
  setDialogOpen,
  selectedProject,
  placeholderImage,
}) {
  if (!selectedProject) return null;

  return (
    <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <AlertDialogContent className="xl:max-w-3xl max-h-[90vh] overflow-y-auto bg-[#111] border-gray-800 px-4 sm:px-6 max-w-[90vw]">
        <div className="relative mb-4 overflow-hidden rounded-lg aspect-video">
          <Image
            src={selectedProject.image || placeholderImage}
            alt={selectedProject.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-4 right-4">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm">
              {selectedProject.category || 'Project'}
            </span>
          </div>
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl text-white">
            {selectedProject.title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base text-gray-300 max-sm:mt-10">
            {selectedProject.description}
          </AlertDialogDescription>

          {/* Tech Stack Tags */}
          {selectedProject.technologies && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 text-xs font-medium rounded-md ${techData[tech.name]?.className || 'bg-[#ffffff14] text-white'}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-wrap gap-2 mt-6 sm:flex-nowrap">
          <AlertDialogCancel className="flex-1 min-w-0">
            Close
          </AlertDialogCancel>
          <div className="flex flex-1 gap-2">
            <AlertDialogAction asChild className="flex-1 min-w-0">
              <Link
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Link>
            </AlertDialogAction>
            <AlertDialogAction asChild className="flex-1 min-w-0">
              <Link
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Preview
              </Link>
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
