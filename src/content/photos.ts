import bakeryHero from "../assets/images/bakery-hero.png";
import butterCroissant from "../assets/images/butter-croissant.png";
import cafeInterior from "../assets/images/cafe-interior.png";
import chocolateChunkCookie from "../assets/images/chocolate-chunk-cookie.png";
import cinnamonBit from "../assets/images/cinnamon-bit.png";
import coffeeMoment from "../assets/images/coffee-moment.png";
import icedVanillaLatte from "../assets/images/iced-vanilla-latte.png";
import pastryCounter from "../assets/images/pastry-counter.png";

export const photos = {
  hero: {
    src: bakeryHero,
    alt: "Fresh pastries and coffee at the BITE bakery",
  },
  croissant: { src: butterCroissant, alt: "Flaky butter croissant" },
  cinnamon: { src: cinnamonBit, alt: "Cinnamon bun with cinnamon sugar" },
  cookie: { src: chocolateChunkCookie, alt: "Chocolate chunk cookie" },
  latte: { src: icedVanillaLatte, alt: "Iced vanilla latte" },
  interior: { src: cafeInterior, alt: "Inside the BITE café" },
  pastry: { src: pastryCounter, alt: "Fresh pastries on the bakery counter" },
  coffee: { src: coffeeMoment, alt: "A coffee break at BITE" },
} as const;

export type PhotoKey = keyof typeof photos;
