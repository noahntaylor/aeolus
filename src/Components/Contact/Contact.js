import { React, useState } from "react";
import "./Contact.css";

function Contact() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-outside-heading">
        <h2 className="contact-outside-heading-text">Want to learn more?</h2>
        <h3 className="contact-outside-text">Get in touch!</h3>
      </div>
      <form className="contact-section" onSubmit={onSubmit}>
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
          <button className="contact-button" onClick={handleClick}>
            Submit
          </button>
        </div>
        {click ? (
          <div className="contact-submit-message">
            <p>
              Thanks for your message! We will get back to you as soon as we
              can.
            </p>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default Contact;
