import React from 'react';
import NavigationLinks from './NavigationLinks';

function Navbar() {
  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
      <div className='container flex flex-wrap items-center justify-between mx-auto my-2'>
        <h2>Cuankit</h2>
        <NavigationLinks />
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
      </div>
    </nav>
  );
}

export default Navbar;
