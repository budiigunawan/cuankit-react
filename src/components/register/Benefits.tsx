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

function Benefits() {
  return (
    <div className='mx-auto md:mx-0'>
      {benefitList.map((benefit, idx) => (
        <BenefitCard key={idx} benefit={benefit} />
      ))}
    </div>
  );
}

export default Benefits;
