export const photoPlaceholderVariants = {
  croissant: "croissant",
  cinnamon: "cinnamon",
  cookie: "cookie",
  latte: "latte",
  pastry: "pastry",
  coffee: "coffee",
  interior: "interior",
  hero: "hero",
} as const;

export type PhotoPlaceholderVariant =
  (typeof photoPlaceholderVariants)[keyof typeof photoPlaceholderVariants];
