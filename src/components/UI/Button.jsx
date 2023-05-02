import React from 'react';

const Button = ({children}) => {
    return (
        <button className='px-6 py-3 bg-green rounded-[45px] text-white tex-base font-semibold'>
            {children}
        </button>
    );
};

export default Button;