import React from 'react';
import {team2} from "../../assets/index.js";

const TeamBoxReverse = ({ style}) => {
    return (
        <div className={`mx-24 mt-[170px] mb-[95px] flex items-center space-x-40 ${style}`}>
            <img rel="preload" src={team2} className={`w-[575px] h-[473px] ml-0 ${style}`} alt={`team-img`}/>
            <div className={`space-y-7`}>
                <h1 className={`text-3xl font-semibold`}>Building a Team for Startup </h1>
                <p className={`text-lg`}>Launch your startup with confidence. Prallen provides end-to-end support for co-founders. From captivating design to seamless software, we'll transform your vision into a market-ready reality. Let's turn your startup idea into a success story.</p>
            </div>

        </div>
    );
};

export default TeamBoxReverse;
