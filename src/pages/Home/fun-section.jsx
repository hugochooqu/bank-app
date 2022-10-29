import React from "react";
import pic from "../../assets/happy-people-holding-hands-in-office.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";


const BenefitSection = () => {
    return(
        <div style={{height : "87vh"}} className="lg:flex gap-0">
            
                <div style={{ height :"87vh"}}>
                    <img src={pic} alt="happy" className="h-full"/>
                    <div className="relative bottom-full grid  md:hidden">
                    <span className="text-3xl relative top-72 mx-9 text-slate-100 font-semibold">Eat, play, shop and pay with crown</span>
                    <a href="www.google.com" className="relative top-80 mx-9  font-semibold cursor-pointer">Explore now <span><FontAwesomeIcon icon={faArrowAltCircleRight}  /></span></a>
                    </div>
                </div>
                <div className="hidden lg:grid" style={{backgroundColor : "#F1F5f9", width : "52vw"}} >
                    <h1 className="text-3xl relative top-56 mx-9  font-semibold">
                        Eat, play, shop and pay with crown
                    </h1>
                    <a href="www.google.com" className="relative mx-9 font-semibold cursor-pointer">Explore now <span><FontAwesomeIcon icon={faArrowAltCircleRight}  /></span></a>
                </div>
            
        </div>
    )
};

export default BenefitSection;