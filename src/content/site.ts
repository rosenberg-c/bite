export const brand = {
  name: "BITS Bakery & Café",
  wordmark: "bits.",
  descriptor: "Bakery & Café",
  tagline: "Little bites. Big happiness.",
  location: "Malmö, Sweden",
} as const;

export const navigation = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const home = {
  eyebrow: "Bakery & Café",
  titleLines: ["Little bites.", "Big happiness."],
  lead: "Life is better with something freshly baked. Discover warm pastries, sweet treats and coffee made for your everyday moments.",
  primaryCta: "Explore Menu",
  secondaryCta: "Meet BITS",
  storyEyebrow: "Welcome to BITS.",
  storyTitle: "A little bakery built around everyday joy.",
  storyParagraphs: [
    "At BITS, we believe the little things make the biggest difference. From warm cinnamon buns to perfectly brewed coffee, everything we make is crafted to brighten your day.",
    "Whether you're stopping by for your morning coffee or treating yourself to something sweet, there's always something delicious waiting for you.",
  ],
  closing: "Fresh from our oven. Straight to your heart.",
  aboutCta: "Read our story",
  valuesEyebrow: "What we're about",
  valuesTitle: "Small moments, made better.",
  values: [
    {
      title: "Fresh favorites",
      body: "Flaky pastries, soft cookies and familiar treats with a playful BITS twist.",
    },
    {
      title: "Everyday pauses",
      body: "A cozy coffee break that feels special, even on an ordinary Tuesday.",
    },
    {
      title: "Room for everyone",
      body: "Students, friends and families are all welcome in our café.",
    },
  ],
} as const;

export const menuCopy = {
  eyebrow: "Made with love",
  title: "Our favorites",
  lead: "A small menu of the treats and drinks we love. Prices are shown in Swedish kronor.",
  note: "A little something for every craving, from flaky pastries to coffee worth slowing down for.",
} as const;

export const aboutCopy = {
  eyebrow: "Our story",
  title: "Welcome to BITS.",
  lead: "BITS is a small bakery and café with a simple idea: make ordinary days a little sweeter.",
  paragraphs: [
    "The idea is simple: make ordinary days a little sweeter. Our counter is filled with cinnamon buns, buttery croissants, cookies and coffee that is ready when you need a pause.",
    "Our café is a warm, Scandinavian-inspired space where students can study, friends can catch up and families can share something good. Small bites can make a big difference.",
  ],
  valuesTitle: "The BITS way",
  values: [
    {
      title: "Craft with care",
      body: "Simple ingredients, thoughtful details and a little pride in every bite.",
    },
    {
      title: "Warm and welcoming",
      body: "A friendly place, built for quick visits and long conversations alike.",
    },
    {
      title: "Joy in the small things",
      body: "The first warm bite, the right coffee and a reason to slow down for a moment.",
    },
  ],
  menuCta: "See the menu",
} as const;

export const galleryCopy = {
  eyebrow: "A little peek",
  title: "Gallery",
  lead: "A look inside the BITS café: warm light, simple surfaces and plenty of small treats.",
  items: [
    {
      title: "Pastry counter",
      description: "Close-up of a fresh pastry.",
      photoKey: "pastry",
    },
    {
      title: "Coffee break",
      description: "A cozy coffee break.",
      photoKey: "coffee",
    },
    {
      title: "Café corner",
      description: "A calm corner of the café.",
      photoKey: "interior",
    },
  ],
} as const;

export const contactCopy = {
  eyebrow: "Say hello",
  title: "Visit BITS",
  lead: "BITS is a small bakery and café from Malmö, Sweden, with warm pastries, sweet treats and coffee for everyday moments.",
  detailsTitle: "Visit us",
  details: [
    {
      label: "Location",
      value: "Malmö, Sweden",
      note: "Bakery and café with small bites and coffee.",
    },
  ],
  getInTouchTitle: "Get in touch",
  getInTouchBody:
    "There is no contact form on this site yet. While the bakery details are being finalized, explore the menu, browse the gallery and read the story.",
  actions: [
    { to: "/menu", label: "Explore the Menu", variant: "primary" },
    { to: "/gallery", label: "Browse the Gallery", variant: "quiet" },
    { to: "/about", label: "Read the Story", variant: "quiet" },
  ],
} as const;

export const footerCopy = {
  notice: "Small bites, big happiness.",
  explore: "Explore",
} as const;

export const notFoundCopy = {
  eyebrow: "404 · Off the menu",
  title: "We couldn't find that page.",
  body: "The link may be outdated, or the page may have moved. Head back home to explore the bakery.",
  cta: "Back to Home",
} as const;
