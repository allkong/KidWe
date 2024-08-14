import {Outlet} from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary';
import NotFound from '@/pages/NotFound';

const ScheduleView = () => {
  return (
    <ErrorBoundary fallback={<NotFound />}>
      <Outlet />
    </ErrorBoundary>
  );
};

export default ScheduleView;
