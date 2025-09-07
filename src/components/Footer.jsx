import React from "react";
import "../styles/Footer.css";
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter subscription section */}
      <div className="footer-newsletter">
        <div>
          <h4>Newsletter</h4>
          <p>
            Sign up for our newsletter. Fresh news, the best e-books, and many
            more.
          </p>
        </div>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* Main footer columns */}
       <div className="footer-main">
        {/* Logo/About */}
        <div className="footer-col about">
          <img src="https://cdn.prod.website-files.com/6317f8c46ec157a19839cf33/6317f8c46ec1571c2239cf73_footer-logo.png" alt="Agrobi logo" className="footer-logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Style Guide</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Licence</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#">Lorem ipsum dolor sit amet</a></li>
            <li><a href="#">consequatur quod eum</a></li>
            <li><a href="#">Minima porro totam velit eligendi</a></li>
            <li><a href="#">Ratione Repudiandae Nemo Quibusdam</a></li>
            <li><a href="#">Doloremque repellendus dignissimos</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact us</h4>
          <ul className="contact-info">
            <li>
              <FaEnvelope /> agriinfo@gmail.com
            </li>
            <li>
              <FaPhone /> +(201)-2456-991-223
            </li>
          </ul>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom legal row */}
      <div className="footer-bottom">
        <div className="footer-bottom__links">
          <a href="#">Terms &amp; conditions</a> |{" "}
          <a href="#">Privacy policy</a>
        </div>
        <p className="footer-bottom__copy">
          &copy; 2025 Agrobi Farm. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;