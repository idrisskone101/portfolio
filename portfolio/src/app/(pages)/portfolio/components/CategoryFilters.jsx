import React from 'react';
import clsx from 'clsx';

export default function CategoryFilters({
  categories,
  activeFilter,
  setActiveFilter,
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={clsx(
            'px-4 py-2 text-sm font-medium rounded-full transition-all',
            activeFilter === category
              ? 'bg-white/10 text-white'
              : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
          )}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}
