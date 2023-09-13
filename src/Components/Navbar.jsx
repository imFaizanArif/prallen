import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {logo} from "../assets/index.js";
import {RxHamburgerMenu} from "react-icons/rx";
const Navbar = () => {
    const navigate = useNavigate();
    const navigateToContact = () => {
        // console.log("kjsdjdsjk")
        navigate("/");
        setTimeout(() => {
            const contactSection = document.getElementById("contactus");
            if (contactSection) {
                contactSection.scrollIntoView({behavior: "smooth"});
            }
        }, 100)
    };

    return (
        <header className={`w-full bg-primary`}>
            <div className={`container mx-auto flex p-5 items-center`}>
                <Link to={`/`} className={``}>
                    <img src={logo} alt={`logo`}
                         className={`w-[75%] md:w-full object-cover object-center ml-2 md:ml-12`}/>
                </Link>
                <nav className={`hidden md:flex md:flex-wrap items-center text-base justify-center md:mx-auto`}>
                    <ul className={`flex text-xs 2xl:text-base xl:text-sm font-semibold space-x-10`}>
                        <li className={``}><Link to={`/`}>Company</Link></li>
                        <li className={``}><Link to={`/`}>Services</Link></li>
                        <li className={``}><Link to={`/`}>Portfolio</Link></li>
                        <li className={``}><Link to={`/`}>Blog</Link></li>
                        <li className={``}><Link to={`/`}>Careers</Link></li>
                        {/*<li className={``}><Link to={`/`}>AGTECH</Link></li>*/}
                        {/*<li className={``}><Link to={`/`}>DIGITAL CONSULTING</Link></li>*/}
                        {/*<li className={``}><Link to={`/`}>COMPANY</Link></li>*/}

                    </ul>
                </nav>
                <button onClick={navigateToContact}
                        className={`hidden md:inline-flex items-center py-2.5 xl:py-3.5 2xl:py-4 px-4 2xl:px-6 text-xs 2xl:text-base xl:text-sm bg-black text-white rounded-lg mr-12`}
                >
                    Contact Us
                </button>
                <div className={`ml-auto md:hidden`}> <RxHamburgerMenu/> </div>
            </div>
        </header>
    );
};

export default Navbar;
