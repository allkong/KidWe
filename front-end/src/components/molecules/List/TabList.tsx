import TabButton from '@/components/atoms/Button/TabButton';

interface TabListProps {
  tabs: {id: number; label: string}[];
  activeTab: number;
  onClickTab: (id: number) => void;
}

const TabList = ({tabs, activeTab, onClickTab}: TabListProps) => {
  return (
    <div className="flex justify-around">
      {tabs.map(tab => (
        <TabButton
          key={tab.id}
          isActive={tab.id === activeTab}
          label={tab.label}
          onClick={() => onClickTab(tab.id)}
        />
      ))}
    </div>
  );
};

export default TabList;
