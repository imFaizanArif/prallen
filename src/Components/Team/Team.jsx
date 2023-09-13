import React,{lazy} from 'react';
import {team1, team3} from "../../assets/index.js";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
const TeamBox = lazy(() => import('./TeamBox.jsx'));
const TeamBoxReverse = lazy(() => import('./TeamBoxReverse.jsx'));
const Team = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const variants = {
        visible: {opacity: 1, y: 0},
        hidden: {
            opacity: 0,
            // scale: 0.95,
            // y: 15
        }
    };
    return (
        <section>
            <div
                // initial={{opacity:0}}
                //         animate={{opacity:1}}
                //         transition={{duration:2}}
                className={`container mx-auto p-5 py-28`}>
                <motion.div animate={inView ? "visible" : "hidden"}
                            variants={variants}
                            exit="hidden"
                            transition={{duration: 1, ease: "easeIn"}}
                            ref={ref}
                            className={`mx-12 flex space-x-96`}>
                    <h1 className={`text-[54px]`}>PRALLEN</h1>
                    <p className={`text-2xl`}>
                        Partner with us to design and develop consumer Partner with us to design and develop consumer
                    </p>
                </motion.div>
                <div>
                    <TeamBox img={team1}
                             title={`Services for Big Company Investors`}
                             desc={`Elevate your investments with us. Prallen offers tailored services for big company investors. Benefit from strategic tech insights, innovative design, and advanced software solutions. Together, we'll redefine industries and amplify your returns.`}/>
                    <TeamBoxReverse/>
                    <TeamBox img={team3}
                             title={`Services for Small Business Owners`}
                             desc={`Empower your small business online. Partner with Prallen for web design and software solutions. We make technology work for you, enhancing your brand's visibility and customer engagement. Take your small business to new digital heights.`}/>
                </div>
                {/*<TeamBox style={`flex-row-reverse space-x-40`}/>*/}
                {/*<TeamBox/>*/}
            </div>
        </section>
    );
};

export default Team;
