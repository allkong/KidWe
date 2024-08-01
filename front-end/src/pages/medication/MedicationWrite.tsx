import {containerHeaderClass} from '@/styles/styles';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';

const MedicationWrite = () => {
  return (
    <div className="h-screen">
      <Header title="투약의뢰서" buttonType="back" />
      <div className={containerHeaderClass}></div>
      <NavigationBar />
    </div>
  );
};

export default MedicationWrite;
