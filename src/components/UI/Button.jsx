import React from 'react';

const Button = ({children}) => {
    return (
        <button className="px-6 py-3 bg-green border-solid border-2 border-green rounded-[45px] text-white tex-base font-semibold ease-in-out duration-300 hover:shadow-lg raise active:shadow-lg">
        {children}
      </button>
    );
};

export default Button;