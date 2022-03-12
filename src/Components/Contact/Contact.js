import { React, useState } from "react";
import "./Contact.css";

function Contact() {
  const learnMoreText = "Want to learn more?";
  const getInTouchText = "Get in touch!";

  const [submit, setSubmit] = useState(false);
  const handleSubmit = () => {
    setSubmit(!submit);
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-outside-heading">
        <h2 className="contact-outside-heading-text">{learnMoreText}</h2>
        <h3 className="contact-outside-text">{getInTouchText}</h3>
      </div>
      <ContactForm submit={submit} onChangeSubmit={handleSubmit} />
    </div>
  );
}

function ContactForm(props) {
  const contactHeading = "Want to learn more? Get in touch!";
  const nameLabel = "Your Name:";
  const namePlaceholder = "Your Name";
  const emailLabel = "Your Email:";
  const emailPlaceholder = "Your Email";
  const messageLabel = "What would you like to say?";
  const messagePlaceholder = "Your Message...";
  const submitHeader = "Thanks for your message!";
  const submitText = "We will get back to you as soon as we can.";
  const submitButtonLabel = "Submit";

  const onSubmit = (e) => {
    e.preventDefault();
  };

  if (props.submit) {
    return (
      <div className="contact-section contact-submit-message">
        <h2 className="contact-message-heading">{submitHeader}</h2>
        <p className="contact-text">{submitText}</p>
      </div>
    );
  } else {
    return (
      <form className="contact-section" onSubmit={onSubmit}>
        <h2 className="contact-inside-heading">{contactHeading}</h2>
        <div className="contact-info">
          <div className="contact-row">
            <label htmlFor="name" className="contact-text">
              {nameLabel}
            </label>
            <input
              id="name"
              type="text"
              placeholder={namePlaceholder}
              className="contact-input"
            />
          </div>
          <div className="contact-row">
            <label htmlFor="email" className="contact-text">
              {emailLabel}
            </label>
            <input
              id="name"
              type="email"
              placeholder={emailPlaceholder}
              className="contact-input"
            />
          </div>
        </div>
        <div className="contact-message-row">
          <label htmlFor="message" className="contact-text">
            {messageLabel}
          </label>
          <textarea
            id="name"
            type="text"
            placeholder={messagePlaceholder}
            className="contact-text-area"
          />
        </div>
        <div className="button-row">
          <button className="contact-button" onClick={props.onChangeSubmit}>
            {submitButtonLabel}
          </button>
        </div>
      </form>
    );
  }
}

export default Contact;
