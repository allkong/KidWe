import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {Routes, Route} from 'react-router-dom';
import MemoList from '@/pages/kindergarten/MemoList';
import {useHeader} from '@/contexts/header/HeaderContext';

const KindergartenManagement = () => {
  const {headerTitle} = useHeader();

  return (
    <div className="flex flex-col min-h-screen">
      <Header title={headerTitle} buttonType="back" />
      <div className="flex-grow bg-[#F8F8F8]">
        <Routes>
          <Route path="/memo" element={<MemoList />}></Route>
        </Routes>
      </div>
      <NavigationBar />
    </div>
  );
};

export default KindergartenManagement;
