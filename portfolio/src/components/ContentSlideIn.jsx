'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  enter: {
    x: -100,
    opacity: 0,
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
};

export default function ContentSlideIn({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        variants={variants}
        initial="enter"
        animate="center"
        key={pathname}
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        className="text-center xl:flex xl:space-x-20"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
