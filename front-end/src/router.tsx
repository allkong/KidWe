import {createBrowserRouter, redirect} from 'react-router-dom';
import Home from '@/pages/Home';

import MyPage from '@/pages/MyPage';
import MyPageUpdate from '@/pages/my-page/MyPageUpdate';
import KidUpdate from '@/pages/my-page/KidUpdate';

import KindergartenSchedule from '@/pages/schedule/KindergartenSchedule';

import DailyNoteListView from '@/pages/daily-note/DailyNoteListView';
import DailyNoteDetail from '@/pages/daily-note/DailyNoteDetail';
import DailyNoteWrite from '@/pages/daily-note/DailyNoteWirte';

import AnnouncementListView from '@/pages/announcement/AnnouncementListView';
import AnnouncementDetail from '@/pages/announcement/AnnouncementDetail';
import AnnouncementWrite from '@/pages/announcement/AnnouncementWrite';

import MedicationListView from '@/pages/medication/MedicationListView';
import MedicationDetail from '@/pages/medication/MedicationDetail';
import MedicationWrite from '@/pages/medication/MedicationWrite';

import LeaveConsentListView from '@/pages/leave-consent/LeaveConsentListView';
import LeaveConsentDetail from '@/pages/leave-consent/LeaveConsentDetail';
import LeaveConsentnWrite from '@/pages/leave-consent/LeaveConsentWrite';

import SignUp from '@/pages/SignUp';
import LoginMain from '@/pages/login/LoginMain';

import MemoView from '@/pages/memo/MemoView';
import MemoList from '@/pages/memo/MemoList';
import MemoWrite from '@/pages/memo/MemoWrite';
import MemoUpdate from '@/pages/memo/MemoUpdate';

import AttendanceManagement from '@/pages/attendance/AttendanceManagement';

import FoodView from '@/pages/food/FoodView';
import FoodInfo from '@/pages/food/FoodInfo';
import FoodInfoWrite from '@/pages/food/FoodInfoWrite';

import NotFound from '@/pages/NotFound';

import {getUserData} from '@/utils/userData';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/schedule',
    element: <KindergartenSchedule />,
  },
  {
    path: '/mypage',
    loader: () => {
      if (getUserData() === null) {
        return redirect('/login');
      }
      return null;
    },
    children: [
      {
        path: '',
        element: <MyPage />,
      },
      {
        path: 'update/user',
        element: <MyPageUpdate />,
      },
      {
        path: 'update/kid',
        element: <KidUpdate />,
      },
    ],
  },
  {
    path: '/daily-note',
    children: [
      {
        path: '',
        element: <DailyNoteListView />,
      },
      {
        path: ':dailyNoteId',
        element: <DailyNoteDetail />,
      },
      {
        path: 'write',
        element: <DailyNoteWrite />,
      },
    ],
  },
  {
    path: '/announcement',
    children: [
      {
        path: '',
        element: <AnnouncementListView />,
      },
      {
        path: ':announcementId',
        element: <AnnouncementDetail />,
      },
      {
        path: 'write',
        element: <AnnouncementWrite />,
      },
    ],
  },
  {
    path: '/attendance',
    element: <AttendanceManagement />,
  },
  {
    path: '/medication',
    children: [
      {
        path: '',
        element: <MedicationListView />,
      },
      {
        path: ':medicationId',
        element: <MedicationDetail />,
      },
      {
        path: 'write',
        element: <MedicationWrite />,
      },
    ],
  },
  {
    path: '/leave-consent',
    children: [
      {
        path: '',
        element: <LeaveConsentListView />,
      },
      {
        path: ':leaveConsentId',
        element: <LeaveConsentDetail />,
      },
      {
        path: 'write',
        element: <LeaveConsentnWrite />,
      },
    ],
  },
  {
    path: '/signup/*',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <LoginMain />,
  },
  {
    path: '/memo',
    element: <MemoView />,
    children: [
      {
        path: '',
        element: <MemoList />,
      },
      {
        path: 'write',
        element: <MemoWrite />,
      },
      {
        path: 'update/:memoId',
        element: <MemoUpdate />,
      },
    ],
  },
  {
    path: '/food',
    element: <FoodView />,
    children: [
      {
        path: '',
        element: <FoodInfo />,
      },
      {
        path: 'write',
        element: <FoodInfoWrite />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
