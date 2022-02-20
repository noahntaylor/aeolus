import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-outside-heading">
        <h2 className="contact-heading">Want to learn more?</h2>
        <h3 className="contact-heading">Get in touch!</h3>
      </div>
      <form className="contact-section" action="">
        <h2 className="contact-inside-heading">
          Want to learn more? Get in touch!
        </h2>
        <div className="contact-info">
          <div className="contact-row">
            <label htmlFor="name" className="contact-text">
              Your Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="contact-input"
            />
          </div>
          <div className="contact-row">
            <label htmlFor="email" className="contact-text">
              Your Email:
            </label>
            <input
              id="name"
              type="email"
              placeholder="Your Email"
              className="contact-input"
            />
          </div>
        </div>
        <div className="contact-message-row">
          <label htmlFor="message" className="contact-text">
            What would you like to say?
          </label>
          <textarea
            id="name"
            type="text"
            placeholder="Your Message..."
            className="contact-text-area"
          />
        </div>
        <div className="button-row">
          <button className="contact-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
