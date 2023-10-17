import React from 'react';
import { initFlowbite } from 'flowbite';
import { NavLink } from 'react-router-dom';

function NavigationLinks() {
  const linkClass =
    'block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';

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
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
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
            {/* md:text-indigo-600 */}
            <NavLink
              to={'/home'}
              className={({ isActive }) =>
                isActive ? `md:text-indigo-600 ${linkClass}` : linkClass
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/categories'}
              className={({ isActive }) =>
                isActive ? `md:text-indigo-600 ${linkClass}` : linkClass
              }
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/pricing'}
              className={({ isActive }) =>
                isActive ? `md:text-indigo-600 ${linkClass}` : linkClass
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/login'}
              className='block md:hidden py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
            >
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/register'}
              className='block block md:hidden py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-indigo-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavigationLinks;
