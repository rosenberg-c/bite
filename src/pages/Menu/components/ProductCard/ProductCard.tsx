import type { PhotoKey } from "../../../../content/photos";
import type { MenuItem } from "../../data/menu";
import { productCardCopy } from "./ProductCard.content";
import { Photo } from "../../../../components/Photo/Photo";
import "./ProductCard.css";

type ProductCardProps = {
  item: MenuItem;
  photoKey: PhotoKey;
};

export const ProductCard = ({ item, photoKey }: ProductCardProps) => {
  return (
    <article className="product-card">
      <Photo className="product-card__photo" photoKey={photoKey} />
      <div className="product-card__body">
        <div className="product-card__meta">
          <span className="product-card__category">{item.category}</span>
          <span className="product-card__price">
            {item.priceSEK} {productCardCopy.priceSuffix}
          </span>
        </div>
        <h3 className="product-card__name">{item.name}</h3>
        <p className="product-card__description">{item.description}</p>
      </div>
    </article>
  );
};
