import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import {router} from './router';
import {RouterProvider} from 'react-router-dom';
import {useState} from 'react';

const App: React.FC = () => {
  const {errorHandler} = useApiHandler();

  const [queryClient] = useState(
    () =>
      new QueryClient({
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
      })
  );

  const isLoading = useRecoilValue(loadingState);
  const isMobile = window.innerWidth <= 768;

  return (
    <>
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
