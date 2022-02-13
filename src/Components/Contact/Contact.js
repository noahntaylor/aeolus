import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact-section">
      <h2 className="contact-heading">Want to learn more? Get in touch.</h2>
      <form action="">
        <label htmlFor="name" className="contact-text">
          Your Name
        </label>
        <br />
        <input id="name" type="text" className="contact-input" />
        <br />
        <label htmlFor="email" className="contact-text">
          Your Email
        </label>
        <br />
        <input id="name" type="text" className="contact-input" />
        <br />
        <label htmlFor="message" className="contact-text">
          What would you like to say?
        </label>
        <br />
        <textarea id="name" className="contact-input" />
        <br />
        <button className="contact-button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
