import { ButtonLink } from "../../../../components/ButtonLink/ButtonLink";
import { contactCopy } from "../../Contact.content";
import "./ContactAside.css";

export const ContactAside = () => {
  return (
    <aside
      className="contact-page__aside surface-card"
      aria-labelledby="contact-get-in-touch-title"
    >
      <h2 id="contact-get-in-touch-title" className="subsection-heading">
        {contactCopy.getInTouchTitle}
      </h2>
      <p>{contactCopy.getInTouchBody}</p>
      <div className="contact-page__actions action-row">
        {contactCopy.actions.map((action) => (
          <ButtonLink key={action.to} to={action.to} variant={action.variant}>
            {action.label}
          </ButtonLink>
        ))}
      </div>
    </aside>
  );
};
