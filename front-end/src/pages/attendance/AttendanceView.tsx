import {ErrorBoundary} from 'react-error-boundary';
import NotFound from '@/pages/NotFound';
import {Outlet} from 'react-router-dom';

const AttendanceView = () => {
  return (
    <ErrorBoundary fallback={<NotFound />}>
      <Outlet />
    </ErrorBoundary>
  );
};

export default AttendanceView;
