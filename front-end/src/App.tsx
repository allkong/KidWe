import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import {HeaderProvider} from './contexts/header/HeaderContext';
import Home from '@/pages/Home';
import AttentdanceManagement from '@/pages/attendance/AttendanceManagement';
import KindergartenManagement from '@/pages/KindergartenManagement';
import LoginMain from '@/pages/login/LoginMain';
import RoleSelect from '@/pages/sign-up/RoleSelect';
import Register from '@/pages/sign-up/Register';
import RegisterKindergarten from '@/pages/sign-up/RegisterKindergarten';
import RegisterCompleted from '@/pages/sign-up/RegisterCompleted';
import KindergartenSearch from '@/pages/sign-up/KindergartenSearch';
import KindergartenSearchCompleted from './pages/sign-up/KindergartenSearchCompleted';
const App: React.FC = () => {
  return (
    <div>
      {/* <HeaderProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/attendance" element={<AttentdanceManagement />}></Route>
          <Route path="/signup" element={<RoleSelect />}></Route>
          <Route path="/login" element={<LoginMain />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="register/kindergarten/search"
            element={<KindergartenSearch />}
          ></Route>
          <Route
            path="register/kindergarten/search/completed"
            element={<KindergartenSearchCompleted />}
          ></Route>
          <Route
            path="/register/kindergarten"
            element={<RegisterKindergarten />}
          ></Route>
          <Route
            path="/kindergarten/*"
            element={<KindergartenManagement />}
          ></Route>
          <Route
            path="/register/completed"
            element={<RegisterCompleted />}
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* </HeaderProvider> */}
    </div>
  );
};

export default App;
