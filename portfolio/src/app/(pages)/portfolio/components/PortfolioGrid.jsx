import Image from 'next/image';
import { PlaceholderFlag } from '@/components/page-chrome';

export default function PortfolioGrid({ projects, handleProjectClick }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <button
          key={project.id}
          type="button"
          className="relative overflow-hidden text-left border group bg-surface border-line rounded-lg cursor-pointer transition-colors duration-page ease-page hover:border-magenta/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
          onClick={() => handleProjectClick(project)}
        >
          {project.image ? (
            <ImageCard project={project} />
          ) : (
            <CopyCard project={project} />
          )}
        </button>
      ))}
    </div>
  );
}

function ImageCard({ project }) {
  return (
    <div className="relative aspect-[4/3]">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <ProjectMeta project={project} />
        <h3 className="mb-1 text-xl font-bold text-white">{project.title}</h3>
        <p className="text-sm text-copy-muted line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}

function CopyCard({ project }) {
  return (
    <div className="flex flex-col p-6 min-h-[220px]">
      <ProjectMeta project={project} />
      <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
      <p className="text-sm leading-7 text-copy-muted">{project.description}</p>
    </div>
  );
}

function ProjectMeta({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-3">
      <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] bg-white/10 text-copy-faint">
        {project.statusLabel || project.category || 'Project'}
      </span>
      {project.placeholder ? <PlaceholderFlag /> : null}
    </div>
  );
}
