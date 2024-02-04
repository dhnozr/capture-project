export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 600,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, when: 'beforeChildren', staggerChildren: 0.5 },
  },

  exit: {
    opacity: 0,
    y: 600,
    transition: { duration: 0.5 },
  },
};

export const titleAnimation = {
  hidden: { y: 600 },
  show: {
    y: 0,
    transition: { duration: 1 },
  },
};

export const fade = {
  hidden: { opacity: 0, x: 400, transition: { duration: 1 } },

  show: {
    opacity: 1,
    transition: { duration: 1 },
    x: 0,
  },
};

export const delayedFade = {
  hidden: { opacity: 0, x: 400, transition: { duration: 1 } },

  show: {
    opacity: 1,
    transition: { duration: 1, delay: 0.5 },
    x: 0,
  },
};

export const photoAnim = {
  hidden: {
    scale: 1.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const lineAnim = {
  hidden: {
    width: '0%',
  },
  show: {
    width: '100%',
    transition: { duration: 1.3 },
  },
};

export const slider = {
  hidden: {
    x: '-130%',
    skew: '45deg',
  },

  show: {
    x: '100%',
    skew: '0deg',
    transition: { duration: 1 },
  },
};

export const sliderContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: 'beforeChildren' },
  },
};

export const faqScroll = {
  hidden: {
    opacity: 0,
    y: 300,
    transition: { duration: 1 },
  },

  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

export const ourWorkAnim = {
  hidden: {
    opacity: 0,
    x: 300,
    transition: { duration: 1 },
  },

  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

export const sliderOurWork = {
  hidden: {
    width: '0%',
  },

  show: {
    width: '100%',
    transition: { duration: 0.75 },
  },
};
