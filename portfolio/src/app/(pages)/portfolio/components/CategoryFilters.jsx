import clsx from 'clsx';

export default function CategoryFilters({
  categories,
  activeFilter,
  setActiveFilter,
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Project categories">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setActiveFilter(category)}
          className={clsx(
            'px-4 py-2 text-sm font-medium border transition-colors duration-page ease-page',
            activeFilter === category
              ? 'bg-white/10 text-white border-line'
              : 'bg-transparent text-copy-faint border-transparent hover:text-white hover:border-line'
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
