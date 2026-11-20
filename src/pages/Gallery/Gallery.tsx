import PageHeader from "../../components/PageHeader/PageHeader";
import Photo from "../../components/Photo/Photo";
import { galleryCopy } from "./Gallery.content";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery-page">
      <PageHeader
        eyebrow={galleryCopy.eyebrow}
        title={galleryCopy.title}
        lead={galleryCopy.lead}
      />

      <div className="gallery-page__content">
        {galleryCopy.items.map((item) => (
          <article className="gallery-page__item" key={item.title}>
            <Photo photoKey={item.photoKey} />
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
