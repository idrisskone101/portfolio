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

const PLACEHOLDER_IMAGE =
  'https://placehold.co/600x400/1a1a1a/BBBBBB?text=Project+Image';

export default function PortfolioPage() {
  const { title, projects } = portfolio;
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

  return (
    <PageShell>
      <PageHeader
        eyebrow={title}
        title="Selected work"
        lede="Explore recent projects. Case studies marked Placeholder are stand-ins until real writeups replace them in src/data/site-content.js."
      />
      <div className="flex items-center gap-3 mb-8">
        <PlaceholderFlag />
        <p className="text-sm text-copy-faint">
          Project copy, links, and some imagery are draft content.
        </p>
      </div>

      <CategoryFilters
        categories={categories}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      {filteredProjects.length > 0 ? (
        <PortfolioGrid
          projects={filteredProjects}
          handleProjectClick={(project) => {
            setSelectedProject(project);
            setDialogOpen(true);
          }}
          placeholderImage={PLACEHOLDER_IMAGE}
        />
      ) : (
        <EmptyState setActiveFilter={setActiveFilter} />
      )}

      <ProjectDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        selectedProject={selectedProject}
        placeholderImage={PLACEHOLDER_IMAGE}
      />
    </PageShell>
  );
}
