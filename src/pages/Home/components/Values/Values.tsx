import { home } from "../../Home.content";

export const Values = () => {
  return (
    <section className="section-rhythm" aria-labelledby="home-values-title">
      <div className="container">
        <p className="eyebrow">{home.valuesEyebrow}</p>
        <h2 id="home-values-title" className="section-heading">
          {home.valuesTitle}
        </h2>
        <div className="three-column-grid">
          {home.values.map((value) => (
            <article className="surface-card" key={value.title}>
              <h3 className="card-title">{value.title}</h3>
              <p className="card-copy">{value.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
