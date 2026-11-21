import { PageHeader } from "../../components/PageHeader/PageHeader";
import { ContactDetails } from "./components/ContactDetails/ContactDetails";
import { ContactAside } from "./components/ContactAside/ContactAside";
import { contactCopy } from "./Contact.content";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-page">
      <PageHeader
        eyebrow={contactCopy.eyebrow}
        title={contactCopy.title}
        lead={contactCopy.lead}
      />

      <div className="contact-page__content container two-column page-content">
        <ContactDetails />
        <ContactAside />
      </div>
    </div>
  );
};
