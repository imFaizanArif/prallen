import React from 'react';
import {brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, leftBtn} from "../assets/index.js";
import {motion, AnimatePresence} from "framer-motion"
import Ticker from "framer-motion-ticker";
import "./Banner.css"

const Banner = () => {
    const brand = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];
    return (
        <section>
            {/*<div className={`flex justify-end space-x-5 py-20 mr-[100px]`}>*/}
            {/*    <img className={`w-[45px] h-[45px] cursor-pointer `} src={leftBtn}/>*/}
            {/*    <img className={`w-[45px] h-[45px] cursor-pointer rotate-180 `} src={leftBtn}/>*/}
            {/*</div>*/}
            <div className={`flex items-center justify-center w-full h-[100px] md:h-52 bg-white`}>
                <Ticker duration={20}>
                    {brand.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center w-[150px] md:w-[200px] h-[40px] xl:h-[80px] m-1 md:m-5 bg-contain bg-no-repeat`}
                            style={{
                                backgroundImage: `url(${item})`,
                                // backgroundRepeat:"no-repeat",
                                // backgroundSize: "contain",
                                // backgroundColor: "black",
                                // margin: '5px',
                                // height: '80px',
                                // width: '200px',
                            }}
                        />
                    ))}
                    {/*<motion.img className={`w-[10%] h-[80px]`} src={brand1} alt={`DP World`}/>*/}
                    {/*<motion.img className={`w-[10%] h-[80px]`} src={brand2} alt={`Tracking`}/>*/}
                    {/*<motion.img className={`w-[10%] h-[80px]`} src={brand3} alt={`Thule`}/>*/}
                    {/*<motion.img className={`w-[10%] h-[80px]`} src={brand4} alt={`Delegia`}/>*/}
                    {/*<motion.img className={`w-[10%] h-[80px]`} src={brand5} alt={`ea`}/>*/}
                    {/*<motion.img className={`w-[10%] h-[80px]`} src={brand6} alt={`ZeitWert`}/>*/}
                    {/*<motion.img className={`w-[10%] h-[80px]`} src={brand7} alt={`MedWorks`}/>*/}
                    {/*<motion.img className={`w-[10%] h-[80px]`} src={brand8} alt={`Auusrety`}/>*/}
                </Ticker>
                {/*<AnimatePresence>*/}
                {/*    <div className={`flex space-x-10 items-center justify-center px-4`}>*/}

                {/*    </div>*/}
                {/*</AnimatePresence>*/}
            </div>

        </section>
    );
};

export default Banner;
