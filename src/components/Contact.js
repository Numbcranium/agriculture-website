import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold text-success mb-4">Contact Us</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-success px-5">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
