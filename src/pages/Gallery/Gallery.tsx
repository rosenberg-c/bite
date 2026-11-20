import { PageHeader } from "../../components/PageHeader/PageHeader";
import { GalleryContent } from "./component/GalleryContent/GalleryContent";
import { galleryCopy } from "./Gallery.content";

export const Gallery = () => {
  return (
    <div>
      <PageHeader
        eyebrow={galleryCopy.eyebrow}
        title={galleryCopy.title}
        lead={galleryCopy.lead}
      />
      <GalleryContent items={galleryCopy.items} />
    </div>
  );
};
