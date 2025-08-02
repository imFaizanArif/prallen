import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};
const SubmitHandler = (e) => {
  e.preventDefault();
};

const Footer = (props) => {
  return (
    <footer className="site-footer">
      <div className="upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <img src={Logo} alt="" />
                </div>
                <p>We Spread Beauty</p>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Navigation</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/about">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/projects">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/services">
                      Our Services
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      Contact
                    </Link>
                  </li>
                  {/* <li>
                    <Link onClick={ClickHandler} to="/testimonials">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/blog">
                      News
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-12">
              <div className="widget contact-widget service-link-widget">
                <div className="widget-title">
                  <h3>Contact Info</h3>
                </div>
                <ul>
                  <li>Phone: xx-xxxx-xxxxx </li>
                  <li>Email: contactus@prallen.com</li>
                </ul>
              </div>
            </div>
            {/* <div className="col col-lg-3 col-md-6 col-12">
              <div className="widget newsletter-widget">
                <div className="widget-title">
                  <h3>Newsletter</h3>
                </div>
                <p>You will be notified when somthing new will be appear.</p>
                <form onSubmit={SubmitHandler}>
                  <div className="input-1">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address *"
                      required
                    />
                  </div>
                  <div className="submit clearfix">
                    <button type="submit">
                      <i className="ti-email"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="container">
          <div className="row">
            <div className="separator"></div>
            <div className="col col-xs-12">
              <p className="copyright">
                Copyright &copy; 2025 Prallen. All rights reserved.
              </p>
              <div className="social-icons">
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-pinterest"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-vimeo-alt"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
