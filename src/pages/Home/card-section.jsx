import React from 'react';
import pics from '../../assets/atm-card-png-27259.png'
import CustomButton from '../../components/custom-button/custom-button';
import NavigationBar from '../../components/Navbar/navbar';

const CardSection = () => {
    return (
        <div style={{}} className="h-screen bg-gradient-to-r from-cyan-200 via-slate-200 ">
            <div className='fixed z-20'>
        <NavigationBar  />
        </div>
                      
         <div className='lg:flex z-10'>
            <div className=' lg:w-2/5'>
                <h1 className=' text-center lg:text-left mx-7 md:mx-3  lg:mx-0 lg:w-auto text-5xl md:text-4xl lg:text-6xl font-semibold relative top-20 lg:top-48 lg:left-28 text-neutral-800'>
                  Pick a card that suits your lifestyle
                </h1>
                <p className='text-lg relative mx-10 lg:mx-0  top-24   lg:top-52 lg:left-28 tracking-tighter text-neutral-700'>
                    Make a card with just one click, we'll help you find the right card you need
                </p>
                <p className='text-lg font-semibold relative pt-3 lg:pt-0 top-24 left-9 lg:top-56 lg:left-28 tracking-tighter text-neutral-800'>
                    Easy payments and transfers
                </p>
                <p className='text-lg font-semibold relative top-24 left-9 lg:top-56 lg:left-28 tracking-tighter text-neutral-800'>
                    Shop anywhere
                </p>
                <div className='relative top-28 ml-24 lg:ml-0 lg:top-64 lg:left-28'>
                    <CustomButton style={{backgroundColor : 'black'}}> Create now </CustomButton>
                </div>
                
            </div>
             <div className='lg:w-3/5 '>
                <img 
                src={pics} 
                alt='card' 
                className=' h-56 w-9/12 lg:h-72 lg:w-7/12 relative top-32 left-10 lg:top-36 lg:left-52 lg:rotate-12'/>
                 <img 
                src={pics} 
                alt='card' 
                className='hidden lg:grid h-56 w-9/12 lg:h-72 lg:w-7/12 relative bottom-6 left-10 lg:top-1 lg:left-52 -rotate-12'/>
            </div> 
         </div> 
           
        </div>



    )
};

export default CardSection;