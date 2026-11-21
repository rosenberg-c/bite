import { contactCopy } from "../../Contact.content";
import "./ContactDetails.css";

export const ContactDetails = () => {
  return (
    <section
      className="contact-page__details surface-card"
      aria-labelledby="contact-details-title"
    >
      <h2 id="contact-details-title">{contactCopy.detailsTitle}</h2>
      <dl className="contact-page__list">
        {contactCopy.details.map((detail) => (
          <div className="contact-page__row" key={detail.label}>
            <dt>{detail.label}</dt>
            <dd>
              <strong>{detail.value}</strong>
              <span>{detail.note}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
