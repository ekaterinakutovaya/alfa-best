import React from 'react';

const Popup = ({children}) => {
    return (
        <div className='w-screen h-screen fixed top-0 left-0 z-50 overflow-hidden bg-[rgba(0,0,0,0.9)] px-[25px] flex justify-center items-center'>
            {children}
        </div>
    );
};

export default Popup;