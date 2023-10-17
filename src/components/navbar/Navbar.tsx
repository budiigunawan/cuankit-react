import NavigationLinks from './NavigationLinks';
import AuthButton from './AuthButton';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
      <div className='container flex flex-wrap items-center justify-between mx-auto my-2'>
        <Link to={'/home'}>
          <h2 className='text-xl font-bold'>Cuankit</h2>
        </Link>
        <NavigationLinks />
        <AuthButton />
      </div>
    </nav>
  );
}

export default Navbar;
