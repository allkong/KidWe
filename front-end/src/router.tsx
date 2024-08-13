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

import {getMemberRole, getUserData} from '@/utils/userData';
import ManagementList from '@/pages/kindergarten-management/managementList';
import BanManagement from '@/pages/kindergarten-management/banManagement';
import TeacherManagement from '@/pages/kindergarten-management/teacherManagement';
import KindergartenManagement from '@/pages/kindergarten-management/kindergartenManagement';
import ChildManagement from '@/pages/kindergarten-management/childManagement';

const requireAuth = () => {
  if (getUserData() === null) {
    return redirect('/auth/login');
  }
  return null;
};

export const router = createBrowserRouter([
  {
    path: '/auth',
    children: [
      {
        path: 'signup/*',
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <LoginMain />,
      },
    ],
  },
  {
    path: '/',
    element: <Home />,
    loader: requireAuth,
  },
  {
    path: '/schedule',
    element: <KindergartenSchedule />,
    loader: requireAuth,
  },
  {
    path: '/my-page',
    loader: requireAuth,
    children: [
      {
        path: '',
        element: <MyPage />,
      },
      {
        path: 'update',
        element: <MyPageUpdate />,
      },
      {
        path: 'kid/update',
        element: <KidUpdate />,
      },
    ],
  },
  {
    path: '/daily-notes',
    loader: requireAuth,
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
    path: '/announcements',
    loader: requireAuth,
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
    path: '/attendances',
    loader: requireAuth,
    element: <AttendanceManagement />,
  },
  {
    path: '/medications',
    loader: requireAuth,
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
    path: '/leave-consents',
    loader: requireAuth,
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
    path: '/memos',
    loader: requireAuth,
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
    path: '/kindergartens',
    loader: requireAuth,
    children: [
      {path: '', element: <ManagementList />},
      {path: 'ban', element: <BanManagement />},
      {path: 'setting', element: <KindergartenManagement />},
      {path: 'child', element: <ChildManagement />},
      {path: 'teacher', element: <TeacherManagement />},
    ],
  },
  {
    path: '/foods',
    loader: requireAuth,
    element: <FoodView />,
    children: [
      {
        path: '',
        element: <FoodInfo />,
      },
      {
        path: 'write',
        element: <FoodInfoWrite />,
        loader: () => {
          if (getMemberRole() === 'ROLE_GUARDIAN') {
            return redirect('/login');
          }
          return null;
        },
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
