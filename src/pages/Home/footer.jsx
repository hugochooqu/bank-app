import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {  faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import React from 'react';

const Footer = () => {
    return(
        <div style={{height : '100vh'}}>
            <div style={{height : '14vh'}} className='bg-neutral-600 text-white text-xl'>
                <h1 className='pt-10 pl-28'>
                    <a href='#home'>Home <FontAwesomeIcon icon={faArrowRight}/></a>
                </h1>
            </div>
            <div style={{height : '86vh'}} className='flex bg-neutral-800'>
                <div className='w-1/2'>
                    <h1 className='text-white pt-20 mr-72 ml-20 text-2xl font-semibold '>Need help?<span><br />We're always here when you need us</span> </h1>
                    <ul className='text-gray-400 mt-9 ml-20 grid gap-y-6'>
                        <li><FontAwesomeIcon icon={faLocationDot} /> Get Support</li>
                        <li><FontAwesomeIcon icon={faCreditCard}/> Report a lost or stolen card</li>
                        <li><FontAwesomeIcon icon={faLocationDot} /> Find ATM</li>
                        <li><FontAwesomeIcon icon={faComment}/> FAQS</li>
                 </ul>
                </div>
                <div className='flex gap-x-48'>
                    <div className='mt-32'>
                        <h1 className='text-xl font-semibold text-gray-400'>Our Company</h1>
                        <ul className='grid gap-y-3 mt-5 text-white'> 
                            <li>Who we are</li>
                            <li>Careers</li>
                            <li>Newsroom</li>
                            <li>Investor Relations</li>
                            <li>Binding Corporate Rules</li>
                        </ul>
                    </div>
                    <div>
                    <div className='mt-32'>
                          <h1 className='text-xl font-semibold text-gray-400'>Products</h1>
                        <ul className='grid gap-y-3 mt-5 text-white'> 
                            <li>Foreign Accounts</li>
                            <li>Currency Exchange</li>
                            <li>Money Transfer</li>  
                        </ul>
                    </div>
                  
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;