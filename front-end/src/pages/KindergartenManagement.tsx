import {Routes, Route} from 'react-router-dom';
import MemoList from '@/pages/kindergarten/MemoList';
import MemoWrite from '@/pages/kindergarten/MemoWrite';
import FoodInfo from '@/pages/kindergarten/FoodInfo';
import FoodInfoWrite from '@/pages/kindergarten/FoodInfoWrite';
import KindergartenSchedule from '@/pages/kindergarten/KindergartenSchedule';

const KindergartenManagement = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/memo" element={<MemoList />}></Route>
        <Route path="/memo/write" element={<MemoWrite />}></Route>
        <Route path="/food" element={<FoodInfo />}></Route>
        <Route path="/food/write" element={<FoodInfoWrite />}></Route>
        <Route path="/schedule" element={<KindergartenSchedule />}></Route>
      </Routes>
    </div>
  );
};

export default KindergartenManagement;
