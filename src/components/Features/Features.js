import React from "react";

const Features = (props) => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="feature-grids clearfix">
              <div className="grid">
                <div className="icon">
                  <i className="fi flaticon-sheriff"></i>
                </div>
                <h3>Web & Dashboard Applications</h3>
                <p>
                  Scalable, intuitive websites and dashboards that simplify your
                  operations
                </p>
              </div>
              <div className="grid">
                <div className="icon">
                  <i className="fi flaticon-diamond"></i>
                </div>
                <h3>Mobile Applications</h3>
                <p>
                  {" "}
                  Build sleek, high-performance apps for iOS & Android tailored
                  to your business goals
                </p>
              </div>
              <div className="grid">
                <div className="icon">
                  <i className="fi flaticon-idea"></i>
                </div>
                <h3>UI/UX Design</h3>
                <p>
                  Delivering human-centered design that converts from wireframe
                  to final prototype
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
