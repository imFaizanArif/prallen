import React from "react";
import abimg from "../../images/about-2.jpg";
import VideoModal from "../ModalVideo/VideoModal";

const About = (props) => {
  return (
    <section className="about-section-s2">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6 order-lg-1 order-2 col-12">
            <div className="img-holder">
              <img src={abimg} alt="" />
              <div className="experience-text">
                25 Years of <span>Experience</span>
              </div>
              <VideoModal />
            </div>
          </div>
          <div className="col col-lg-6 order-lg-2 order-1 col-12">
            <div className="section-title-s2">
              <span>We are consulting agency!</span>
              <h2>
                We’re Passionate About Building Digital Products That Work
              </h2>
            </div>
            <div className="about-content">
              <p>
                Prallen is a software consulting firm helping startups and
                businesses transform their ideas into intuitive digital
                experiences. From UX strategy to mobile app engineering and
                campaign-ready visuals, we’re your end-to-end design and
                development partner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
