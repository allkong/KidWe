import Icon from '@/assets/icons/more-line.svg';

const MoreButton = () => {
  const handleDropdownOpen = () => {};

  return (
    <button onClick={handleDropdownOpen}>
      <img src={Icon} alt="icon" />
    </button>
  );
};

export default MoreButton;
