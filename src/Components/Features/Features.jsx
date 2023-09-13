import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import Card from "./Card.jsx";
import {leftBtn, v1, v2, v3, v4, v5, v6, v7} from "../../assets/index.js";

const Features = () => {
    return (
        <section className={`bg-black relative`}>
            <div className={`block md:hidden`}>
                <Swiper
                    loop="true"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    // slides-per-view="3"
                    // navigation="true"
                    // pagination="true"
                >
                    <SwiperSlide> <Card video={v7}/></SwiperSlide>
                    <SwiperSlide> <Card video={v4}/></SwiperSlide>
                    <SwiperSlide> <Card video={v6}/></SwiperSlide>
                </Swiper>
            </div>
            {/*<Card style={`lg:h-[33%] inline md:hidden`} video={v6} title={`Digital Health`}/>*/}
            <div className={`hidden md:flex relative sm:flex-wrap lg:flex-nowrap lg:gap-1 overflow-hidden`}>
                <div className={`w-full flex flex-col flex-wrap lg:gap-1 `}>
                    <Card style={`lg:h-[10%]`} video={v4} title={`Digital Health`}/>
                    <Card style={`lg:h-[33%]`} video={v6} title={`Digital Health`}/>
                    <Card style={`lg:h-[30%]`} video={v7} title={`Digital Health`} titleStyle={`hidden`}/>
                </div>
                <div className={`w-full flex flex-col flex-wrap lg:gap-1`}>
                    <Card style={`lg:h-[33%]`} video={v1} title={`Digital Health`}/>
                    <Card style={`lg:h-[33%]`} video={v2} title={`Digital Health`}/>
                    <Card style={`lg:h-[7%]`} video={v5} title={`Digital Health`} titleStyle={`hidden`}/>
                </div>
                <div className={`w-full flex flex-col flex-wrap lg:gap-1 `}>
                    <Card style={`lg:h-[28%]`} video={v5} title={`Digital Health`}/>
                    <Card style={`lg:h-[33%]`} video={v4} title={`Digital Health`}/>
                    <Card style={`lg:h-[12%]`} video={v3} title={`Digital Health`} titleStyle={`hidden`}/>
                </div>
            </div>
            {/*<div className={`hidden w-full absolute bottom-0 h-[333px] bg-primary lg:flex items-center justify-end`}>*/}
            {/*    <div className={`flex items-center justify-end space-x-5 py-20 mr-[100px]`}>*/}
            {/*        <img className={`w-[45px] h-[45px] cursor-pointer `} src={leftBtn} alt={`left-button`}/>*/}
            {/*        <img className={`w-[45px] h-[45px] cursor-pointer rotate-180 `} src={leftBtn} alt={`right-button`}/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    );
};

export default Features;
