import brandsLogo from '../../assets/img/brand-logo.svg';

function BrandList() {
  return (
    <div className='w-full mx-auto mt-20 sm:max-w-2xl'>
      <img
        src={brandsLogo}
        alt='brand logo list'
        className='w-full px-10 md:px-0'
      />
    </div>
  );
}

export default BrandList;
