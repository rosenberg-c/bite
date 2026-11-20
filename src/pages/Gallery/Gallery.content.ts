import { photos } from "../../content/photos";

export const galleryCopy = {
  eyebrow: "A little peek",
  title: "Gallery",
  lead: "A look inside the BITE café: warm light, simple surfaces and plenty of small treats.",
  items: [
    {
      title: "Pastry counter",
      description: "Close-up of a fresh pastry.",
      photo: photos.pastry,
    },
    {
      title: "Coffee break",
      description: "A cozy coffee break.",
      photo: photos.coffee,
    },
    {
      title: "Café corner",
      description: "A calm corner of the café.",
      photo: photos.interior,
    },
  ],
} as const;
