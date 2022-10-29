
import React from "react";
import { useEffect, useState } from "react";

import './navbar.styles.css'

const NavigationBar = () => {

    const [navbar, setNavbar] = useState(false);
    const [navHeight, setnavHeight] = useState(false)

    const changeBackground = () => {
        window.scrollY >= 66 ? setNavbar("#F1F5F9") : setNavbar(false) 
        window.scrollY >= 66 ? setnavHeight("5rem") : setnavHeight("10rem")     
    }

    useEffect(() =>{
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })
 return(
     
         <div >  
               <nav style={{backgroundColor : navbar, height: navHeight, transition: "all 1s"}} className="hidden lg:flex w-screen font-semibold text-neutral-900">
                    <ul className="relative top-6 left-28">
                        <h1 className="text-3xl text-neutral-900 font-bold">Crown</h1>
                    </ul>
                    <ul className="flex relative left-96 top-6 gap-14 ">
                        <li>Product</li>
                        <li>Support</li>
                        <li>Support</li>
                    </ul>
                    <ul className="flex relative left-2/4 top-6 gap-14">
                        <li>Log in</li>
                        <li>Sign in</li>
                    </ul>
                </nav>
    </div>
     
 )
}

export default NavigationBar;