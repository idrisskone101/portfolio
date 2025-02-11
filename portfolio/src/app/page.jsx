"use client";

import Image from "next/image";
import profileImage from "@/app/_assets/images/profile.jpg";
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';


export default function Home() {
  return (
    <div className="flex-1 bg-[#111] text-white h-full relative">
      <div className="absolute inset-0 flex items-center justify-center px-5">
        <div className="text-center xl:flex xl:space-x-20">
          <div className="relative">
          <div
            className="w-[200px] aspect-square lg:w-[300px] bg-no-repeat bg-center bg-cover object-top animate-morph bg-blend-multiply shadow-profile rounded-blob overflow-hidden m-auto"
            style={{
              backgroundImage: `url(${profileImage.src})`,
              filter: 'grayscale(100%)',
              backgroundPosition: '50% 0%'  // Moving image down to show more forehead
            }}
          />
          </div>
          
          <div className="flex flex-col items-center justify-center xl:text-left xl:items-start"> 
          <h1 className="pb-3 mt-6 text-4xl font-bold uppercase lg:text-5xl">Idriss Kone</h1>
          <div className="text-xl text-white h-[30px] font-medium lg:text-2xl">
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                '',
                500,
                'Full Stack Developer',
                2000,
                '',
                500,
                'Web Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="mt-4 text-[#BBB] text-lg max-w-sm lg:max-w-md font-medium">
            Innovative developer in Montreal, crafting elegant solutions and ready to elevate projects across North America with cutting-edge expertise.
          </p>
          <ul className="flex justify-center gap-3 mt-8 text-white">
            <li>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gray-900">
                <Github size={20} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gray-900">
                <Linkedin size={20} />
              </a>
            </li>
            <li>
              <a href="mailto:you@example.com" className="transition-colors hover:text-gray-900">
                <Mail size={20} />  
              </a>
            </li>
            <li>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gray-900">
                <Twitter size={20} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gray-900">
                <Instagram size={20} />
              </a>
            </li>
          </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
