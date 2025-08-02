import React from "react";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import hero1 from "../../images/slider/slide-1.jpg";
import hero2 from "../../images/slider/slide-2.jpg";
import hero3 from "../../images/slider/slide-3.jpg";

const Hero = () => {
  return (
    <section className="hero-slider hero-style-1">
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1800}
        parallax={true}
        navigation
      >
        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{ backgroundImage: `url(${hero1})` }}
          >
            <div className="container">
              <div className="slide-title">
                <h2>Innovative Software Solutions</h2>
              </div>
              <div className="slide-text">
                <p>
                  Empowering businesses with custom mobile apps, dashboards,
                  websites, UX design, Amazon A+ content, and campaign-ready
                  videos.
                </p>
              </div>
              <div className="clearfix"></div>
              <div className="slide-btns">
                <Link to="/contact" className="theme-btn">
                  Discover More<span></span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{ backgroundImage: `url(${hero2})` }}
          >
            <div className="container">
              <div className="slide-title">
                <h2>Most populer consulting agency</h2>
              </div>
              <div className="slide-text">
                <p>
                  Raising a heavy fur muff that covered the whole of her lower
                  arm towards the viewer.
                </p>
              </div>
              <div className="clearfix"></div>
              <div className="slide-btns">
                <Link to="/contact" className="theme-btn">
                  Discover More<span></span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide-inner slide-bg-image"
            style={{ backgroundImage: `url(${hero3})` }}
          >
            <div className="container">
              <div className="slide-title">
                <h2>We do exactly what we says</h2>
              </div>
              <div className="slide-text">
                <p>
                  Raising a heavy fur muff that covered the whole of her lower
                  arm towards the viewer.
                </p>
              </div>
              <div className="clearfix"></div>
              <div className="slide-btns">
                <Link to="/contact" className="theme-btn">
                  Discover More<span></span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </section>
  );
};

export default Hero;
