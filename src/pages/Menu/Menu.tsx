import PageHeader from "../../components/PageHeader/PageHeader";
import ProductCard from "../../components/ProductCard/ProductCard";
import type { PhotoKey } from "../../content/photos";
import { menuCopy } from "./Menu.content";
import { menuItems } from "../../data/menu";
import "./Menu.css";

const itemPhotoKeys: Partial<Record<string, PhotoKey>> = {
  "butter-croissant": "croissant",
  "cinnamon-bit": "cinnamon",
  "chocolate-chunk-cookie": "cookie",
  "iced-vanilla-latte": "latte",
};

const categories = [...new Set(menuItems.map((item) => item.category))];

export default function Menu() {
  return (
    <div className="menu-page">
      <PageHeader
        eyebrow={menuCopy.eyebrow}
        title={menuCopy.title}
        lead={menuCopy.lead}
      >
        <p className="menu-page__note">{menuCopy.note}</p>
      </PageHeader>

      <div className="menu-page__content">
        {categories.map((category) => {
          const items = menuItems.filter((item) => item.category === category);

          return (
            <section className="menu-page__section" key={category}>
              <div className="menu-page__section-heading">
                <h2>{category}</h2>
                <span>
                  {items.length}{" "}
                  {items.length === 1
                    ? menuCopy.count.item
                    : menuCopy.count.items}
                </span>
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
    </div>
  );
}
