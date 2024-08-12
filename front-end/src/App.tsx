import {Routes, Route} from 'react-router-dom';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from '@/pages/Home';
import MyPage from '@/pages/MyPage';
import MyPageUpdate from '@/pages/my-page/MyPageUpdate';
import KidUpdate from '@/pages/my-page/KidUpdate';
import SignUp from '@/pages/SignUp';

import DailyNoteListView from '@/pages/daily-note/DailyNoteListView';
import DailyNoteDetail from '@/pages/daily-note/DailyNoteDetail';
import DailyNoteWirte from '@/pages/daily-note/DailyNoteWirte';

import AnnouncementListView from '@/pages/announcement/AnnouncementListView';
import AnnouncementDetail from '@/pages/announcement/AnnouncementDetail';
import AnnouncementWrite from '@/pages/announcement/AnnouncementWrite';

import AttentdanceManagement from '@/pages/attendance/AttendanceManagement';

import MedicationListView from '@/pages/medication/MedicationListView';
import MedicationDetail from '@/pages/medication/MedicationDetail';
import MedicationWrite from '@/pages/medication/MedicationWrite';

import MemoList from '@/pages/memo/MemoList';
import MemoWrite from '@/pages/memo/MemoWrite';
import MemoUpdate from '@/pages/memo/MemoUpdate';
import MemoView from '@/pages/memo/MemoView';

import LeaveConsentListView from '@/pages/leave-consent/LeaveConsentListView';
import LeaveConsentDetail from '@/pages/leave-consent/LeaveConsentDetail';
import LeaveConsentWrite from '@/pages/leave-consent/LeaveConsentWrite';

import LoginMain from '@/pages/login/LoginMain';

import FoodInfo from '@/pages/food/FoodInfo';
import FoodInfoWrite from '@/pages/food/FoodInfoWrite';

import KindergartenSchedule from '@/pages/schedule/KindergartenSchedule';

import NotFound from '@/pages/NotFound';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import useApiHandler from '@/hooks/useApiHandler';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

import {loadingState} from '@/recoil/atoms/axios/loading';
import {useRecoilValue} from 'recoil';
import Spinner from '@/components/atoms/Loader/Spinner';

const App: React.FC = () => {
  const {errorHandler} = useApiHandler();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
      mutations: {
        onError: errorHandler,
        retry: 0,
      },
    },
    queryCache: new QueryCache({
      onError: errorHandler,
    }),
  });

  const isLoading = useRecoilValue(loadingState);
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {isLoading && <Spinner />}
        <ToastContainer
          autoClose={1000}
          hideProgressBar
          pauseOnFocusLoss
          theme="light"
          limit={1}
          style={{
            width: isMobile ? '90%' : 'auto',
            margin: isMobile ? '0 auto' : undefined,
            top: isMobile ? '1rem' : undefined,
          }}
        />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/schedule" element={<KindergartenSchedule />}></Route>

          <Route path="/mypage">
            <Route path="" element={<MyPage />} />
            <Route path="update/user" element={<MyPageUpdate />}></Route>
            <Route path="update/kid" element={<KidUpdate />}></Route>
          </Route>

          <Route path="/daily-note">
            <Route path="" element={<DailyNoteListView />} />
            <Route path=":dailyNoteId" element={<DailyNoteDetail />} />
            <Route path="write" element={<DailyNoteWirte />} />
          </Route>

          <Route path="/announcement">
            <Route path="" element={<AnnouncementListView />} />
            <Route path=":announcementId" element={<AnnouncementDetail />} />
            <Route path="write" element={<AnnouncementWrite />} />
          </Route>

          <Route path="/attendance" element={<AttentdanceManagement />}></Route>

          <Route path="/medication">
            <Route path="" element={<MedicationListView />} />
            <Route path=":medicationId" element={<MedicationDetail />} />
            <Route path="write" element={<MedicationWrite />} />
          </Route>

          <Route path="/leave-consent">
            <Route path="" element={<LeaveConsentListView />} />
            <Route path=":leaveConsentId" element={<LeaveConsentDetail />} />
            <Route path="write" element={<LeaveConsentWrite />} />
          </Route>

          <Route path="/signup/*" element={<SignUp />}></Route>
          <Route path="/login" element={<LoginMain />}></Route>

          <Route path="/memo/*" element={<MemoView />}>
            <Route path="" element={<MemoList />}></Route>
            <Route path="write" element={<MemoWrite />} />
            <Route path="update/:memoId" element={<MemoUpdate />} />
          </Route>

          <Route path="/food">
            <Route path="" element={<FoodInfo />}></Route>
            <Route path="write" element={<FoodInfoWrite />}></Route>
          </Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
