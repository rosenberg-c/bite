import { home } from "../../Home.content";
import "./Values.css";

export const Values = () => {
  return (
    <section className="home-values" aria-labelledby="home-values-title">
      <div className="home-values__inner container">
        <p className="eyebrow">{home.valuesEyebrow}</p>
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
  );
};
