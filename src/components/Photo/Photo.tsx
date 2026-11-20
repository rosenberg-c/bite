import { type PhotoKey, photos } from "../../content/photos";
import "./Photo.css";

type PhotoProps = {
  photoKey: PhotoKey;
  className?: string;
  eager?: boolean;
};

export const Photo = ({ photoKey, className, eager = false }: PhotoProps) => {
  const photo = photos[photoKey];
  const classes = ["photo", `photo--${photoKey}`, className]
    .filter(Boolean)
    .join(" ");

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
