import { paths } from "../../../routes";

export const navigation = [
  { to: paths.home, label: "Home" },
  { to: paths.menu, label: "Menu" },
  { to: paths.about, label: "About" },
  { to: paths.gallery, label: "Gallery" },
  { to: paths.contact, label: "Contact" },
] as const;
