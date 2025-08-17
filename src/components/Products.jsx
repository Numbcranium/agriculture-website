import React from "react";

function Products() {
  return (
    <section id="products" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold text-success mb-4">Our Products</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="/images/vegetables.jpg" className="card-img-top" alt="Vegetables" />
              <div className="card-body">
                <h5 className="card-title">Fresh Vegetables</h5>
                <p className="card-text">Locally grown, pesticide-free, and always fresh.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="/images/fruits.jpg" className="card-img-top" alt="Fruits" />
              <div className="card-body">
                <h5 className="card-title">Organic Fruits</h5>
                <p className="card-text">Delicious seasonal fruits directly from our farm.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="/images/grains.jpg" className="card-img-top" alt="Grains" />
              <div className="card-body">
                <h5 className="card-title">Healthy Grains</h5>
                <p className="card-text">Nutritious grains cultivated with care for your family.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
