import React from 'react';

import './home.styles.css'
import AboutSection from './about-section';
import CardSection from './card-section';
import BenefitSection from './fun-section';
import Innovate from './innovate-section';
import Footer from './footer';


const Home = () => {
    return(
        <  >
        
            <CardSection />
            <AboutSection />
            <BenefitSection />
            <Innovate />
            <Footer />
        </>
    )
};

export default Home;