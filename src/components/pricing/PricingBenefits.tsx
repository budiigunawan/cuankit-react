import BenefitCard from '../benefit/BenefitCard';

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefitList: Benefit[] = [
  {
    icon: 'stack',
    title: 'Customizable',
    description:
      'Accelerate your work with our millions of ready-to-use design projects.',
  },
  {
    icon: 'medal',
    title: '500 Fortune',
    description:
      'Accelerate your work with our millions of ready-to-use design projects.',
  },
  {
    icon: 'book',
    title: 'Documentation',
    description:
      'Accelerate your work with our millions of ready-to-use design projects.',
  },
];

function PricingBenefits() {
  return (
    <div className='w-full p-5 mx-auto mb-10 md:max-w-7xl'>
      <div className='grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 md:mx-0'>
        {benefitList.map((benefit, idx) => (
          <BenefitCard key={idx} benefit={benefit} />
        ))}
      </div>
    </div>
  );
}

export default PricingBenefits;
