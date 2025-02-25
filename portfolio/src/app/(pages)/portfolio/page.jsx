'use client';

import { useState } from 'react';
import settings from '@/settings.json';
import {
  HeroSection,
  CategoryFilters,
  PortfolioGrid,
  EmptyState,
  ProjectDialog,
} from './components';

export default function PortfolioPage() {
  const { title, subtitle, projects } = settings.portfolio;
  const [selectedProject, setSelectedProject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  // Placeholder image for demo purposes if project images don't exist yet
  const placeholderImage =
    'https://placehold.co/600x400/3b3b3b/FFFFFF?text=Project+Image';

  // Extract unique categories from projects
  const categories = [
    'all',
    ...new Set(projects.map((project) => project.category || 'other')),
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="container px-4 py-12 mx-auto">
      {/* Hero Section */}
      <HeroSection title={title} subtitle={subtitle} />

      {/* Category Filters */}
      <CategoryFilters
        categories={categories}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {/* Portfolio Grid */}
      {filteredProjects.length > 0 ? (
        <PortfolioGrid
          projects={filteredProjects}
          handleProjectClick={handleProjectClick}
          placeholderImage={placeholderImage}
        />
      ) : (
        <EmptyState setActiveFilter={setActiveFilter} />
      )}

      {/* Project Dialog */}
      <ProjectDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        selectedProject={selectedProject}
        placeholderImage={placeholderImage}
      />
    </div>
  );
}
