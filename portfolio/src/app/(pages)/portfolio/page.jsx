'use client';

import { useState } from 'react';
import { portfolio } from '@/data/site-content';
import {
  CategoryFilters,
  PortfolioGrid,
  EmptyState,
  ProjectDialog,
} from './components';
import { PageHeader, PageShell, PlaceholderFlag } from '@/components/page-chrome';

export default function PortfolioPage() {
  const { eyebrow, title, lede, projects } = portfolio;
  const [selectedProject, setSelectedProject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category || 'Other')),
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const hasPlaceholders = projects.some((project) => project.placeholder);

  return (
    <PageShell>
      <PageHeader eyebrow={eyebrow} title={title} lede={lede} />
      {hasPlaceholders ? (
        <div className="flex items-center gap-3 mb-8">
          <PlaceholderFlag />
          <p className="text-sm text-copy-faint">
            Some items are still draft.
          </p>
        </div>
      ) : null}

      {categories.length > 2 ? (
        <CategoryFilters
          categories={categories}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      ) : null}

      {filteredProjects.length > 0 ? (
        <PortfolioGrid
          projects={filteredProjects}
          handleProjectClick={(project) => {
            setSelectedProject(project);
            setDialogOpen(true);
          }}
        />
      ) : (
        <EmptyState setActiveFilter={setActiveFilter} />
      )}

      <ProjectDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        selectedProject={selectedProject}
      />
    </PageShell>
  );
}
