'use client';

import settings from '@/settings.json';
import profileImage from '@/app/_assets/images/profile.jpg';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const { home } = settings;

  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center xl:min-h-screen w-full">
      <div className="xl:flex xl:space-x-20 xl:justify-center xl:mx-auto xl:w-full">
        <div className="relative">
          <div
            className="w-[200px] aspect-square lg:w-[300px] bg-no-repeat bg-center bg-cover object-top animate-morph bg-blend-multiply shadow-profile rounded-blob overflow-hidden m-auto"
            style={{
              backgroundImage: `url(${profileImage.src})`,
              filter: 'grayscale(100%)',
              backgroundPosition: '50% 0%',
            }}
          />
        </div>

        <div className="flex flex-col items-center justify-center xl:text-left xl:items-start">
          <h1 className="pb-3 mt-6 text-4xl font-bold uppercase lg:text-5xl">{home.name}</h1>
          <div className="text-xl text-white h-[30px] font-medium lg:text-2xl">
            <TypeAnimation
              sequence={home.titles.reduce((acc, title) => [...acc, title, 2000, '', 500], [])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="mt-4 text-[#BBB] text-lg max-w-sm lg:max-w-md font-medium">
            {home.description}
          </p>
          <ul className="flex justify-center gap-3 mt-8 text-white">
            <li>
              <a
                href={home.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-900"
              >
                <Github size={20} />
              </a>
            </li>
            <li>
              <a
                href={home.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-900"
              >
                <Linkedin size={20} />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${home.socialLinks.email}`}
                className="transition-colors hover:text-gray-900"
              >
                <Mail size={20} />
              </a>
            </li>
            <li>
              <a
                href={home.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-900"
              >
                <Twitter size={20} />
              </a>
            </li>
            <li>
              <a
                href={home.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-900"
              >
                <Instagram size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
