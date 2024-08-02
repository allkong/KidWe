import {useNavigate} from 'react-router-dom';
import Icon from '@/assets/icons/arrow-left-line.svg';

const BackButton = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleGoBack}>
      <img src={Icon} alt="icon" />
    </button>
  );
};

export default BackButton;
