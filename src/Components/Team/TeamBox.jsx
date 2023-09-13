import React from 'react';

const TeamBox = ({style,title,desc,img }) => {
    return (
        <div className={`mx-24 mt-[170px] mb-[95px] flex items-center space-x-40 ${style}`}>
            <div className={`space-y-7`}>
                <h1 className={`text-3xl font-semibold`}>{title}</h1>
                <p className={`text-lg`}>{desc}</p>
            </div>
                <img rel="preload" src={img} className={`w-[575px] h-[473px] ml-0 ${style}`} alt={`team-img`}/>
        </div>
    );
};

export default TeamBox;
