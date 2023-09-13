import React from 'react';
import TeamBox from "./Team/TeamBox.jsx";
import {about1, about2, about3} from "../assets/index.js";

const About = () => {
    return (
        <section>
            <div className={`container mx-auto p-5 py-28`}>
                <div className={`mx-12 flex space-x-96`}>
                    <h1 className={`text-[54px]`}>PRALLEN</h1>
                    <p className={`text-2xl`}>
                        Partner with us to design and develop consumer Partner with us to design and develop consumer
                    </p>
                </div>
                <img src={about1} alt={`about-img`} className={`w-[10%] mt-[120px] ml-[150px]`}/>
                <div className={`flex items-end text-center mx-12`}>
                    <img src={about2} alt={`about-img`} className={`w-[12%]`}/>
                    <div className={`w-[50%] mx-auto`}>
                        <p className={`text-[18px] text-[#219EBC] tracking-[10.5px]`}>ABOUT PRALLEN</p>
                        <h3 className={`text-[45px]`}>An events and media-driven platform and community that brings
                            together (and celebrates) purpose-driven leaders.</h3>
                        <br/>
                        <br/>
                    </div>
                    <img src={about3} alt={`about-img`} className={`w-[12%]`}/>
                </div>
            </div>
        </section>
    );
};

export default About;
