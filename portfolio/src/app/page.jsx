"use client";

import Image from "next/image";
import profileImage from "@/app/_assets/images/profile.jpg";
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';


export default function Home() {
  return (
    <div className="flex-1 bg-[#111] text-white min-h-screen relative">
      <div className="absolute inset-0 flex items-center justify-center px-5">
        <div className="text-center">
          <div className="relative">
          <div
            className="w-[200px] h-[200px] bg-no-repeat bg-center bg-cover object-top animate-morph bg-blend-multiply shadow-profile rounded-blob overflow-hidden m-auto"
            style={{
              backgroundImage: `url(${profileImage.src})`,
              filter: 'grayscale(100%)',
            }}
          />
          </div>
          
          <h1 className="pb-3 mt-6 text-4xl font-bold uppercase">Idriss Kone</h1>
          <div className="text-xl text-white h-[30px] font-medium">
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
          <p className="mt-4 text-[#BBB] text-lg max-w-sm">
            Innovative Software Developer based in Montreal, passionate about crafting elegant solutions and eager to collaborate on projects across North America.
          </p>
          <ul className="flex justify-center gap-6 mt-8">
            <li>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-gray-900">
                <Github size={32} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-gray-900">
                <Linkedin size={32} />
              </a>
            </li>
            <li>
              <a href="mailto:you@example.com" className="text-gray-600 transition-colors hover:text-gray-900">
                <Mail size={32} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-gray-900">
                <Twitter size={32} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-gray-900">
                <Instagram size={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
