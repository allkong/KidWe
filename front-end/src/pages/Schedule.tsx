import {Routes, Route} from 'react-router-dom';
import KindergartenSchedule from '@/pages/schedule/KindergartenSchedule';

const Schedule = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/schedule" element={<KindergartenSchedule />}></Route>
      </Routes>
    </div>
  );
};

export default Schedule;
