import { BookIcon, MedalIcon, StackIcon } from '../../assets/icons';

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

type BenefitCardProps = {
  benefit: Benefit;
};

type BenefitIconProps = {
  icon: string;
};

function BenefitIcon({ icon }: BenefitIconProps) {
  if (icon === 'stack') {
    return <StackIcon />;
  } else if (icon === 'medal') {
    return <MedalIcon />;
  } else {
    return <BookIcon />;
  }
}

function BenefitCard({ benefit }: BenefitCardProps) {
  const { icon, title, description } = benefit;

  return (
    <div className='mb-12'>
      <div className='block mb-2'>
        <BenefitIcon icon={icon} />
        <h3 className='inline-block ml-2 text-lg font-semibold'>{title}</h3>
      </div>
      <p className='mt-2 text-lg text-gray-500'>{description}</p>
    </div>
  );
}

export default BenefitCard;
