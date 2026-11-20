import { ButtonLink } from "../../../../components/ButtonLink/ButtonLink";
import { home } from "../../Home.content";
import { paths } from "../../../../routes";
import "./Story.css";

export const Story = () => {
  return (
    <section className="home-story" aria-labelledby="home-story-title">
      <div className="home-story__inner">
        <div className="home-story__heading">
          <p className="home-story__eyebrow">{home.storyEyebrow}</p>
          <h2 id="home-story-title">{home.storyTitle}</h2>
        </div>
        <div className="home-story__body">
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
