import { aboutCopy } from "../../About.content";
import "./AboutValues.css";

export const AboutValues = () => {
  return (
    <section
      className="about-page__values"
      aria-labelledby="about-values-title"
    >
      <div className="about-page__values-inner container">
        <h2 id="about-values-title">{aboutCopy.valuesTitle}</h2>
        <div className="about-page__values-grid three-column-grid">
          {aboutCopy.values.map((value) => (
            <article className="about-page__value" key={value.title}>
              <h3>{value.title}</h3>
              <p className="card-copy">{value.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
