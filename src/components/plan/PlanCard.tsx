import React from 'react';
import check from '../../assets/img/check.png';

export interface Plan {
  price: number;
  title: string;
  subTitle: string;
  features: string[];
}

type PlanCardProps = {
  plan: Plan;
};

function PlanCard({ plan }: PlanCardProps) {
  const { price, title, subTitle, features } = plan;

  const planPrice = React.useMemo(() => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumSignificantDigits: 2,
    });

    return formatter.format(price);
  }, [price]);

  return (
    <div>
      <div className='p-8 border rounded-3xl'>
        <h1 className='text-5xl font-semibold'>
          {planPrice}
          <span className='text-xl font-light text-gray-500'>/month</span>
        </h1>
        <h2 className='text-lg font-semibold mt-7'>{title}</h2>
        <p className='mb-6 text-gray-500'>{subTitle}</p>
        <ul v-if='plan.features.length' className='mb-6 text-gray-700'>
          {features.map((feature, idx) => (
            <li key={idx} className='mb-3'>
              <img src={check} className='float-left w-6 mr-2' alt='' />
              {feature}
            </li>
          ))}
        </ul>
        <button
          type='button'
          className='inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-md md:px-10 hover:shadow'
        >
          Checkout Now
        </button>
      </div>
    </div>
  );
}

export default PlanCard;
