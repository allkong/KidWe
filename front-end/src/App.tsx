import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AttentdanceManagement from '@/pages/attendance/AttendanceManagement';

const App: React.FC = () => {
  return (
    <div>
      {/* <div className="bg-primary">Font 및 색상 테스트</div>
      <div className="bg-secondary">Font 및 색상 테스트</div>
      <div className="bg-gray-100">Font 및 색상 테스트</div>
      <div className="bg-gray-200">Font 및 색상 테스트</div>
      <div className="bg-gray-300">Font 및 색상 테스트</div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/attendance" element={<AttentdanceManagement />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
