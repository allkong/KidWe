import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {HeaderProvider} from './contexts/header/HeaderContext';
import Home from '@/pages/Home';
import AttentdanceManagement from '@/pages/attendance/AttendanceManagement';
import KindergartenManagement from '@/pages/KindergartenManagement';
import LoginMain from '@/pages/login/LoginMain';
import SignUpMain from '@/pages/sign-up/SignUpMain';
import Register from '@/pages/sign-up/Register';
import RegisterKindergarden from '@/pages/sign-up/RegisterKindergarden';

const App: React.FC = () => {
  return (
    <div>
      {/* <HeaderProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/attendance" element={<AttentdanceManagement />}></Route>
          <Route path="/signup" element={<SignUpMain />}></Route>
          <Route path="/login" element={<LoginMain />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/register/kindergarden"
            element={<RegisterKindergarden />}
          ></Route>
          <Route
            path="/kindergarten/*"
            element={<KindergartenManagement />}
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* </HeaderProvider> */}
    </div>
  );
};

export default App;
