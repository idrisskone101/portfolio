'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { pageMotion } from '@/lib/motion/tokens';
import FrozenRouter from './frozen-router';

const PAGE_VARIANTS = {
  initial: { opacity: 0, y: pageMotion.enterY },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: pageMotion.exitY },
};

const REDUCED_VARIANTS = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: 0 },
};

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion() === true;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={reduceMotion ? REDUCED_VARIANTS : PAGE_VARIANTS}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: reduceMotion ? 0 : pageMotion.duration,
          ease: pageMotion.ease,
        }}
        className="w-full min-h-full"
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
