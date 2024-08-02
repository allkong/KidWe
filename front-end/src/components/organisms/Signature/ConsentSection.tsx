import DashedButton from '@/components/atoms/Button/DashedButton';
import signatureIcon from '@/assets/icons/signature-fill.svg?react';

interface ConsentSection {
  text: string;
  date: string;
  parentName: string;
}

const ConsentSection = ({text, date, parentName}: ConsentSection) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="flex flex-col items-center space-y-1">
        <p className="text-gray-150">{text}</p>
        <p className="font-medium text-black">
          {date} {parentName}
        </p>
      </div>
      <DashedButton label="서명하기" Icon={signatureIcon} variant="positive" />
    </div>
  );
};

export default ConsentSection;
