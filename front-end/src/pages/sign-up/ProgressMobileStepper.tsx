import React, {useState} from 'react';

interface ProgressMobileStepperProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  steps: number;
}

const ProgressMobileStepper: React.FC<ProgressMobileStepperProps> = ({
  activeStep,
  handleNext,
  handleBack,
  steps,
}) => {
  return (
    <div className="w-full  flex flex-col items-center">
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{width: `${((activeStep + 1) / steps) * 100}%`}}
        ></div>
      </div>
    </div>
  );
};

export default ProgressMobileStepper;
