import {AxiosError} from 'axios';
import {useCallback} from 'react';
import {toast} from 'react-toastify';

const useApiHandler = () => {
  const errorHandler = useCallback((error: AxiosError) => {
    let toastMessage = 'error';

    if (error.response) {
      const {status: errorStatus} = error.response;

      if (errorStatus < 500) {
        toastMessage = '올바르지 않은 접근이에요.';
      } else {
        toastMessage = '에러가 발생했어요.\n잠시 후 다시 시도해주세요.';
      }
    }

    toast.error(`${toastMessage}`);
  }, []);

  return {errorHandler};
};

export default useApiHandler;
