import React from 'react';
import Image from 'next/image';
import profileImage from '@/app/_assets/images/profile.jpg';
const AboutHero = ({ settings, name }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-start">
        <p className="text-[#999] py-3 px-3 bg-white/[8%] uppercase font-semibold text-xs mb-4">
          About
        </p>
        <h1 className="pb-8 text-3xl font-extrabold">{settings.title}</h1>
        <div className="w-full lg:flex lg:items-center lg:gap-10">
          <div
            className="w-full aspect-[16/13] mt-6 mb-9 bg-no-repeat bg-center bg-cover object-top bg-blend-multiply lg:max-w-md"
            style={{
              backgroundImage: `url(${profileImage.src})`,
              filter: 'grayscale(100%)',
              backgroundPosition: '50% 10%',
            }}
          />

          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold lg:text-5xl">{name}</h2>
            <p className="text-sm text-[#BBB] pb-5 lg:text-lg">
              {settings.subtitle}
            </p>
          </div>
        </div>

        <hr className="w-full border-t-[1px] border-white/10 mb-7" />
        <p className="text-sm text-[#BBB] text-left leading-7 whitespace-pre-line xl:max-w-5xl">
          {settings.mainContent}
        </p>
        <hr className="w-full border-t-[1px] border-white/10 mb-7 mt-8" />
      </div>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-2">
        {settings.info.map((info) => (
          <div className="flex text-sm" key={info.label}>
            <p className="w-24 font-bold text-left">{info.label}</p>
            <p className="text-[#BBB] text-left">{info.value}</p>
          </div>
        ))}
      </div>
      <hr className="w-full border-t-[1px] border-white/10 mb-7 mt-8" />

      <div className="flex justify-center px-10 py-3 text-black bg-white rounded-md w-fit">
        <a href="/IdrissKoneResume.pdf" target="_blank" className="block">
          View my Resume
        </a>
      </div>
    </div>
  );
};

export default AboutHero;
