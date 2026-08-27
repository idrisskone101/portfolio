'use client';

import profileImage from '@/app/_assets/images/profile.jpg';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { home, socials } from '@/data/site-content';

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  instagram: Instagram,
};

export default function Home() {
  const titleSequence = home.titles.reduce(
    (acc, title) => [...acc, title, 2000, '', 500],
    []
  );

  return (
    <div className="flex min-h-[100dvh] items-center justify-center w-full px-5 py-16 xl:min-h-full">
      <div className="xl:flex xl:items-center xl:gap-20 xl:justify-center xl:mx-auto xl:w-full">
        <div
          className="w-[200px] aspect-square lg:w-[300px] bg-no-repeat bg-center bg-cover animate-morph bg-blend-multiply shadow-profile rounded-blob overflow-hidden m-auto"
          style={{
            backgroundImage: `url(${profileImage.src})`,
            filter: 'grayscale(100%)',
            backgroundPosition: '50% 0%',
          }}
          role="img"
          aria-label={`${home.name} portrait`}
        />

        <div className="flex flex-col items-center justify-center mt-8 text-center xl:mt-0 xl:text-left xl:items-start">
          <h1 className="text-4xl font-bold uppercase lg:text-5xl">
            {home.name}
          </h1>
          <div className="mt-3 text-xl font-medium text-magenta h-[30px] lg:text-2xl">
            <TypeAnimation
              sequence={titleSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="max-w-md mt-5 text-lg text-copy-muted">
            {home.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8 xl:justify-start">
            <Button asChild>
              <Link href="/portfolio">View work</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
          <ul className="flex justify-center gap-4 mt-8 text-white xl:justify-start">
            {socials.map((social) => {
              const Icon = ICONS[social.icon];
              return (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target={social.icon === 'mail' ? undefined : '_blank'}
                    rel={
                      social.icon === 'mail'
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={social.label}
                    className="transition-colors duration-page ease-page hover:text-magenta"
                  >
                    <Icon size={20} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
