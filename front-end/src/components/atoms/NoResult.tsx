import React from 'react';
import GhostIcon from '@/assets/icons/ghost-fill.svg?react';

interface NoResultProps {
  text: string;
}

const NoResult: React.FC<NoResultProps> = ({text}) => {
  return (
    <div className="flex flex-col items-center space-y-2 text-gray-200">
      <GhostIcon width="47" height="47" />
      <p>{text}</p>
    </div>
  );
};

export default NoResult;
