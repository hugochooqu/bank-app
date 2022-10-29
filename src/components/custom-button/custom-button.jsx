import React from 'react';

const CustomButton = ({ children, ...otherProps}) => {
    return(
        <button className=' text-neutral-100  h-12 w-48  '
         {...otherProps} >
            {children}
        </button>
    )
};

export default CustomButton; 