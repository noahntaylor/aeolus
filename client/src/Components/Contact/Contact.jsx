import { React, useState } from "react";

import ContactForm from "./ContactForm";
import { ContactData } from "../Data";
import "./Contact.css";

function Contact() {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    setSubmit(!submit);
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-outside-heading">
        <h2 className="contact-outside-heading-text">
          {ContactData.learnMoreText}
        </h2>
        <h3 className="contact-outside-text">{ContactData.getInTouchText}</h3>
      </div>
      <ContactForm submit={submit} onChangeSubmit={handleSubmit} />
    </div>
  );
}

export default Contact;
