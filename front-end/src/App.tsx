import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '@/pages/Home';
import AttentdanceManagement from '@/pages/attendance/AttendanceManagement';
import LoginMain from '@/pages/Login/LoginMain';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/attendance" element={<AttentdanceManagement />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
