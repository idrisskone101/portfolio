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
    <nav className="w-full text-white bg-main lg:w-1/6 lg:flex lg:flex-col lg:items-center lg:justify-center">
      <div className="flex justify-between items-center py-3 mx-5 lg:flex-row-reverse">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex justify-between items-center w-full">
            <h2 className="text-3xl font-bold tracking-widest uppercase lg:mb-5">Idriss</h2>

          <SheetTrigger asChild className="lg:hidden">
              <button className="p-2">
              <HamburgerMenu isOpen={isOpen} />
            </button>
          </SheetTrigger>
          </div>
          <SheetContent open={isOpen} side="left" className="bg-[#111] w-[300px] sm:w-[300px] text-white" aria-describedby={undefined}>
            <div className="flex justify-between items-center mb-6">
              <SheetTitle className="text-3xl font-bold tracking-widest text-white uppercase">
                Idriss
              </SheetTitle>
              <SheetClose className="rounded-sm opacity-70 transition-opacity ring-offset-background hover:opacity-100">
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
        
        <div className="hidden lg:block">
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
