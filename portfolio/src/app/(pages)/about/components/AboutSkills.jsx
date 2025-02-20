import React from 'react';
import Image from 'next/image';
import ReactIcon from '@/app/(pages)/about/assets/react.svg';
import TypeScriptIcon from '@/app/(pages)/about/assets/typescript.svg';
import JavaScriptIcon from '@/app/(pages)/about/assets/javascript.svg';
import TailwindIcon from '@/app/(pages)/about/assets/tailwind.svg';
import BootstrapIcon from '@/app/(pages)/about/assets/bootstrap.svg';
import SassIcon from '@/app/(pages)/about/assets/sass.svg';
import HTMLIcon from '@/app/(pages)/about/assets/html.svg';
import CSSIcon from '@/app/(pages)/about/assets/css.svg';
import NextJSIcon from '@/app/(pages)/about/assets/nextjs.svg';
import NodeJSIcon from '@/app/(pages)/about/assets/nodejs.svg';

const AboutSkills = () => {
  const skills = [
    { icon: ReactIcon, name: 'React', colorClass: 'bg-[#7ee1fc26]' },
    { icon: TypeScriptIcon, name: 'TypeScript', colorClass: 'bg-[#007acc26]' },
    { icon: JavaScriptIcon, name: 'JavaScript', colorClass: 'bg-[#f0db4f26]' },
    { icon: TailwindIcon, name: 'Tailwind', colorClass: 'bg-[#44a8b326]' },
    // { icon: BootstrapIcon, name: 'Bootstrap' },
    { icon: SassIcon, name: 'Sass', colorClass: 'bg-[#cf649a26]' },
    { icon: HTMLIcon, name: 'HTML', colorClass: 'bg-[#dd4b2526]' },
    { icon: CSSIcon, name: 'CSS', colorClass: 'bg-[#264de426]' },
    {
      icon: NextJSIcon,
      name: 'Next.js',
      colorClass: 'bg-[#ffffff14]',
      isNextJs: true,
    },
    { icon: NodeJSIcon, name: 'Node.js', colorClass: 'bg-[#6fa66026]' },
  ];

  return (
    <div className="w-full mt-24 text-white">
      <h2 className="mb-6 text-2xl font-bold text-left">Skills & Tools</h2>
      <h3 className="mb-6 text-lg font-bold text-left">Frontend</h3>

      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] backdrop-blur-2xl"
          >
            <div
              className={`p-2 items-center justify-center rounded-lg ${skill.colorClass}`}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={20}
                height={20}
                className={`object-contain ${skill.isNextJs ? 'invert' : ''}`}
              />
            </div>
            <span className="text-sm ">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutSkills;
