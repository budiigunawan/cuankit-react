import NavigationLinks from './NavigationLinks';
import AuthButton from './AuthButton';

function Navbar() {
  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800'>
      <div className='container flex flex-wrap items-center justify-between mx-auto my-2'>
        <h2>Cuankit</h2>
        <NavigationLinks />
        <AuthButton />
      </div>
    </nav>
  );
}

export default Navbar;
