import React from 'react';
import {rightArrow} from "../../assets/index.js";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

const IndustryBox = ({img, title, desc}) => {
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
            <img loading="lazy" src={img} alt={`box-1`} className={`object-center object-cover`}/>
            <div className={`flex mt-[26px]`}>
                <div className={`w-[285px]`}>
                    <h1 className={`text-[22px] mb-[7px]`}>{title}</h1>
                    <p className={`truncate text-[16px] text-[#747474]`}>{desc}</p>
                </div>
                <img loading="lazy" src={rightArrow} className={`w-[15%] md:w-full cursor-pointer`} alt={`right-arrow`}/>
            </div>
        </motion.div>
    );
};

export default IndustryBox;
