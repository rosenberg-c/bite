import menuJson from "./menu.json";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  priceSEK: number;
  category: string;
};

export const menuItems = menuJson satisfies MenuItem[];
