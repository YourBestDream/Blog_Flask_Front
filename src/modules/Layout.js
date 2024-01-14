import React from "react";
import Navbar from "./Navbar/navbar";
import { useLocation } from "react-router-dom";

export default function Layout ({children}) {
    const location = useLocation()
    const hideNavbarOn = ['/login','/signup']

    const shouldShowNavbar = !hideNavbarOn.includes(location.pathname) 

    return(
        <>
        {shouldShowNavbar && <Navbar />}
        <main>{children}</main>
        </>
    )
}