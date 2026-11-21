import { ButtonLink } from "../../../../components/ButtonLink/ButtonLink";
import { Photo } from "../../../../components/Photo/Photo";
import { photos } from "../../../../content/photos";
import { paths } from "../../../../routes";
import { aboutCopy } from "../../About.content";
import "./AboutContent.css";

export const AboutContent = () => {
  return (
    <div className="about-page__content container two-column">
      <Photo className="about-page__photo" photo={photos.interior} />

      <div className="about-page__story body-copy">
        {aboutCopy.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ButtonLink to={paths.menu} variant="quiet">
          {aboutCopy.menuCta}
        </ButtonLink>
      </div>
    </div>
  );
};
