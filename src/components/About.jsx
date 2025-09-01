import React from "react";
import "../styles/About.css"; 

function About() {
  return (
   <>
   <div className="AboutUs-container">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src="/images/tractor.jpg" alt="Farm" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold text-success">About Us</h2>
          <p>
            We are dedicated to promoting sustainable farming practices and providing fresh,
            organic produce to our community. Our mission is to bridge the gap between farmers
            and consumers.
          </p>
        </div>
      </div>
    </div>
   </div>
   </>
  );
}

export default About;
