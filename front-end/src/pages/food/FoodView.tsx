import {ErrorBoundary} from 'react-error-boundary';
import NotFound from '@/pages/NotFound';
import {Outlet} from 'react-router-dom';

const FoodView = () => {
  return (
    <ErrorBoundary fallback={<NotFound />}>
      <Outlet />
    </ErrorBoundary>
  );
};

export default FoodView;
