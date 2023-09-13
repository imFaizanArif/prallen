import React,{lazy} from 'react';
// import ServiceCard from "./ServiceCard.jsx";
import {service1, service2, service3, service4, service5, tick} from "../../assets/index.js";
import Button from "../Button.jsx";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
// import {AnimationOnScroll} from 'react-animation-on-scroll';
const ServiceCard = lazy(() => import('./ServiceCard.jsx'));
const Services = () => {
    const container={
        hidden:{
            opacity:0,
            // x:"1000vw",
        },
        show:{
            opacity: 1,
            // x:0,
            transition:{
                staggerChildren:0.5,
                // type:"spring",
                // mass:0.4,// higher mass means move slower
                // damping:8,// damping means strength of opposing force means higher number is less ocillation
                when:"beforeChildren"
            }
        }
    }
    const item={
        hidden:{
            opacity:0
        },
        show:{
            opacity:1
        }
    }
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
        // <AnimationOnScroll animateIn="animate__fadeInUp">
        <section className={`bg-primary`}>
            <div className={`container mx-auto p-5`}>
                <div className={`ml-0 md:ml-12 py-28 flex flex-wrap`}>
                    <motion.div animate={inView ? "visible" : "hidden"}
                                variants={variants}
                                exit="hidden"
                                transition={{duration: 1, ease: "easeIn"}}
                                ref={ref}
                        className={`w-full md:w-1/2 mr-0 md:mr-[150px]`}>
                        <h1 className={`text-6xl font-semibold leading-snug`}>SERVICES</h1>
                        <p className={`text-3xl mt-4`}>Our services cover every facet of digital and brand identity, fusing innovation with expertise for masterful projects.</p>
                    </motion.div>
                    <motion.div animate={inView ? "visible" : "hidden"}
                                variants={variants}
                                exit="hidden"
                                transition={{duration: 2, ease: "easeIn"}}
                                ref={ref}
                    >
                        <h3 className={`text-3xl font-semibold leading-snug mt-[24px] md:mt-0 mb-[24px]`}>Perfect For</h3>
                        <motion.div variants={container}
                                    animate={inView ? "show" : "hidden"}
                                    exit="hidden"
                                    transition={{duration: 2, ease: "easeIn"}}
                                    ref={ref}
                                    className={`grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-3 md:gap-y-9`}>
                            <motion.span variants={item}><Button title={`CREATIVE STARTUPS`}/></motion.span>
                            <motion.span variants={item}><Button title={`DIGITAL ENTREPRENEURS`}/></motion.span>
                            <motion.span variants={item}><Button title={`BUSINESS INNOVATORS`}/></motion.span>
                        </motion.div>
                    </motion.div>
                </div>
                <div className={`pb-28`}>
                    <ServiceCard img={service1} no={`1`} title={`PRODUCT DESIGN`}
                                 desc={`Our product design blends form, function, and innovation, catering to real-world needs while captivating your audience.`}/>
                    <ServiceCard img={service2} no={`2`} title={`WEB DEVELOPMENT`}
                                 desc={`Merging functionality and aesthetics, we craft captivating web solutions for seamless experiences across devices.`}/>
                    <ServiceCard img={service3} no={`3`} title={`UI/UX DESIGN`}
                                 desc={`Through our UI/UX services create engaging, intuitive interfaces for unforgettable digital journeys that resonate with your audience.`}/>
                    <ServiceCard img={service4} no={`4`} title={`BRANDING`}
                                 desc={`Beyond a logo, your brand's identity is a waiting story. Our experts define and express its essence, crafting impactful identities that linger.`}/>
                    <ServiceCard img={service5} no={`5`} title={`DESIGN SYSTEM`}
                                 desc={`Embrace design systems that unify your brand experience across touch-points, ensuring visual consistency and streamlined workflows.`}/>
                </div>
            </div>
        </section>
        // </AnimationOnScroll>
    );
};

export default Services;
