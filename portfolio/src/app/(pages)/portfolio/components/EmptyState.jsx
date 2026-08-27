import { Button } from '@/components/ui/button';

export default function EmptyState({ setActiveFilter }) {
  return (
    <div className="flex flex-col items-start py-16 text-left">
      <h3 className="text-xl font-medium text-white">No projects found</h3>
      <p className="mt-2 text-copy-muted">
        Try selecting a different category filter.
      </p>
      <Button
        type="button"
        variant="outline"
        className="mt-4"
        onClick={() => setActiveFilter('All')}
      >
        Show all projects
      </Button>
    </div>
  );
}
