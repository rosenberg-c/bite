import { ButtonLink } from "../../../../components/ButtonLink/ButtonLink";
import { Photo } from "../../../../components/Photo/Photo";
import { home } from "../../Home.content";
import { paths } from "../../../../routes";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero__inner">
        <div className="home-hero__copy">
          <p className="home-hero__eyebrow">{home.eyebrow}</p>
          <h1 id="home-title" className="home-hero__title">
            {home.titleLines.flatMap((line, i) =>
              i === 0 ? [line] : [<br key={i} />, line],
            )}
          </h1>
          <p className="home-hero__lead">{home.lead}</p>
          <div className="home-hero__actions">
            <ButtonLink to={paths.menu}>{home.primaryCta}</ButtonLink>
            <ButtonLink to={paths.about} variant="quiet">
              {home.secondaryCta}
            </ButtonLink>
          </div>
        </div>
        <Photo className="home-hero__photo" photoKey="hero" eager />
      </div>
    </section>
  );
};
