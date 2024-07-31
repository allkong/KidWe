import React from 'react';
import Button from '@/components/atoms/Button/Button';

interface KindergartenItemProps {
  name: string;
  address: string;
  onClick: () => void;
}

const KindergartenItem: React.FC<KindergartenItemProps> = ({
  name,
  address,
  onClick,
}: KindergartenItemProps) => {
  return (
    <div className="border-b p-4 mb-4 flex justify-between items-center">
      <div className="space-y-2 flex flex-col">
        <h2 className="text-lg text-primary">{name}</h2>
        <p className="text-sm">{address}</p>
      </div>
      <Button label="선택" size="small" onClick={onClick} />
    </div>
  );
};

export default KindergartenItem;
