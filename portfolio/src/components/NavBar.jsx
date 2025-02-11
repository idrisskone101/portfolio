'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetHeader,
} from '@/components/ui/sheet';
import HamburgerMenu from '@/components/ui/hamburger-menu';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, children, className, onClick }) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          'relative py-1 transition-colors duration-300',
          'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full',
          isActive && 'after:w-full',
          className
        )}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="w-full text-white bg-main xl:flex xl:w-1/6 xl:flex-col xl:items-center xl:justify-center xl:bg-black">
      <div className="flex items-center justify-between py-3 mx-5 xl:flex-row-reverse">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-between w-full xl:hidden">
            <h2 className="text-3xl font-bold tracking-widest uppercase xl:mb-5">Idriss</h2>

            <SheetTrigger asChild className="xl:hidden">
              <button className="p-2">
                <HamburgerMenu isOpen={isOpen} />
              </button>
            </SheetTrigger>
          </div>
          <SheetContent
            open={isOpen}
            side="left"
            className="w-[300px] bg-[#111] text-white lg:w-[450px]"
            aria-describedby={undefined}
          >
            <div className="flex items-center justify-between mb-6">
              <SheetTitle className="text-3xl font-bold tracking-widest text-white uppercase">
                Idriss
              </SheetTitle>
              <SheetClose className="transition-opacity rounded-sm opacity-70 ring-offset-background hover:opacity-100">
                <X className="w-6 h-6" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </div>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink href={item.path} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>

        <div className="hidden xl:block">
          <h2 className="text-3xl font-bold tracking-widest uppercase lg:mb-5">Idriss</h2>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink href={item.path}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
