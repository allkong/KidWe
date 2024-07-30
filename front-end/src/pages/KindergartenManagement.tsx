import {Routes, Route} from 'react-router-dom';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import MemoList from '@/pages/kindergarten/MemoList';
import MemoWrite from '@/pages/kindergarten/MemoWrite';
import FoodInfo from '@/pages/kindergarten/FoodInfo';
import FoodInfoWrite from '@/pages/kindergarten/FoodInfoWrite';
// import {useHeader} from '@/contexts/header/HeaderContext';
import {containerClass} from '@/styles/styles';

const KindergartenManagement = () => {
  // const {headerTitle} = useHeader();

  return (
    <div className="h-screen">
      <Header title={'메모'} buttonType="back" />
      <div className={containerClass}>
        <Routes>
          <Route path="/memo" element={<MemoList />}></Route>
          <Route path="/write" element={<MemoWrite />}></Route>
          <Route path="/food" element={<FoodInfo />}></Route>
          <Route path="/food/write" element={<FoodInfoWrite />}></Route>
        </Routes>
      </div>
      <NavigationBar />
    </div>
  );
};

export default KindergartenManagement;
