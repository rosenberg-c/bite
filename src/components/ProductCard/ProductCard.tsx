import type { MenuItem } from "../../data/menu";
import PhotoPlaceholder from "../PhotoPlaceholder/PhotoPlaceholder";
import { type PhotoPlaceholderVariant } from "../PhotoPlaceholder/photoPlaceholderVariants";
import "./ProductCard.css";

type ProductCardProps = {
  item: MenuItem;
  variant: PhotoPlaceholderVariant;
};

export default function ProductCard({ item, variant }: ProductCardProps) {
  return (
    <article className="product-card">
      <PhotoPlaceholder className="product-card__photo" label={item.name} variant={variant} />
      <div className="product-card__body">
        <div className="product-card__meta">
          <span className="product-card__category">{item.category}</span>
          <span className="product-card__price">{item.priceSEK} SEK</span>
        </div>
        <h3 className="product-card__name">{item.name}</h3>
        <p className="product-card__description">{item.description}</p>
      </div>
    </article>
  );
}
