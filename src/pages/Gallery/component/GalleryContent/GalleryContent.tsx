import { Photo } from "../../../../components/Photo/Photo";
import type { PhotoData } from "../../../../content/photos";
import "./GalleryContent.css";

type Items = {
  title: string;
  description: string;
  photo: PhotoData;
};

interface Props {
  items: readonly Items[];
}
export const GalleryContent = ({ items }: Props) => {
  return (
    <div className="gallery-page__content container page-content three-column-grid">
      {items.map((item) => (
        <article className="gallery-page__item" key={item.title}>
          <Photo photo={item.photo} />
          <div className="gallery-page__item-copy">
            <h2 className="card-title">{item.title}</h2>
            <p className="card-copy">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
