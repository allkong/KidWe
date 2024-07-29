import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {Routes, Route} from 'react-router-dom';
import MemoList from '@/pages/kindergarten/MemoList';
import MemoWrite from '@/pages/kindergarten/MemoWrite';
import FoodInfo from '@/pages/kindergarten/FoodInfo';
// import {useHeader} from '@/contexts/header/HeaderContext';

const KindergartenManagement = () => {
  // const {headerTitle} = useHeader();

  return (
    <div className="h-screen">
      <Header title={'메모'} buttonType="back" />
      <div className="h-screen pb-[4.3rem] bg-white pt-[3.3rem]">
        <Routes>
          <Route path="/memo" element={<MemoList />}></Route>
          <Route path="/write" element={<MemoWrite />}></Route>
          <Route path="/food" element={<FoodInfo />}></Route>
        </Routes>
      </div>
      <NavigationBar />
    </div>
  );
};

export default KindergartenManagement;
