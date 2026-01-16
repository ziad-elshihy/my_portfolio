export const EASE_SMOOTH = [0.4, 0, 0.2, 1];

export const FADE_UP = {
   hidden: { opacity: 0, y: 12 },
   visible: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.45,
         ease: EASE_SMOOTH,
      },
   },
};

export const STAGGER_CONTAINER = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.12,
      },
   },
};
