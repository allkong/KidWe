import {Routes, Route} from 'react-router-dom';
import Header from '@/components/organisms/Navigation/Header';
import NavigationBar from '@/components/organisms/Navigation/NavigationBar';
import AnnouncementList from '@/pages/announcement/AnnouncementList';
import AnnouncementWrite from '@/pages/announcement/AnnouncementWrite';
import AnnouncementDetail from '@/pages/announcement/AnnouncementDetail';
import {containerHeaderClass} from '@/styles/styles';

const Announcement = () => {
  // const {headerTitle} = useHeader();

  return (
    <div className="h-screen">
      <Header title={'공지사항'} buttonType="back" />
      <div className={containerHeaderClass}>
        <Routes>
          <Route path="/" element={<AnnouncementList />}></Route>
          <Route path="/1" element={<AnnouncementDetail />}></Route>
          <Route path="/write" element={<AnnouncementWrite />}></Route>
        </Routes>
      </div>
      <NavigationBar />
    </div>
  );
};

export default Announcement;
