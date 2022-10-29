import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGooglePlay} from '@fortawesome/fontawesome-free-brands';
import {faApple} from '@fortawesome/fontawesome-free-brands'

import React from 'react';
import CustomButton from '../../components/custom-button/custom-button';


const Innovate = () =>{
    return(
        <div className='h-96  bg-cyan-300 flex' style={{}}>
        <div className='' style={{}}>
            <h1 className='font-bold text-2xl lg:text-5xl mx-9 mt-20 text-white'>Get digital banking at your<span className='hidden'><br /></span> fingertips</h1>
            <p className='mt-5 mx-9 text-xs lg:text-lg text-white font-semibold'>Get our mobile app on any device you use on the App Store or Google Playstore</p>
            <div className='lg:flex gap-x-4 mx-9 my-4'>
                <div>
                    <CustomButton style={{backgroundColor :'black'}} >
                    <div className='flex gap-x-2'>
                         <div className='ml-5 mt-3'>
                            <FontAwesomeIcon icon={faGooglePlay} size = 'xl' />
                        </div>
                        <div >
                            <p className='relative top-2 text-gray-300' style={{fontSize : '0.5rem'}}>GET IT ON</p>
                            <h1 className='text-lg mb-2'>Google play</h1>
                        </div>
                    </div>
                       
                    </CustomButton>
                </div>
                <div className='mt-4 lg:mt-0'>
                    <CustomButton style={{backgroundColor :'black'}}> 
                 <div className='flex gap-x-2'>
                         <div className='ml-5 mt-3'>
                            <FontAwesomeIcon icon={faApple} size = 'xl' />
                        </div>
                        <div >
                            <p className=' relative top-2 text-gray-300' style={{fontSize : '0.5rem'}}>GET IT ON THE</p>
                            <h1 className='text-lg mb-2'>App store</h1>
                        </div>
                    </div>
                    </CustomButton>
                </div>
               
                
            </div>
        </div>
            
        <div className='' style={{}}>
            <img src={'https://grey.co/images/mobile%20app%20-%20shot.png'} alt='phone' className='h-72 mt-24 lg:ml-18 overflow-hidden ' />
        </div>
        </div>
    )
};

export default Innovate;