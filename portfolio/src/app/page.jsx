'use client';

import { useReducedMotion } from 'framer-motion';
import profileImage from '@/app/_assets/images/profile.jpg';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { home, socials, studio } from '@/data/site-content';
import HomeProducts from './home/home-products';
import HomeTypeTitles from './home/home-type-titles';

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  instagram: Instagram,
};

export default function Home() {
  const reduceMotion = useReducedMotion() === true;

  return (
    <div className="flex min-h-[calc(100dvh-4.5rem)] items-center justify-center w-full px-5 py-16 xl:min-h-[100dvh] xl:py-10">
      <div className="flex flex-col items-center xl:flex-row xl:items-center xl:gap-20 xl:justify-center xl:w-full">
        <div
          className="w-[200px] aspect-square lg:w-[300px] bg-no-repeat bg-center bg-cover animate-morph bg-blend-multiply shadow-profile rounded-blob overflow-hidden m-auto xl:m-0 shrink-0"
          style={{
            backgroundImage: `url(${profileImage.src})`,
            filter: 'grayscale(100%)',
            backgroundPosition: '50% 0%',
          }}
          role="img"
          aria-label={`${home.name} portrait`}
          data-identity="blob"
        />

        <div className="flex flex-col items-center justify-center mt-8 text-center xl:mt-0 xl:text-left xl:items-start">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copy-faint">
            {studio.name} · {studio.city}
          </p>
          <h1 className="mt-3 text-4xl font-bold uppercase lg:text-5xl" data-identity="copy">
            {home.name}
          </h1>
          <div className="mt-3 text-xl font-medium text-magenta min-h-[1.25em] lg:text-2xl">
            <HomeTypeTitles titles={home.titles} reduceMotion={reduceMotion} />
          </div>
          <p className="max-w-md mt-5 text-lg text-copy-muted">
            {home.description}
          </p>
          <HomeProducts products={home.products} />
          <div className="flex flex-wrap justify-center gap-3 mt-8 xl:justify-start xl:mt-5">
            <Button asChild>
              <Link href="/portfolio">View work</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
          <ul className="flex justify-center gap-4 mt-8 text-white xl:justify-start xl:mt-5">
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
