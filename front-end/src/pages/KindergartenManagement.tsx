import {Routes, Route} from 'react-router-dom';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import MemoList from '@/pages/kindergarten/MemoList';
import MemoWrite from '@/pages/kindergarten/MemoWrite';
import FoodInfo from '@/pages/kindergarten/FoodInfo';
import FoodInfoWrite from '@/pages/kindergarten/FoodInfoWrite';
import KindergartenSchedule from '@/pages/kindergarten/KindergartenSchedule';
import {containerHeaderClass} from '@/styles/styles';

const KindergartenManagement = () => {
  return (
    <div className="h-screen">
      <Header title={'메모'} buttonType="back" />
      <div className={containerHeaderClass}>
        <Routes>
          <Route path="/memo" element={<MemoList />}></Route>
          <Route path="/memo/write" element={<MemoWrite />}></Route>
          <Route path="/food" element={<FoodInfo />}></Route>
          <Route path="/food/write" element={<FoodInfoWrite />}></Route>
          <Route path="/schedule" element={<KindergartenSchedule />}></Route>
        </Routes>
      </div>
      <NavigationBar />
    </div>
  );
};

export default KindergartenManagement;
