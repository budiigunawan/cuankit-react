import { Link } from 'react-router-dom';
import HeroImage from '../../assets/img/hero-image.png';

function Hero() {
  return (
    <div className='relative overflow-hidden bg-white'>
      <div className='mx-auto max-w-7xl'>
        <div className='z-10 px-5 pb-8 bg-white xl:pl-20 lg:pl-16 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
          <main className='mx-auto mt-10 max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-36'>
            <div className='sm:text-center lg:text-left'>
              <h1 className='text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-5xl'>
                <span className='block lg:mb-2'>Design Better &</span>
                <span className='block'>Faster Than Before.</span>
              </h1>
              <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                Accelerate your work with our millions
                <span className='block lg:mb-1'></span> of read-to-use design
                projects.
              </p>
              <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                <div className='rounded-full'>
                  <Link
                    to={'/home'}
                    className='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow'
                  >
                    Browse Now
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <img
          className='w-full lg:w-3/4 lg:mt-8'
          src={HeroImage}
          alt='main-products'
        />
      </div>
    </div>
  );
}

export default Hero;
