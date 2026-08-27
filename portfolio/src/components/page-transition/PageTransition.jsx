'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { pageMotion } from '@/lib/motion/tokens';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const variants = reduceMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
      }
    : {
        initial: { opacity: 0, y: pageMotion.enterY },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: pageMotion.exitY },
      };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: reduceMotion ? 0 : pageMotion.duration,
          ease: pageMotion.ease,
        }}
        className="w-full min-h-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
