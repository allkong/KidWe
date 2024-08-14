import MoreButton from '@/components/molecules/DropdownButton/MoreButton';
import BracketButton from '@/components/atoms/Button/BracketButton';

interface Option {
  text: string;
  onClick: () => void;
}

interface BanCardItemProps {
  banName: string;
  kidCount: number;
  teacherCount: number;
  cardType: 'basic' | 'detail' | 'arrow';
  options?: Option[];
}

const BanCardItem = ({
  banName,
  kidCount,
  teacherCount,
  cardType,
  options,
}: BanCardItemProps) => {
  const arrowClass = cardType === 'arrow' ? 'rounded-lg' : 'border-b';

  return (
    <div
      className={`flex justify-between items-center py-5 px-8 bg-white ${arrowClass}`}
    >
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold">{banName}</span>
        <div>
          <p>
            교사 <span className="text-primary">{teacherCount}명</span>
          </p>
        </div>
        <div>
          <p>
            원생 <span className="text-primary">{kidCount}명</span>
          </p>
        </div>
      </div>
      {cardType === 'detail' && (
        <MoreButton>
          {options?.map(option => (
            <MoreButton.Option
              key={option.text}
              text={option.text}
              onClick={option.onClick}
            />
          ))}
        </MoreButton>
      )}
      {cardType === 'arrow' && <BracketButton direction="right" />}
    </div>
  );
};

export default BanCardItem;
