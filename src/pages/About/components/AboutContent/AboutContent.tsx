import { ButtonLink } from "../../../../components/ButtonLink/ButtonLink";
import { Photo } from "../../../../components/Photo/Photo";
import { paths } from "../../../../routes";
import { aboutCopy } from "../../About.content";
import "./AboutContent.css";

export const AboutContent = () => {
  return (
    <div className="about-page__content">
      <Photo className="about-page__photo" photoKey="interior" />

      <div className="about-page__story">
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
