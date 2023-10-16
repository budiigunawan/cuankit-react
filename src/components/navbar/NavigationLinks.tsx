import React from 'react';
import { initFlowbite } from 'flowbite';
import { Link } from 'react-router-dom';

function NavigationLinks() {
  React.useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <>
      <button
        data-collapse-toggle='navbar-default'
        type='button'
        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        aria-controls='navbar-default'
        aria-expanded='false'
      >
        <span className='sr-only'>Open main menu</span>
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 17 14'
        >
          <path
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M1 1h15M1 7h15M1 13h15'
          />
        </svg>
      </button>
      <div
        id='navbar-default'
        className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
      >
        <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-regular'>
          <li>
            <Link
              to={'/home'}
              className='block py-2 pl-3 pr-4 text-white bg-indigo-600 rounded md:bg-transparent md:text-indigo-600 md:p-0 dark:text-white'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={'/home'}
              className='block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to={'/home'}
              className='block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to={'/home'}
              className='block md:hidden py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              to={'/home'}
              className='block block md:hidden py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavigationLinks;
