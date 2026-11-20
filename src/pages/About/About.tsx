import ButtonLink from "../../components/ButtonLink/ButtonLink";
import PageHeader from "../../components/PageHeader/PageHeader";
import Photo from "../../components/Photo/Photo";
import { aboutCopy } from "./About.content";
import { paths } from "../../routes";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <PageHeader
        eyebrow={aboutCopy.eyebrow}
        title={aboutCopy.title}
        lead={aboutCopy.lead}
      />

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

      <section
        className="about-page__values"
        aria-labelledby="about-values-title"
      >
        <div className="about-page__values-inner">
          <h2 id="about-values-title">{aboutCopy.valuesTitle}</h2>
          <div className="about-page__values-grid">
            {aboutCopy.values.map((value) => (
              <article className="about-page__value" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
