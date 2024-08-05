import BackButton from '@/components/atoms/Button/BackButton';
import CloseButton from '@/components/atoms/Button/CloseButton';

interface HeaderProps {
  title: string;
  buttonType: 'back' | 'close';
}

const Header = ({title, buttonType}: HeaderProps) => {
  return (
    <header className="fixed w-full top-0 left-0 right-0 flex items-center justify-between p-3.5 bg-secondary z-20">
      {buttonType === 'back' ? <BackButton /> : <CloseButton />}
      <h1 className="font-semibold">{title}</h1>
      <div className="w-6"></div>
    </header>
  );
};

export default Header;
