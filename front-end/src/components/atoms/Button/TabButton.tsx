interface TabButtonProps {
  isActive: boolean;
  label: string;
  onClick: () => void;
}

const TabButton = ({isActive, label, onClick}: TabButtonProps) => {
  const activeClass = isActive ? 'text-black' : 'text-gray-200';
  return (
    <button className={`${activeClass}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default TabButton;
