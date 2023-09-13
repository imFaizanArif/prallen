import React from 'react';
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    const navigateToContact = () => {
        // console.log("kjsdjdsjk")
        navigate("/");
        setTimeout(() => {
            const contactSection = document.getElementById("contactus");
            if (contactSection) {
                contactSection.scrollIntoView({behavior: "smooth"});
            }
        }, 100)
    };
    return (
        <section className={`bg-primary`}>
            <div className={`container mx-auto p-5 md:pl-20 py-[24px] md:py-28 2xl:py-36 xl:py-32 `}>
                <div>
                    <motion.h1
                        // animate={{x:100}}
                        // transition={{delay:1}}
                        // animate={{fontSize: "65px", color: "green", x: 0, y: 0, scale: 1.1, opacity: 0.5}}
                        //        initial={{y: 0, x: "-100vw"}}
                        // transition={{delay:1, type:"spring",stiffness:100,duration:0,repeat:2, repeatType:"reverse",repeatDelay:1}}
                        // whileHover={{
                        //     scale: 1.5,
                        //     originX: 0,
                        //     textShadow: "revert-layer",
                        //     boxShadow: "revert"
                        // }}
                        // originX animate respective this origin
                        // Variants: Hamre code ko clean karte hain hum ek object bana kar inn attributes mai call kar dete hain.
                        // Allow to propagate vairant changes through DOM resulting cleaner code...... If we use initial and animate attribute for parent then children automatically takes that values and apply animation of itself.
                        // Allow to timming relationship bewtween Parent and Children motions using transition orchestration properties
                        className={`text-3xl md:text-6xl font-semibold leading-tight md:leading-snug`}>TRANSFORMING VISIONS
                        INTO EXPERIENCES THROUGH IMPECCABLE DESIGN
                    </motion.h1>
                    <p className={`text-base md:text-3xl my-4`}>Designing and developing consumer-grade solutions
                        <br className="hidden lg:inline-block"/>for your organizational success.
                    </p>
                    <button onClick={navigateToContact}
                            className={`flex md:hidden items-center mx-auto py-3 xl:py-3.5 2xl:py-4 px-4 2xl:px-6 text-xs 2xl:text-base xl:text-sm bg-black text-white rounded-lg`}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
