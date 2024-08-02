import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {containerHeaderClass} from '@/styles/styles';
import RoleSelect from '@/pages/sign-up/RoleSelect';
import RegisterInfo from '@/pages/sign-up/RegisterInfo';
import RegisterKindergarten from '@/pages/sign-up/RegisterKindergarten';
import RegisterComplete from '@/pages/sign-up/RegisterComplete';

import KindergartenSearch from '@/pages/sign-up/KindergartenSearch';
import KindergartenBan from '@/pages/sign-up/KindergartenBan';
import KindergartenChild from '@/pages/sign-up/KindergartenChild';
import ProgressMobileStepper from '@/pages/sign-up/ProgressMobileStepper';
const SignUp: React.FC = () => {
  // const {headerTitle} = useHeader();
  const [activeStep, setActiveStep] = useState(0);
  const steps = 6;
  const handleNext = () => {
    setActiveStep(prevActiveStep => Math.min(prevActiveStep + 1, steps - 1));
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => Math.max(prevActiveStep - 1, 0));
  };
  return (
    <div className="h-screen">
      <div className={containerHeaderClass}>
        <ProgressMobileStepper
          activeStep={activeStep}
          handleNext={handleNext}
          handleBack={handleBack}
          steps={steps}
        />
        <Routes>
          <Route
            path="/role"
            element={<RoleSelect handleNext={handleNext} />}
          ></Route>
          <Route
            path="/info"
            element={<RegisterInfo handleNext={handleNext} />}
          ></Route>
          <Route
            path="/kindergarten/register"
            element={<RegisterKindergarten />}
          ></Route>
          <Route
            path="kindergarten/search"
            element={<KindergartenSearch />}
          ></Route>
          <Route path="/kindergarten/ban" element={<KindergartenBan />}></Route>
          <Route
            path="/kindergarten/child"
            element={<KindergartenChild />}
          ></Route>
          <Route path="/complete" element={<RegisterComplete />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default SignUp;
