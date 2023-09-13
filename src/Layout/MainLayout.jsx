import React,{useState,useEffect} from 'react';
import Navbar from "../Components/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import Loader from "../Components/Loader.jsx";

const MainLayout = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading data (e.g., an API call)
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                // Render your content when data is loaded
                <>
                    <Navbar/>
                    <main>
                        <Outlet/>
                    </main>
                    <Footer/>
                </>
            )}

        </>
    );
};

export default MainLayout;
