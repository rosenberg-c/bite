import { ButtonLink } from "../../../../components/ButtonLink/ButtonLink";
import { home } from "../../Home.content";
import { paths } from "../../../../routes";
import "./Story.css";

export const Story = () => {
  return (
    <section
      className="home-story section-rhythm"
      aria-labelledby="home-story-title"
    >
      <div className="home-story__inner container two-column">
        <div className="home-story__heading">
          <p className="eyebrow">{home.storyEyebrow}</p>
          <h2 id="home-story-title" className="section-heading">
            {home.storyTitle}
          </h2>
        </div>
        <div className="home-story__body body-copy">
          {home.storyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="home-story__closing">{home.closing}</p>
          <ButtonLink to={paths.about} variant="quiet">
            {home.aboutCta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
