'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import settings from '@/settings.json';
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

export default function PortfolioPage() {
  const { title, description, projects } = settings.portfolio;
  const [selectedProject, setSelectedProject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  // Placeholder image for demo purposes if project images don't exist yet
  const placeholderImage =
    'https://placehold.co/600x400/3b3b3b/FFFFFF?text=Project+Image';

  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="mb-2 text-4xl font-bold">{title}</h1>
      <p className="mb-10 text-lg text-gray-300">{description}</p>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-lg border border-gray-700 cursor-pointer transition-transform hover:scale-[1.01] hover:shadow-xl"
            onClick={() => handleProjectClick(project)}
          >
            <div className="relative aspect-video">
              <Image
                src={project.image || placeholderImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={project.id <= 2} // Prioritize loading first two images
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/50 hover:opacity-100">
                <span className="text-lg font-medium text-white">
                  View Details
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Dialog */}
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <div className="relative mb-4 overflow-hidden rounded-lg aspect-video">
                <Image
                  src={selectedProject.image || placeholderImage}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl">
                  {selectedProject.title}
                </AlertDialogTitle>
                <AlertDialogDescription className="text-base text-gray-300">
                  {selectedProject.description}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-6">
                <AlertDialogCancel>Close</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Link
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Link>
                </AlertDialogAction>
                <AlertDialogAction asChild>
                  <Link
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Preview
                  </Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
