import axios from "axios";
import React from "react";
import Navbar from "./Navbar/navbar";
import { cloneElement, isValidElement, useEffect,useState } from "react";

export default function Layout ({children}) {

    const [isLoggedIn,setLoggedIn] = useState(false)

    useEffect (() => {
        const fetchLoggingStatus = async () =>{
            try{
                const response = await axios.get('/auth/check', { withCredentials: true })
                setLoggedIn(response.data.logged)
                console.log(isLoggedIn)
            } catch (error){
                console.error('Error fetching status: ', error)
            }
        }
        fetchLoggingStatus()
    },[])

    const childrenWithProp = React.Children.map(children, child => {
        if(isValidElement(child)){
            return cloneElement(child, {isLoggedIn})
        }
        return child
    })

    return(
        <>
        <Navbar loggedIn = {isLoggedIn}/>
        <main>{childrenWithProp}</main>
        </>
    )

}