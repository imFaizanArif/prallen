import React from 'react';
import {downArrow} from "../../assets/index.js";
import "./styles.css"
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

const ServiceCard = (props) => {
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
        <motion.div animate={inView ? "visible" : "hidden"}
                    variants={variants}
                    exit="hidden"
                    transition={{duration: 0.5, ease: "easeIn"}}
                    ref={ref}
        >
            <div className={`block md:hidden`}>
            <div
                className={`flex space-x-2 justify-between items-center w-full`}>
                <h2 className={`text-[2.10em] md:text-4xl font-semibold ml-[28px]`}>{props.title}</h2>
                <img loading="lazy" className={`w-[17%]`} src={downArrow} alt={`logo`}/>

            </div>
            <div className={`ml-0 md:ml-12 cursor-pointer `}>
                <div className={`flex space-x-6 items-center justify-between`}>
                    <h3 className={`text-3xl text-[#219EBC]`}>{props.no}</h3>
                    <hr className={`w-full h-px my-8 bg-[#219EBC] border-0`}/>
                </div>
                <p className={`text-2xl ml-[28px]`}>{props.desc}</p>

                <img loading="lazy" src={props.img} alt={`logo`} className={``}/>

            </div>
            </div>
            <div className={` md:block hidden ml-0 md:ml-12 group cursor-pointer animate-padding`}>
                <div className={`flex space-x-6 items-center justify-between`}>
                    <h3 className={`text-3xl text-[#219EBC]`}>{props.no}</h3>
                    <hr className={`w-full h-px my-8 bg-[#219EBC] border-0`}/>
                    <img loading="lazy" src={downArrow} alt={`logo`}/>
                </div>
                <div
                    className={`flex space-x-6 my-[32px] items-center relative group-hover:animate-fade-down animate-fade-up w-full`}>
                    <h2 className={`text-5xl w-1/2`}>{props.title}</h2>
                    <img loading="lazy" src={props.img} alt={`logo`}
                         className={`absolute z-10 left-[27%] hidden group-hover:animate-fade-down animate-fade-up group-hover:inline-block`}/>
                    {/*<img src={serviceImg} alt={`logo`} className={`hover:invisible  hover:inline`}/>*/}
                    <p className={`text-2xl ml-24 w-1/2`}>{props.desc}</p>
                </div>
            </div>
        </motion.div>

    );
};

export default ServiceCard;
