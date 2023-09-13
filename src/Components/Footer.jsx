import React from 'react';
import {Link} from "react-router-dom";
import {logo, logoInvert} from "../assets/index.js";

const Footer = () => {
    return (
        <footer className={`bg-[#219EBC] pt-[90px] md:py-[117px]`}>
            <hr/>
            <div className={`container mx-auto p-5`}>
                <div className={`flex items-center`}>
                    <Link to={`/`} className={``}>
                        <img src={logoInvert} alt={`logo`} className={`w-[75%] w-full object-cover object-center ml-2 md:ml-12`}/>
                    </Link>
                    <nav className={`hidden md:flex md:flex-wrap items-center text-base justify-center md:ml-auto`}>
                        <ul className={`flex text-xs text-white 2xl:text-base xl:text-sm font-title space-x-10`}>
                            <li className={``}><Link to={`/`}>Company</Link></li>
                            <li className={``}><Link to={`/`}>Services</Link></li>
                            <li className={``}><Link to={`/`}>Portfolio</Link></li>
                            <li className={``}><Link to={`/`}>Blog</Link></li>
                            <li className={``}><Link to={`/`}>Careers</Link></li>
                            <li className={``}><Link to={`/`}>Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <hr/>
            <div className={`container mx-auto p-5`}>
                <div className={`flex items-center`}>
                    <p className={`ml-2 md:ml-12 text-white`}>2023 &copy; Prallen. All rights reserved</p>
                    <nav className={`flex flex-wrap items-center text-base justify-start md:ml-auto`}>
                        <ul className={`flex text-xs text-white 2xl:text-base xl:text-sm font-title space-x-10`}>
                            {/*<li className={``}><Link to={`/`}>Linked</Link></li>*/}
                            {/*<li className={``}><Link to={`/`}>Services</Link></li>*/}
                            {/*<li className={``}><Link to={`/`}>Portfolio</Link></li>*/}
                            {/*<li className={``}><Link to={`/`}>Blog</Link></li>*/}
                            {/*<li className={``}><Link to={`/`}>Careers</Link></li>*/}
                            {/*<li className={``}><Link to={`/`}>Contact Us</Link></li>*/}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
