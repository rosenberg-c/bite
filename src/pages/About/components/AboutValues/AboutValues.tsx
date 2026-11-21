import { aboutCopy } from "../../About.content";
import "./AboutValues.css";

export const AboutValues = () => {
  return (
    <section
      className="about-page__values section-rhythm"
      aria-labelledby="about-values-title"
    >
      <div className="about-page__values-inner container">
        <h2 id="about-values-title" className="section-heading">
          {aboutCopy.valuesTitle}
        </h2>
        <div className="about-page__values-grid three-column-grid">
          {aboutCopy.values.map((value) => (
            <article
              className="about-page__value surface-card"
              key={value.title}
            >
              <h3 className="card-title">{value.title}</h3>
              <p className="card-copy">{value.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
