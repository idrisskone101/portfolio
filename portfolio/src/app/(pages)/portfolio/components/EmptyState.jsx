import React from 'react';

export default function EmptyState({ setActiveFilter }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white/5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-medium text-white">No projects found</h3>
      <p className="mt-2 text-gray-400">
        Try selecting a different category filter
      </p>
      <button
        onClick={() => setActiveFilter('all')}
        className="px-4 py-2 mt-4 text-sm font-medium text-white transition-colors rounded-full bg-white/10 hover:bg-white/20"
      >
        Show all projects
      </button>
    </div>
  );
}
