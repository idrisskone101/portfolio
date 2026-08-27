export const pageMotion = {
  duration: 0.38,
  ease: [0.22, 1, 0.36, 1],
  enterY: 16,
  exitY: -10,
};

export const homeMotion = {
  typeMs: 92,
  deleteMs: 58,
  holdMs: 3600,
  mobileTypeMs: 180,
  mobileDeleteMs: 120,
  mobileHoldMs: 5500,
  mobileQuery: '(max-width: 1279px)',
};

export function getHomeTypeTiming() {
  if (typeof window === 'undefined') {
    return {
      typeMs: homeMotion.typeMs,
      deleteMs: homeMotion.deleteMs,
      holdMs: homeMotion.holdMs,
    };
  }

  const mobile = window.matchMedia(homeMotion.mobileQuery).matches;
  if (!mobile) {
    return {
      typeMs: homeMotion.typeMs,
      deleteMs: homeMotion.deleteMs,
      holdMs: homeMotion.holdMs,
    };
  }

  return {
    typeMs: homeMotion.mobileTypeMs,
    deleteMs: homeMotion.mobileDeleteMs,
    holdMs: homeMotion.mobileHoldMs,
  };
}

