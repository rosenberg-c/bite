import { ButtonLink } from "../../../../components/ButtonLink/ButtonLink";
import { Photo } from "../../../../components/Photo/Photo";
import { photos } from "../../../../content/photos";
import { home } from "../../Home.content";
import { paths } from "../../../../routes";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero__inner container two-column">
        <div className="home-hero__copy">
          <p className="eyebrow">{home.eyebrow}</p>
          <h1 id="home-title" className="home-hero__title">
            {home.titleLines.flatMap((line, i) =>
              i === 0 ? [line] : [<br key={i} />, line],
            )}
          </h1>
          <p className="home-hero__lead lead-copy">{home.lead}</p>
          <div className="home-hero__actions action-row">
            <ButtonLink to={paths.menu}>{home.primaryCta}</ButtonLink>
            <ButtonLink to={paths.about} variant="quiet">
              {home.secondaryCta}
            </ButtonLink>
          </div>
        </div>
        <Photo className="home-hero__photo" photo={photos.hero} eager />
      </div>
    </section>
  );
};
