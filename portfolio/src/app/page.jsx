import Image from "next/image";
import profileImage from "@/app/_assets/images/profile.jpg";
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex-1">
      <div className="mx-auto">
        <Image
          src={profileImage}
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full"
          priority
        />
        <h1 className="mt-6 text-3xl font-bold">Idriss Kone</h1>
        <span className="text-xl text-gray-600">
          Software Developer
        </span>
        <p className="mt-4 text-gray-700">
          Innovative Software Developer based in Montreal, passionate about crafting elegant solutions and eager to collaborate on projects across North America.
        </p>
        <ul className="flex gap-6 mt-8">
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
  );
}
