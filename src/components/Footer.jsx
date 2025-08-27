import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png"; // Ensure the logo is included

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
         <div className="newsletter">
          <h2>Newsletter</h2>
          <p>Sign up for our newsletter. Fresh news, the best e-books, and many more.</p>
          <div className="input-button_newsletter">
          <input type="text" placeholder="Example Text" />
          <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      <div className="left-news">
        <div className="footer-logo">
          
          <img src={logo} alt="Agrobi Farm Logo" />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis blanditiis ipsam sed suscipit perferendis modi est harum pariatur autem vero? In, voluptatibus vitae de</p>
        </div>
     
      </div>
      <div className="navigation">
        <h3>Navigation</h3>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="services">
        <h3>Services</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Minima porro totam velit eligendi.</p>
        <p>Ratione Repudiandae Nemo Quibusdam.</p>
      </div>
      <div className="contact">
        <h3>Contact us</h3>
        <p>agriinfo@gmail.com</p>
        <p>+(201)-2456-991-223</p>
      </div>
      </div>
   

    </div>

  );
}

export default Footer;
