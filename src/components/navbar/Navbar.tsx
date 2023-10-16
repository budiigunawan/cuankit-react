import React from 'react';

function Navbar() {
  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
      <div className='container flex flex-wrap items-center justify-between mx-auto my-2'>
        <h2>Cuankit</h2>
        <div
          id='navbar-default'
          className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
        >
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-regular'>
            <li>
              <a
                className='block py-2 pl-3 pr-4 text-white bg-indigo-600 rounded md:bg-transparent md:text-indigo-600 md:p-0 dark:text-white'
                href='#'
              >
                Home
              </a>
            </li>
            <li>
              <a
                className='block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                href='#'
              >
                Categories
              </a>
            </li>
            <li>
              <a
                className='block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                href='#'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className='block md:hidden py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                href='#'
              >
                Sign In
              </a>
            </li>
            <li>
              <a
                className='block block md:hidden py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                href='#'
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
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
