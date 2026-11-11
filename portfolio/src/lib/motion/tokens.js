export const pageMotion = {
  duration: 0.38,
  ease: [0.22, 1, 0.36, 1],
  enterY: 16,
  exitY: -10,
};

export const homeMotion = {
  typeMs: 55,
  deleteMs: 28,
  holdMs: 2000,
  mobileTypeMs: 65,
  mobileDeleteMs: 32,
  mobileHoldMs: 2200,
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

