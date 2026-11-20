import type { PhotoData } from "../../content/photos";
import "./Photo.css";

type PhotoProps = {
  photo: PhotoData;
  className?: string;
  eager?: boolean;
};

export const Photo = ({ photo, className, eager = false }: PhotoProps) => {
  const classes = ["photo", className].filter(Boolean).join(" ");

  return (
    <figure className={classes}>
      <img
        src={photo.src}
        alt={photo.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </figure>
  );
};
