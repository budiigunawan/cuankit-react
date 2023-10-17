import PageLayout from '../../components/layout/PageLayout';
import PricingBenefits from '../../components/pricing/PricingBenefits';
import PricingHeader from '../../components/pricing/PricingHeader';
import PricingPlans from '../../components/pricing/PricingPlans';

function Pricing() {
  return (
    <PageLayout>
      <div className='relative overflow-hidden bg-white'>
        <div className='mx-auto'>
          <div className='flex flex-col items-center w-full sm:justify-center sm:pt-0'>
            <PricingHeader />
            <PricingPlans />
            <PricingBenefits />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Pricing;
