import React from 'react';

function AuthButton() {
  return (
    <div className='hidden md:block md:order-2'>
      <a
        href='#'
        className='px-8 py-3 mt-2 mr-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-sm md:px-8 hover:shadow'
      >
        Sign In
      </a>
      <a
        href='#'
        className='px-8 py-3 text-base font-medium text-white border border-transparent rounded-full bg-navy hover:bg-navy md:py-2 md:text-sm md:px-8 hover:shadow'
      >
        Sign Up
      </a>
    </div>
  );
}

export default AuthButton;
