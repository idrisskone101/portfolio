import Image from 'next/image';
import Link from 'next/link';
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
import { getProjectLinks } from '../project-links';

export default function ProjectDialog({
  dialogOpen,
  setDialogOpen,
  selectedProject,
}) {
  if (!selectedProject) return null;

  const links = getProjectLinks(selectedProject);

  return (
    <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <AlertDialogContent className="xl:max-w-3xl max-h-[90vh] overflow-y-auto auto-rows-max bg-canvas border-line px-4 sm:px-6 max-w-[90vw]">
        {selectedProject.image ? (
          <div className="relative mb-4 overflow-hidden rounded-lg aspect-video">
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              fill
              className="object-cover"
            />
          </div>
        ) : null}
        <AlertDialogHeader>
          <p className="mb-2 text-sm text-copy-faint">
            {selectedProject.statusLabel || selectedProject.category || 'Project'}
          </p>
          <AlertDialogTitle className="text-2xl text-white">
            {selectedProject.title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base text-copy-muted max-sm:mt-10">
            {selectedProject.description}
          </AlertDialogDescription>

          {selectedProject.technologies ? (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2 py-1 text-xs font-medium border text-copy-muted border-line"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          ) : null}
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-wrap gap-2 mt-6 sm:flex-nowrap">
          <AlertDialogCancel className="flex-1 min-w-0">
            Close
          </AlertDialogCancel>
          {links.map((link) => (
            <AlertDialogAction key={link.id} asChild className="flex-1 min-w-0">
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full"
              >
                {link.label}
              </Link>
            </AlertDialogAction>
          ))}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
