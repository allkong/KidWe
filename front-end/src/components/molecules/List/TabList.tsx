import React from 'react';
import TabButton from '@/components/atoms/Button/TabButton';

interface TabListProps {
  tabs: {id: number; label: string}[];
  activeTab: number;
}

const TabList: React.FC<TabListProps> = ({tabs, activeTab}) => {
  return (
    <div className="flex justify-evenly">
      {tabs.map(tab => (
        <TabButton
          key={tab.id}
          isActive={tab.id === activeTab}
          label={tab.label}
        />
      ))}
    </div>
  );
};

export default TabList;
