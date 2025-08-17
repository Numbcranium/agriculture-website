import React from "react";

function Hero() {
  return (
    <section id="home" className="text-center text-white d-flex align-items-center justify-content-center"
      style={{ height: "90vh", background: "url('/images/farm.jpg') no-repeat center center/cover" }}>
      <div className="bg-dark bg-opacity-50 p-5 rounded">
        <h1 className="display-3 fw-bold">Welcome to AgriFarm</h1>
        <p className="lead">Sustainable Agriculture for a Better Future</p>
        <a href="#products" className="btn btn-lg btn-success">Explore Our Products</a>
      </div>
    </section>
  );
}

export default Hero;
