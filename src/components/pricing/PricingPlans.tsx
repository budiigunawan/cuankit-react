import PlanCard from '../plan/PlanCard';

export interface Plan {
  price: number;
  title: string;
  subTitle: string;
  features: string[];
}

const planList: Plan[] = [
  {
    price: 2000,
    title: 'Basic Plan',
    subTitle: 'Suitable for new team',
    features: [
      'Customizable layers',
      'Official documentation',
      'SVG icons',
      'SVG illustrations',
      'Pre-built design screen',
    ],
  },
  {
    price: 9000,
    title: 'Gold Plan',
    subTitle: 'Suitable for big company',
    features: [
      'Customizable layers',
      'Official documentation',
      'SVG icons',
      'SVG illustrations',
      'Pre-built design screen',
      'Coded template',
      'Support 24/7',
      'Private designer group',
      'Unlock cloning app',
    ],
  },
];

function PricingPlans() {
  return (
    <div className='w-full p-5 mx-auto mb-10 md:max-w-4xl'>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
        {planList.map((plan, idx) => (
          <PlanCard key={idx} plan={plan} />
        ))}
      </div>
    </div>
  );
}

export default PricingPlans;
