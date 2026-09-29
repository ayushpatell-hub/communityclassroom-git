import type { Variants, Transition } from "framer-motion";

export const ease = { out: [0.22, 1, 0.36, 1], inOut: [0.65, 0, 0.35, 1] } as const;
export const dur = { fast: 0.15, base: 0.25, slow: 0.4, hero: 0.7 } as const;

export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: dur.slow, ease: ease.out } },
};
export const stagger = (delay = 0.06): Variants => ({ hidden: {}, show: { transition: { staggerChildren: delay } } });
export const viewportOnce = { once: true, amount: 0.2, margin: "-40px" } as const;
export const heroIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: dur.hero, ease: ease.out } },
};
export const modalIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: dur.base, ease: ease.out } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: dur.fast } },
};
export const drawerIn: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: dur.base, ease: ease.out } },
  exit: { opacity: 0, x: 24, transition: { duration: dur.fast } },
};
export const sheetIn: Variants = {
  hidden: { x: "100%" },
  show: { x: 0, transition: { duration: dur.base, ease: ease.out } },
  exit: { x: "100%", transition: { duration: dur.base, ease: ease.inOut } },
};
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: dur.slow, ease: ease.out } },
};
export const bubbleIn: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: dur.fast } },
};
export const reducedMotion: Transition = { duration: 0.15 };