import React from 'react';

export default function HeroSection({ title, subtitle }) {
  return (
    <div className="relative mb-16 overflow-hidden border border-gray-800 rounded-xl bg-gradient-to-r from-indigo-900/40 to-purple-900/40">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      <div className="relative z-10 px-8 py-16 md:px-16">
        <div className="flex flex-col items-start max-w-2xl">
          <p className="text-[#999] py-2 px-3 bg-white/10 rounded-full uppercase font-semibold text-xs mb-4">
            {title}
          </p>
          <h1 className="pb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            {subtitle}
          </h1>
          <p className="max-w-xl text-lg text-gray-300">
            Explore my latest projects and see how I bring ideas to life with
            code and creativity.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 rounded-full bg-purple-500/20 filter blur-3xl"></div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 rounded-full bg-blue-500/20 filter blur-3xl"></div>
    </div>
  );
}
