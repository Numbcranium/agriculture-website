import React from "react";
import "../styles/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaBuilding } from "react-icons/fa";

function Contact() {
  return (

    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-subheading">Hello, it's a lot of pain.</p>
          <h1 className="contact-heading">Get in touch</h1>
          <p className="contact-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
          </p>
          <div className="contact-info">
            <div className="contact-info-item">
              <FaPhoneAlt className="contact-icon" />
              <span>+(201)-2456-991-223</span>
            </div>
            <div className="contact-info-item">
              <FaEnvelope className="contact-icon" />
              <span>agriinfo@gmail.com</span>
            </div>
            <div className="contact-info-item">
              <FaBuilding className="contact-icon" />
              <span>IRA 4950/3, California, United States of America - 127580</span>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <input type="text" placeholder="Name" name="name" required />
            <input type="email" placeholder="Email" name="email" required />
            <input type="tel" placeholder="Phone" name="phone" />
            <textarea placeholder="Message" name="message" rows="4" required></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </section>
  
  );
}

export default Contact;
