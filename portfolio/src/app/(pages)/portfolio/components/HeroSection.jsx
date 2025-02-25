import React from 'react';

export default function HeroSection({ title, subtitle }) {
  return (
    <div className="relative mb-16 overflow-hidden border border-gray-800 rounded-xl bg-gradient-to-r from-gray-900/40 to-black/60">
      <div className="relative z-10 px-8 py-16 md:px-16">
        <div className="flex flex-col items-start max-w-2xl">
          <p className="text-[#999] py-2 px-3 bg-white/10 rounded-full uppercase font-semibold text-xs mb-4">
            {title}
          </p>
          <h1 className="pb-4 text-4xl font-extrabold text-left text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            {subtitle}
          </h1>
          <p className="max-w-xl text-lg text-left text-gray-300">
            Explore my latest projects and see how I bring ideas to life with
            code and creativity.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 rounded-full bg-magenta/10 filter blur-3xl"></div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 rounded-full bg-gray-500/20 filter blur-3xl"></div>
    </div>
  );
}
