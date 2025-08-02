import React from "react";

const Testimonial = (prop) => {
  return (
    <section className={`testimonials-section section-padding ${prop.tClass}`}>
      <h2 className="hidden">Testimonials</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-xl-8 col-lg-10">
            <div className="testimonials-area">
              <p>
                Prallen helped us scale faster with powerful design and custom
                dashboards. They truly understand product thinking.
              </p>
              <span className="quoter">A Happy Client</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
