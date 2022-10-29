import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import pic from '../../assets/john-schnobrich-2FPjlAyMQTA-unsplash.jpg'

const AboutSection = () => {

    const myStyle ={
        backgroundImage : `url(${pic})`,
                height : "86vh",
                
        backgroundSize : 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'

    }
    return(
        <div style={myStyle} className='  text-white'>
        
            <h1 className='text-5xl text-white tracking-tight relative top-52 mx-20 '>See what is possible when you partner with <span className='text-6xl font-semibold text-slate-200'><br className='hidden lg:grid'/>CROWN</span> </h1>
            <a href='https://google.com' className='text-lg top-56 relative left-20'>Learn more <span><FontAwesomeIcon icon={faArrowRight}/></span> </a>
        
        </div>
    )
       
    
}

export default AboutSection;