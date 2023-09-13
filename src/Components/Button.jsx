import React from 'react';
import {tick} from "../assets/index.js";

const Button = (props) => {
    return (
        <button className={`px-4 py-2 rounded-full bg-white flex items-center justify-start font-semibold text-base`}><img src={tick} className={`mr-[10px]`}/>{props.title}</button>
    );
};

export default Button;
