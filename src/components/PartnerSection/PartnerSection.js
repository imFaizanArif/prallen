import React from "react";
import { Link } from 'react-router-dom'
import pimg1 from '../../images/partners/img-1.png'
import pimg2 from '../../images/partners/img-2.png'
import pimg3 from '../../images/partners/img-3.png'
import pimg4 from '../../images/partners/img-4.png'


const PartnerSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="cta-with-partners">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s2">
                            <span>Meet up</span>
                            <h2>Need help with a <br/>Project?</h2>
                        </div>
                        <div className="cta-text">
                            <p>Showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer gregor then turned to look arround the world </p>
                            <Link onClick={ClickHandler} to="/contact" className="theme-btn-s2">Get In Touch</Link>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <div className="partner-grids clearfix">
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={pimg1} alt=""/>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={pimg2} alt=""/>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={pimg3} alt=""/>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={pimg4} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;
