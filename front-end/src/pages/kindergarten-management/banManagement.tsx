import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {containerNavigatorClass} from '@/styles/styles';
import Button from '@/components/atoms/Button/Button';
import BanCardItem from '@/components/molecules/Item/BanCardItem';
const BanManagement = () => {
  const handleAddBan = () => {};
  return (
    <div
      className={`${containerNavigatorClass} flex flex-col h-screen w-screen max-w-screen`}
    >
      <Header title="반 관리" buttonType="back" />
      <div>
        <BanCardItem
          cardType="detail"
          options={[
            {
              text: '반 수정',
              onClick: () => {
                console.log('반 수정');
              },
            },
            {
              text: '반 삭제',
              onClick: () => {
                console.log('반 삭제');
                console.log('이건 반에 원생, 교사가 없을 때만 표시됨');
              },
            },
          ]}
          banName="치타반"
          kidCount={123}
          teacherCount={12}
        />
        <p>이제 이 반 관련을 props로 받게하기! + api </p>
      </div>
      <div
        className={
          'w-full flex justify-center items-center absolute bottom-32 left-1/2 transform -translate-x-1/2'
        }
      >
        <Button label="회원 가입" onClick={handleAddBan} />
      </div>
      <NavigationBar />
    </div>
  );
};

export default BanManagement;
