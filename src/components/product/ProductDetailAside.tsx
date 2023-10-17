import React from 'react';
import { Link } from 'react-router-dom';
import check from '../../assets/img/check.png';
import figma from '../../assets/img/figma.png';
import sketch from '../../assets/img/sketch.png';

type ProductDetailAsideProps = {
  features: string;
  isFigma: number;
  isSketch: number;
  file: string;
};

function ProductDetailAside({
  features,
  isFigma,
  isSketch,
}: //   file,
ProductDetailAsideProps) {
  const featureList = React.useMemo(() => {
    let result: string[] = [];
    if (features) {
      result = features.split(',');
    }

    return result;
  }, [features]);

  return (
    <aside className='w-full px-4 sm:w-1/3 md:w-1/3'>
      <div className='sticky top-0 w-full pt-4 md:mt-24'>
        <div className='p-6 border rounded-2xl'>
          {isFigma && (
            <div className='mb-4'>
              <div className='flex mb-2'>
                <div>
                  <img src={figma} alt='' className='w-16' />
                </div>
                <div className='block mt-1 ml-4'>
                  <h3 className='font-semibold text-md'>Figma</h3>
                  <p className='text-gray-400 text-md'>Project Included</p>
                </div>
              </div>
            </div>
          )}
          {isSketch && (
            <div className='mb-4'>
              <div className='flex mb-2'>
                <div>
                  <img src={sketch} alt='' className='w-16' />
                </div>
                <div className='block mt-1 ml-4'>
                  <h3 className='font-semibold text-md'>Sketch</h3>
                  <p className='text-gray-400 text-md'>Project Included</p>
                </div>
              </div>
            </div>
          )}
          <div>
            <h1 className='mt-5 mb-3 font-semibold text-md'>Great Features</h1>
            <ul className='mb-6 text-gray-500'>
              {featureList.map((feature, idx) => (
                <li className='mb-2' key={idx}>
                  {feature}
                  <img src={check} className='float-right w-5 mt-1' alt='' />
                </li>
              ))}
            </ul>
          </div>
          {/* user?.subscription?.length */}
          {/* <a
              href={file}
              className='inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow'
            >
              Download Now
            </a> */}
          <Link
            to='/pricing'
            className='inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow'
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default ProductDetailAside;
