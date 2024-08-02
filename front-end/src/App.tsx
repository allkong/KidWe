import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {HeaderProvider} from './contexts/header/HeaderContext';

import Home from '@/pages/Home';
import Schedule from '@/pages/Schedule';
import MyPage from '@/pages/MyPage';
import SignUp from '@/pages/SignUp';
import Announcement from '@/pages/Announcement';
import AttentdanceManagement from '@/pages/attendance/AttendanceManagement';
import MedicationListView from '@/pages/medication/MedicationListView';
import MedicationDetail from '@/pages/medication/MedicationDetail';
import KindergartenManagement from '@/pages/KindergartenManagement';
import LoginMain from '@/pages/login/LoginMain';

import NotFound from '@/pages/NotFound';

const App: React.FC = () => {
  return (
    <div>
      {/* <HeaderProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>

          <Route path="/attendance" element={<AttentdanceManagement />}></Route>
          <Route path="/announcement/*" element={<Announcement />}></Route>

          <Route path="/medication">
            <Route path="" element={<MedicationListView />} />
            <Route path=":medicationId" element={<MedicationDetail />} />
          </Route>

          <Route path="/signup/*" element={<SignUp />}></Route>
          <Route path="/login" element={<LoginMain />}></Route>

          <Route
            path="/kindergarten/*"
            element={<KindergartenManagement />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      {/* </HeaderProvider> */}
    </div>
  );
};

export default App;
