import { PageHeader } from "../../components/PageHeader/PageHeader";
import { contactCopy } from "./Contact.content";
import "./Contact.css";
import { ContactDetails } from "./components/ContactDetails/ContactDetails";
import { ContactAside } from "./components/ContactAside/ContactAside";

export const Contact = () => {
  return (
    <div className="contact-page">
      <PageHeader
        eyebrow={contactCopy.eyebrow}
        title={contactCopy.title}
        lead={contactCopy.lead}
      />

      <div className="contact-page__content">
        <ContactDetails />
        <ContactAside />
      </div>
    </div>
  );
};
