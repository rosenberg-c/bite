import ButtonLink from "../../components/ButtonLink/ButtonLink";
import PageHeader from "../../components/PageHeader/PageHeader";
import { contactCopy } from "../../content/site";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <PageHeader eyebrow={contactCopy.eyebrow} title={contactCopy.title} lead={contactCopy.lead} />

      <div className="contact-page__content">
        <section className="contact-page__details" aria-labelledby="contact-details-title">
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

        <aside className="contact-page__aside" aria-labelledby="contact-get-in-touch-title">
          <h2 id="contact-get-in-touch-title">{contactCopy.getInTouchTitle}</h2>
          <p>{contactCopy.getInTouchBody}</p>
          <div className="contact-page__actions">
            {contactCopy.actions.map((action) => (
              <ButtonLink key={action.to} to={action.to} variant={action.variant}>
                {action.label}
              </ButtonLink>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
