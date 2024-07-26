import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '@/pages/Home';
import Schedule from '@/pages/Schedule';
import MyPage from '@/pages/MyPage';
import AttentdanceManagement from '@/pages/attendance/AttendanceManagement';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/attendance" element={<AttentdanceManagement />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
