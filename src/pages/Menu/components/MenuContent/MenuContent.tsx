import type { PhotoKey } from "../../../../content/photos";
import { menuItems } from "../../data/menu";
import { menuCopy } from "../../Menu.content";
import { formatCount } from "../../utils/formatCount";
import { ProductCard } from "../ProductCard/ProductCard";
import "./MenuContent.css";

const itemPhotoKeys: Partial<Record<string, PhotoKey>> = {
  "butter-croissant": "croissant",
  "cinnamon-bit": "cinnamon",
  "chocolate-chunk-cookie": "cookie",
  "iced-vanilla-latte": "latte",
};

const categories = [...new Set(menuItems.map((item) => item.category))];

export const MenuContent = () => {
  return (
    <div className="menu-page__content">
      {categories.map((category) => {
        const items = menuItems.filter((item) => item.category === category);

        return (
          <section className="menu-page__section" key={category}>
            <div className="menu-page__section-heading">
              <h2>{category}</h2>
              <span>{formatCount(items.length, menuCopy.count)}</span>
            </div>
            <div className="menu-page__grid">
              {items.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  photoKey={itemPhotoKeys[item.id] ?? "pastry"}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};
