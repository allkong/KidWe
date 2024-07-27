import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import {Outlet} from 'react-router-dom';

const KindergartenManagement = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="" buttonType="back" />
      <div className="flex-grow bg-[#F8F8F8]">
        <Outlet></Outlet>
      </div>
      <NavigationBar />
    </div>
  );
};

export default KindergartenManagement;
