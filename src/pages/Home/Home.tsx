import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Photo from "../../components/Photo/Photo";
import { home } from "./Home.content";
import { paths } from "../../routes";
import "./Home.css";

export default function Home() {
  return (
    <>
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

      <section className="home-values" aria-labelledby="home-values-title">
        <div className="home-values__inner">
          <p className="home-values__eyebrow">{home.valuesEyebrow}</p>
          <h2 id="home-values-title">{home.valuesTitle}</h2>
          <div className="home-values__grid">
            {home.values.map((value) => (
              <article className="home-values__card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
