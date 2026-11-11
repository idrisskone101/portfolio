import Image from 'next/image';
import clsx from 'clsx';
import { about } from '@/data/site-content';
import { PageSection } from '@/components/page-chrome';
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
import GitIcon from '@/app/(pages)/about/assets/git.svg';
import ClaudeIcon from '@/app/(pages)/about/assets/claude.svg';
import PaperIcon from '@/app/(pages)/about/assets/paper.svg';
import ConductorIcon from '@/app/(pages)/about/assets/conductor.svg';
import ChatGPTIcon from '@/app/(pages)/about/assets/chatgpt.svg';
import OpenCodeIcon from '@/app/(pages)/about/assets/opencode.svg';
import OllamaIcon from '@/app/(pages)/about/assets/ollama.svg';
import DevinIcon from '@/app/(pages)/about/assets/devin.svg';
import ManusIcon from '@/app/(pages)/about/assets/manus.svg';

const skillsData = {
  Claude: {
    bgColor: 'bg-[#d9775726]',
    textColor: 'text-[#d97757]',
    icon: ClaudeIcon,
  },
  Paper: {
    bgColor: 'bg-[#81acec26]',
    textColor: 'text-[#81acec]',
    icon: PaperIcon,
  },
  Conductor: {
    bgColor: 'bg-[#ffffff14]',
    textColor: 'text-white',
    icon: ConductorIcon,
  },
  ChatGPT: {
    bgColor: 'bg-[#ffffff14]',
    textColor: 'text-white',
    icon: ChatGPTIcon,
  },
  OpenCode: {
    bgColor: 'bg-[#ffffff14]',
    textColor: 'text-white',
    icon: OpenCodeIcon,
  },
  Ollama: {
    bgColor: 'bg-[#ffffff14]',
    textColor: 'text-white',
    icon: OllamaIcon,
  },
  Devin: {
    bgColor: 'bg-[#21c19a26]',
    textColor: 'text-[#21c19a]',
    icon: DevinIcon,
  },
  Manus: {
    bgColor: 'bg-[#ffffff14]',
    textColor: 'text-white',
    icon: ManusIcon,
  },
  React: {
    bgColor: 'bg-[#7ee1fc26]',
    textColor: 'text-[#7ee1fc]',
    icon: ReactIcon,
  },
  TypeScript: {
    bgColor: 'bg-[#007acc26]',
    textColor: 'text-[#007acc]',
    icon: TypeScriptIcon,
  },
  JavaScript: {
    bgColor: 'bg-[#f0db4f26]',
    textColor: 'text-[#f0db4f]',
    icon: JavaScriptIcon,
  },
  Tailwind: {
    bgColor: 'bg-[#44a8b326]',
    textColor: 'text-[#44a8b3]',
    icon: TailwindIcon,
  },
  Sass: {
    bgColor: 'bg-[#cf649a26]',
    textColor: 'text-[#cf649a]',
    icon: SassIcon,
  },
  HTML: {
    bgColor: 'bg-[#dd4b2526]',
    textColor: 'text-[#dd4b25]',
    icon: HTMLIcon,
  },
  CSS: {
    bgColor: 'bg-[#264de426]',
    textColor: 'text-[#264de4]',
    icon: CSSIcon,
  },
  'Next.js': {
    bgColor: 'bg-[#ffffff14]',
    textColor: 'text-white',
    icon: NextJSIcon,
  },
  'Node.js': {
    bgColor: 'bg-[#6fa66026]',
    textColor: 'text-[#6fa660]',
    icon: NodeJSIcon,
  },
  Python: {
    bgColor: 'bg-[#30699826]',
    textColor: 'text-[#306998]',
    icon: PythonIcon,
  },
  Express: {
    bgColor: 'bg-[#ffffff14]',
    textColor: 'text-white',
    icon: ExpressIcon,
  },
  MongoDB: {
    bgColor: 'bg-[#4db33d26]',
    textColor: 'text-[#4db33d]',
    icon: MongoDBIcon,
  },
  Vite: {
    bgColor: 'bg-[#646cff26]',
    textColor: 'text-[#646cff]',
    icon: ViteIcon,
  },
  GitHub: {
    bgColor: 'bg-[#ffffff14]',
    textColor: 'text-white',
    icon: GitHubIcon,
  },
  WordPress: {
    bgColor: 'bg-[#ffffff14]',
    textColor: 'text-white',
    icon: WordPressIcon,
  },
  Shopify: {
    bgColor: 'bg-[#8CBC5A26]',
    textColor: 'text-[#8CBC5A]',
    icon: ShopifyIcon,
  },
  Webflow: {
    bgColor: 'bg-[#ffffff14]',
    textColor: 'text-white',
    icon: WebflowIcon,
  },
  GraphQL: {
    bgColor: 'bg-[#e8457c26]',
    textColor: 'text-[#e8457c]',
    icon: GraphQLIcon,
  },
  'Remix Run': {
    bgColor: 'bg-[#ffffff14]',
    textColor: 'text-white',
    icon: RemixRunIcon,
  },
  Squarespace: {
    bgColor: 'bg-[#ffffff14]',
    textColor: 'text-white',
    icon: SquarespaceIcon,
  },
  Git: {
    bgColor: 'bg-[#ffffff14]',
    textColor: 'text-white',
    icon: GitIcon,
  },
};

export default function AboutSkills() {
  const { skills } = about;

  const aiSkills = skills.filter((skill) => skill.stack === 'ai');
  const frontendSkills = skills.filter((skill) => skill.stack === 'frontend');
  const backendSkills = skills.filter((skill) => skill.stack === 'backend');
  const toolSkills = skills.filter((skill) => skill.stack === 'tools');

  return (
    <PageSection title="Skills & Tools">
      <div className="space-y-10">
        <SkillSection title="AI Tools" skills={aiSkills} />
        <SkillSection title="Frontend" skills={frontendSkills} />
        <SkillSection title="Backend" skills={backendSkills} />
        <SkillSection title="Tools & Platforms" skills={toolSkills} />
      </div>
    </PageSection>
  );
}

function SkillSection({ title, skills }) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-bold text-left">{title}</h3>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => {
          const skillInfo = skillsData[skill.name] || {
            bgColor: 'bg-[#ffffff14]',
            textColor: 'text-white',
            icon: null,
          };

          return (
            <li
              key={skill.name}
              className="flex items-center gap-3 p-3 border rounded-md bg-surface border-line"
            >
              <div
                className={clsx(
                  'flex p-2 items-center justify-center rounded-lg shrink-0',
                  skillInfo.bgColor,
                  skillInfo.textColor
                )}
              >
                {skillInfo.icon ? (
                  <Image
                    src={skillInfo.icon}
                    alt=""
                    width={20}
                    height={20}
                    className={clsx(
                      'size-5 object-contain',
                      skill.isInvert && 'invert'
                    )}
                  />
                ) : null}
              </div>
              <span className="text-sm">{skill.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
