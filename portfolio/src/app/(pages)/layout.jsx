"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0
  })
};

export default function PagesLayout({ children }) {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = React.useState(pathname);
  const [displayChild, setDisplayChild] = React.useState(children);
  const [direction, setDirection] = React.useState(0);

  React.useEffect(() => {
    if (pathname !== currentPath) {
      setDirection(currentPath === "/" ? -1 : currentPath < pathname ? 1 : -1);
      // Remove current content to trigger exit animation
      setDisplayChild(null);
    }
  }, [pathname, currentPath]);

  return (
    <div className="flex-1 bg-[#111] text-white h-full relative">
      <div className="absolute inset-0 flex items-center justify-center px-5 overflow-hidden">
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => {
            // After exit, update to new content
            setCurrentPath(pathname);
            setDisplayChild(children);
          }}
        >
          {displayChild && (
            <motion.div
              key={currentPath}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full"
            >
              {displayChild}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 