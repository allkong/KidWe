import {useNavigate} from 'react-router-dom';
import BackButton from '@/components/atoms/Button/BackButton';
import CloseButton from '@/components/atoms/Button/CloseButton';

interface HeaderProps {
  title: string;
  buttonType: 'back' | 'close';
}

const Header = ({title, buttonType}: HeaderProps) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <header className="fixed w-full top-0 left-0 right-0 flex items-center justify-between p-3.5 bg-secondary z-10">
      {buttonType === 'back' ? (
        <BackButton />
      ) : (
        <CloseButton onClick={handleGoHome} />
      )}
      <h1 className="font-semibold">{title}</h1>
      <div className="w-6"></div>
    </header>
  );
};

export default Header;
