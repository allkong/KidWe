import {loadingState} from '@/recoil/atoms/axios/loading';
import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';

export const useLoading = (isLoading: boolean) => {
  const setLoadingState = useSetRecoilState(loadingState);

  useEffect(() => {
    setLoadingState(isLoading);
  }, [isLoading, setLoadingState]);
};
