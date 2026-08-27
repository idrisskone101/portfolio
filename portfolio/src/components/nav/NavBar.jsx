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
} from '@/components/ui/sheet';
import HamburgerMenu from '@/components/ui/hamburger-menu';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigation } from '@/data/site-content';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <nav
      className={cn(
        'w-full text-white bg-main xl:flex xl:w-1/5 xl:flex-col xl:items-start xl:px-[var(--identity-gutter)]',
        isHome
          ? 'xl:justify-start xl:pt-[var(--identity-gutter)] xl:bg-transparent xl:z-20'
          : 'xl:justify-center xl:bg-rail'
      )}
    >
      <div className="flex items-center justify-between py-3 mx-5 xl:mx-0 xl:w-full xl:justify-start">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-between w-full xl:hidden">
            <Link
              href="/"
              className="text-3xl font-bold tracking-widest uppercase"
            >
              Idriss
            </Link>

            <SheetTrigger asChild className="xl:hidden">
              <button
                type="button"
                className="p-2 text-white rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta"
                aria-label="Open menu"
              >
                <HamburgerMenu isOpen={isOpen} />
              </button>
            </SheetTrigger>
          </div>
          <SheetContent
            side="left"
            className="w-[300px] bg-canvas text-white lg:w-[450px] border-line"
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
              {navigation.map((item) => (
                <li key={item.path}>
                  <NavLink
                    href={item.path}
                    pathname={pathname}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>

        <div className="hidden xl:block">
          <Link
            href="/"
            className="block text-3xl font-bold tracking-widest uppercase lg:mb-5"
            data-identity="name"
          >
            Idriss
          </Link>
          <ul className="space-y-4">
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink href={item.path} pathname={pathname}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, className, onClick, pathname }) {
  const isActive =
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'relative py-1 transition-colors duration-300',
        'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-magenta after:transition-all after:duration-300 hover:after:w-full',
        isActive && 'after:w-full',
        className
      )}
    >
      {children}
    </Link>
  );
}
