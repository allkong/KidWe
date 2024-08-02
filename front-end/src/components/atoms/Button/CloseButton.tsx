import {useNavigate} from 'react-router-dom';
import Icon from '@/assets/icons/close-line.svg';

const CloseButton = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <button onClick={handleGoHome}>
      <img src={Icon} alt="icon" />
    </button>
  );
};

export default CloseButton;
