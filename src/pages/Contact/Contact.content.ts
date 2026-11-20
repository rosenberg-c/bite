import { paths } from "../../routes";

export const contactCopy = {
  eyebrow: "Say hello",
  title: "Visit BITE",
  lead: "BITE is a small bakery and café from Malmö, Sweden, with warm pastries, sweet treats and coffee for everyday moments.",
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
    { to: paths.menu, label: "Explore the Menu", variant: "primary" },
    { to: paths.gallery, label: "Browse the Gallery", variant: "quiet" },
    { to: paths.about, label: "Read the Story", variant: "quiet" },
  ],
} as const;
