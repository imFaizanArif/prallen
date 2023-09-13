import React from 'react';
import {v4} from "../../assets/index.js";

const Card = (props) => {
    return (
        <div className={`w-full relative ${props.style} overflow-hidden`}>
            <video className={`w-full relative`} preload="auto" width="320" height="240" autoPlay loop muted>
                <source src={props.video} type="video/mp4"/>
            </video>
            {/*<img src={props.video} className={`w-full`}/>*/}
           {/*<p className={`bg-black text-white text-xs font-normal p-1 absolute left-6 bottom-6 ${props.titleStyle}`}>{props.title}</p>*/}
        </div>
    );
};

export default Card;
