"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  
} from "@/components/ui/sheet";
import HamburgerMenu from "@/components/ui/hamburger-menu";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen, "isOpen");

  return (
    <nav className="w-full text-white bg-main lg:w-1/6 lg:flex lg:flex-col lg:items-center lg:justify-center">
      <div className="flex items-center justify-between py-3 mx-5 lg:flex-row-reverse">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center justify-between w-full">
            <h2 className="text-3xl font-bold tracking-widest uppercase lg:mb-5">Idriss</h2>

            <SheetTrigger asChild className="lg:hidden">
              <button className="p-2">
                <HamburgerMenu isOpen={isOpen} />
              </button>
            </SheetTrigger>
          </div>
          <SheetContent open={isOpen} side="left" className="bg-main w-[300px] sm:w-[300px] text-white">
            <div className="mt-6">
              <h2 className="mb-5 text-3xl font-bold tracking-widest uppercase">Idriss</h2>
              <ul className="space-y-4">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
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
