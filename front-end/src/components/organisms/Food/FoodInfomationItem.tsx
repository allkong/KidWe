import sun from '@/assets/icons/sun-with-face.svg';
import moon from '@/assets/icons/full-moon-face.svg';
import hotDog from '@/assets/icons/hot-dog.svg';
import Tag from '@/components/atoms/Tag/Tag';

interface FoodInfomationItemProps {
  variant?: 'lunch' | 'snack' | 'dinner';
  menu?: string;
  allergies?: string[];
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function getVariant(variant: string): {
  color: string;
  src: string;
  title: string;
} {
  switch (variant) {
    case 'snack':
      return {color: '#C0E583', src: hotDog, title: '중식'};
    case 'dinner':
      return {color: '#C99FFF', src: moon, title: '간식'};
    default:
      return {color: '#FFC36A', src: sun, title: '중식'};
  }
}

const FoodInfomationItem = ({
  variant = 'lunch',
  menu,
  allergies,
  onClick,
}: FoodInfomationItemProps) => {
  const {color, src, title} = getVariant(variant);
  const colorClass = `border-[${color}] shadow-[${color}]`;
  return (
    <div
      onClick={onClick}
      className={`w-[21rem] ${colorClass} flex items-center justify-between shadow-sm min-h-28 h-fit px-5 py-5 box-border rounded-md border text-gray-300`}
    >
      <div className="flex flex-col items-center justify-center h-full gap-2 w-14">
        <img src={src} />
        <Tag text={title} width="2.5rem" height="1.25rem" bgColor={color} />
      </div>
      <div className="flex flex-col justify-center w-56 h-full">
        <p className="mb-3 text-sm">{menu}</p>
        <div className="flex flex-wrap gap-1">
          {allergies?.map((allergy, idx) => <Tag key={idx} text={allergy} />)}
        </div>
      </div>
    </div>
  );
};

export default FoodInfomationItem;
