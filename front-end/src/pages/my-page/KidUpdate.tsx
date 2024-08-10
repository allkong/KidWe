import Header from '@/components/organisms/Navigation/Header';
import {containerHeaderClass} from '@/styles/styles';
import Button from '@/components/atoms/Button/Button';
import KidUpdateView from '@/components/organisms/MyPage/KidUpdateView';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
// import KidWe from '@/assets/kid-we.svg';

const KidUpdate = () => {
  return (
    <div
      className={`${containerHeaderClass} max-h-screen h-screen bg-white flex flex-col px-10`}
    >
      <Header title="정보 변경" buttonType="back" />
      <div className="flex-grow">
        <KidUpdateView />
      </div>
      <div className="box-border w-full px-3 py-5 h-fit">
        <Button
          label="변경"
          size="large"
          variant="positive"
          onClick={() => {}}
        />
      </div>
      <NavigationBar />
    </div>
  );
};

export default KidUpdate;
