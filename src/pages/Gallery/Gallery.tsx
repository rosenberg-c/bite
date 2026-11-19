import PageHeader from "../../components/PageHeader/PageHeader";
import PhotoPlaceholder from "../../components/PhotoPlaceholder/PhotoPlaceholder";
import { galleryCopy } from "../../content/site";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery-page">
      <PageHeader eyebrow={galleryCopy.eyebrow} title={galleryCopy.title} lead={galleryCopy.lead} />

      <div className="gallery-page__content">
        {galleryCopy.items.map((item) => (
          <article className="gallery-page__item" key={item.title}>
            <PhotoPlaceholder label={item.label} variant={item.variant} />
            <div className="gallery-page__item-copy">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
