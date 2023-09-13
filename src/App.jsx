import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./Pages/Home.jsx";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/company",
                    // element: <Home/>,
                },
                {
                    path: "/services",
                    // element: <Home/>,
                },
                {
                    path: "/contact-us",
                    // element: <Home/>,
                },
                {
                    path: "/blog",
                    // element: <Home/>,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default App;
