import React from 'react';
import Image from 'next/image';
import settings from '@/settings.json';
import ReactIcon from '@/app/(pages)/about/assets/react.svg';
import TypeScriptIcon from '@/app/(pages)/about/assets/typescript.svg';
import JavaScriptIcon from '@/app/(pages)/about/assets/javascript.svg';
import TailwindIcon from '@/app/(pages)/about/assets/tailwind.svg';
import SassIcon from '@/app/(pages)/about/assets/sass.svg';
import HTMLIcon from '@/app/(pages)/about/assets/html.svg';
import CSSIcon from '@/app/(pages)/about/assets/css.svg';
import NextJSIcon from '@/app/(pages)/about/assets/nextjs.svg';
import NodeJSIcon from '@/app/(pages)/about/assets/nodejs.svg';
import PythonIcon from '@/app/(pages)/about/assets/python.svg';
import MongoDBIcon from '@/app/(pages)/about/assets/mongodb.svg';
import ExpressIcon from '@/app/(pages)/about/assets/express.svg';
import ViteIcon from '@/app/(pages)/about/assets/vite.svg';
import GitHubIcon from '@/app/(pages)/about/assets/github.svg';
import WordPressIcon from '@/app/(pages)/about/assets/wordpress.svg';
import ShopifyIcon from '@/app/(pages)/about/assets/shopify.svg';
import WebflowIcon from '@/app/(pages)/about/assets/webflow.svg';
import GraphQLIcon from '@/app/(pages)/about/assets/graphql.svg';
import RemixRunIcon from '@/app/(pages)/about/assets/remixrun.svg';
import SquarespaceIcon from '@/app/(pages)/about/assets/squarespace.svg';

const iconMap = {
  React: ReactIcon,
  TypeScript: TypeScriptIcon,
  JavaScript: JavaScriptIcon,
  Tailwind: TailwindIcon,
  Sass: SassIcon,
  HTML: HTMLIcon,
  CSS: CSSIcon,
  'Next.js': NextJSIcon,
  'Node.js': NodeJSIcon,
  Python: PythonIcon,
  MongoDB: MongoDBIcon,
  Express: ExpressIcon,
  Vite: ViteIcon,
  GitHub: GitHubIcon,
  WordPress: WordPressIcon,
  Shopify: ShopifyIcon,
  Webflow: WebflowIcon,
  Squarespace: SquarespaceIcon,
  GraphQL: GraphQLIcon,
  'Remix Run': RemixRunIcon,
};

const SkillBlock = ({ title, skills }) => (
  <div>
    <h3 className="mb-6 text-lg font-bold text-left">{title}</h3>
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
              src={iconMap[skill.name]}
              alt={skill.name}
              width={20}
              height={20}
              className={`object-contain ${skill.isInvert ? 'invert' : ''}`}
            />
          </div>
          <span className="text-sm">{skill.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const AboutSkills = () => {
  const { skills } = settings.about;

  const frontendSkills = skills.filter((skill) => skill.stack === 'frontend');
  const backendSkills = skills.filter((skill) => skill.stack === 'backend');
  const toolSkills = skills.filter((skill) => skill.stack === 'tools');

  return (
    <div className="w-full mt-24 text-white">
      <h2 className="mb-6 text-2xl font-bold text-left">Skills & Tools</h2>

      <div className="space-y-8">
        <SkillBlock title="Frontend" skills={frontendSkills} />
        <SkillBlock title="Backend" skills={backendSkills} />
        <SkillBlock title="Tools & Platforms" skills={toolSkills} />
      </div>
    </div>
  );
};

export default AboutSkills;
