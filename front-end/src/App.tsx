import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '@/pages/Home';
import AttentdanceManagement from '@/pages/attendance/AttendanceManagement';
import KindergartenManagement from '@/pages/KindergartenManagement';
import MemoList from '@/pages/kindergarten/MemoList';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/attendance" element={<AttentdanceManagement />}></Route>
          <Route path="/kindergarten/*" element={<KindergartenManagement />}>
            <Route path="memo" element={<MemoList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
