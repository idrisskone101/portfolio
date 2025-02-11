"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import HamburgerMenu from "@/components/ui/hamburger-menu";
import { X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full text-white bg-main xl:w-1/6 xl:flex xl:flex-col xl:items-center xl:justify-center xl:bg-black">
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
          <SheetContent open={isOpen} side="left" className="bg-[#111] w-[300px] lg:w-[450px] text-white" aria-describedby={undefined}>
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
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </SheetContent>
        </Sheet>
        
        <div className="hidden xl:block">
          <h2 className="text-3xl font-bold tracking-widest uppercase lg:mb-5">Idriss</h2>
          <ul className="space-y-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
