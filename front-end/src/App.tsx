import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from '@/pages/Home';
import MyPage from '@/pages/MyPage';
import MyPageUpdate from '@/pages/my-page/MyPageUpdate';
import KidUpdate from '@/pages/my-page/KidUpdate';
import SignUp from '@/pages/SignUp';

import DailyNoteListView from '@/pages/daily-note/DailyNoteListView';
import DailyNoteDetail from '@/pages/daily-note/DailyNoteDetail';

import Announcement from '@/pages/Announcement';
import AttentdanceManagement from '@/pages/attendance/AttendanceManagement';

import MedicationListView from '@/pages/medication/MedicationListView';
import MedicationDetail from '@/pages/medication/MedicationDetail';
import MedicationWrite from '@/pages/medication/MedicationWrite';
import MemoList from '@/pages/memo/MemoList';

import MemoWrite from '@/pages/memo/MemoWrite';
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
        retry: 1,
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

  return (
    <>
      {isLoading && <Spinner />}
      <ToastContainer
        position="top-center"
        autoClose={300}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        theme="light"
        limit={1}
      />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
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
            </Route>

            <Route
              path="/attendance"
              element={<AttentdanceManagement />}
            ></Route>
            <Route path="/announcement/*" element={<Announcement />}></Route>

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

            <Route path="/memo">
              <Route path="" element={<MemoList />}></Route>
              <Route path="write" element={<MemoWrite />} />
            </Route>

            <Route path="/food">
              <Route path="" element={<FoodInfo />}></Route>
              <Route path="write" element={<FoodInfoWrite />}></Route>
            </Route>

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
