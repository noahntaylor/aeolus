import { React, useState } from "react";

import { ContactData } from "../Data";
import "./Contact.css";

function ContactForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (name.length === 0) {
      alert("Name is required.");
    } else if (email.length === 0) {
      alert("Email is required.");
    } else if (message.length === 0) {
      alert("Message is required.");
    } else {
      props.onChangeSubmit();

      let details = {
        name: name,
        email: email,
        message: message,
      };

      let response = await fetch("/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });

      let result = await response.json();
      console.log(result.status);
    }
  };

  if (props.submit) {
    return (
      <div className="contact-section contact-submit-message">
        <h2 className="contact-message-heading">{ContactData.submitHeader}</h2>
        <p className="contact-text">{ContactData.submitText}</p>
      </div>
    );
  } else {
    return (
      <form className="contact-section" onSubmit={onSubmit}>
        <h2 className="contact-inside-heading">{ContactData.contactHeading}</h2>
        <div className="contact-info">
          <div className="contact-row">
            <label htmlFor="name" className="contact-text">
              {ContactData.nameLabel}
            </label>
            <input
              id="name"
              type="text"
              placeholder={ContactData.namePlaceholder}
              className="contact-input"
              value={name}
              onChange={onNameChange}
            />
          </div>
          <div className="contact-row">
            <label htmlFor="email" className="contact-text">
              {ContactData.emailLabel}
            </label>
            <input
              id="email"
              type="email"
              placeholder={ContactData.emailPlaceholder}
              className="contact-input"
              value={email}
              onChange={onEmailChange}
            />
          </div>
        </div>
        <div className="contact-message-row">
          <label htmlFor="message" className="contact-text">
            {ContactData.messageLabel}
          </label>
          <textarea
            id="message"
            type="text"
            placeholder={ContactData.messagePlaceholder}
            className="contact-text-area"
            value={message}
            onChange={onMessageChange}
          />
        </div>
        <div className="button-row">
          <button className="contact-button" type="button" onClick={onSubmit}>
            {ContactData.submitButtonLabel}
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
