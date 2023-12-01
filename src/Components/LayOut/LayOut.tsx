import React from "react";
import { Outlet } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import ArrowUp from "../HomePageComponents/ArrowUp";

const LayOut: React.FC = () => {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
            <ArrowUp />
        </>
    )
}

export default LayOut