import {containerHeaderClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import Button from '@/components/atoms/Button/Button';
import MyPageUpdateView from '@/components/organisms/MyPage/MyPageUpdateView';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
// import KidWe from '@/assets/kid-we.svg';

const MyPageUpdate = () => {
  return (
    <div
      className={`${containerHeaderClass} h-screen bg-white flex flex-col px-10`}
    >
      <Header title="정보 변경" buttonType="back" />
      <div className="flex items-center justify-center w-full py-10">
        {/* <img src={KidWe} /> */}
      </div>
      <div className="flex-grow overflow-auto">
        <MyPageUpdateView />
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

export default MyPageUpdate;
