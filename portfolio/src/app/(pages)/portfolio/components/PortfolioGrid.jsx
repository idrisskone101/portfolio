import Image from 'next/image';
import { PlaceholderFlag } from '@/components/page-chrome';

export default function PortfolioGrid({
  projects,
  handleProjectClick,
  placeholderImage,
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <button
          key={project.id}
          type="button"
          className="relative overflow-hidden text-left border group border-line rounded-lg cursor-pointer transition-colors duration-page ease-page hover:border-magenta/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
          onClick={() => handleProjectClick(project)}
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={project.image || placeholderImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={project.id <= 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20">
                  {project.category || 'Project'}
                </span>
                {project.placeholder ? <PlaceholderFlag /> : null}
              </div>
              <h3 className="mb-1 text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-copy-muted line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
