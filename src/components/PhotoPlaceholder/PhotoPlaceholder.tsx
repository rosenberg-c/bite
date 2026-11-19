import type { PhotoPlaceholderVariant } from "./photoPlaceholderVariants";
import "./PhotoPlaceholder.css";

type PhotoPlaceholderProps = {
  label: string;
  variant?: PhotoPlaceholderVariant;
  className?: string;
};

export default function PhotoPlaceholder({
  label,
  variant = "pastry",
  className,
}: PhotoPlaceholderProps) {
  const classes = ["photo-placeholder", `photo-placeholder--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <figure className={classes}>
      <span className="photo-placeholder__orb photo-placeholder__orb--one" aria-hidden="true" />
      <span className="photo-placeholder__orb photo-placeholder__orb--two" aria-hidden="true" />
      <span className="photo-placeholder__motif" aria-hidden="true">
        <span className="photo-placeholder__motif-inner" />
      </span>
      <figcaption className="photo-placeholder__caption">
        <span className="photo-placeholder__label">{label}</span>
        <span className="photo-placeholder__type">Photo placeholder</span>
      </figcaption>
    </figure>
  );
}
