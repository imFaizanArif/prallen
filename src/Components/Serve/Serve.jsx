import React, {lazy} from 'react';
import {serve1, serve2, serve3, serve4} from "../../assets/index.js";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

const IndustryBox = lazy(() => import('./IndustryBox.jsx'));

const Serve = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    const variants = {
        visible: {opacity: 1, scale: 1, y: 0},
        hidden: {
            opacity: 0,
            // scale: 0.65,
            // y: 20
        }
    };
    return (
        <section className={`bg-primary`}>
            <div className={`container mx-auto p-5`}>
                <motion.div animate={inView ? "visible" : "hidden"}
                            variants={variants}
                            exit="hidden"
                            transition={{duration: 0.5, ease: "easeIn"}}
                            ref={ref}
                            className={`ml-0 md:ml-12 py-28`}>
                    <h1 className={`text-6xl leading-snug`}>INDUSTRY WE SERVE</h1>
                    <p className={`text-3xl mt-4`}>Partner with us to design and develop consumer Partner with<br
                        className="hidden lg:inline-block"/> us to design and develop consumer Partner with us to design<br
                        className="hidden lg:inline-block"/> and develop consumer</p>
                </motion.div>
                <div className={`flex flex-wrap justify-center items-center space-y-9 md:space-y-0 space-x-0 md:space-x-6`}>
                    <IndustryBox img={serve1} title={`Barnes & Nobel`}
                                 desc={`Template based automated workflow simplifies digital marketing.`}/>
                    <IndustryBox img={serve2} title={`SAP`}
                                 desc={`Marketing workflow system streamlines global marketing operation`}/>
                    <IndustryBox img={serve3} title={`HipLink`}
                                 desc={`Secure, wireless alert management system used by Fortune 500 companies, governments’ healthcare providers and emergency services.`}/>
                    <IndustryBox img={serve4} title={`Colgate`}
                                 desc={`A mobile app for Colgate Palmolive that helps their sales reps perform in-store activities, conduct surveys & compliance audits directly on their smartphones.`}/>
                </div>
            </div>
        </section>
    );
};

export default Serve;
