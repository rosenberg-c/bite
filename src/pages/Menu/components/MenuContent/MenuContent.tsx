import { type PhotoData, photos } from "../../../../content/photos";
import { menuItems } from "../../data/menu";
import { menuCopy } from "../../Menu.content";
import { formatCount } from "../../utils/formatCount";
import { ProductCard } from "../ProductCard/ProductCard";
import "./MenuContent.css";

const itemPhotos: Partial<Record<string, PhotoData>> = {
  "butter-croissant": photos.croissant,
  "cinnamon-bit": photos.cinnamon,
  "chocolate-chunk-cookie": photos.cookie,
  "iced-vanilla-latte": photos.latte,
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
                  photo={itemPhotos[item.id] ?? photos.pastry}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};
