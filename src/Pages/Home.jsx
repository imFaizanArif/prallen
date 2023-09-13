import React,{lazy} from 'react';
import Hero from "../Components/Hero.jsx";
import Features from "../Components/Features/Features.jsx";
import Banner from "../Components/Banner.jsx";
import Services from "../Components/Services/Services.jsx";

// const Services = lazy(() => import("../Components/Services/Services.jsx"));
const Team = lazy(() => import("../Components/Team/Team.jsx"));
const About = lazy(() => import("../Components/About.jsx"));
const Serve = lazy(() => import("../Components/Serve/Serve.jsx"));
// const WorkProcess = lazy(() => import("../Components/Work/WorkProcess.jsx"));
const ContactUs = lazy(() => import("../Components/ContactUs.jsx"));
const Home = () => {
    return (
        <>
            <Hero/>
            <Features/>
            <Banner/>
            <Services/>
            {/*<Team/>*/}
            {/*<WorkProcess/>*/}
            {/*<About/>*/}
            <Serve/>
            <ContactUs/>
        </>
    );
};

export default Home;
