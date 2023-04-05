import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

interface UseAxiosProps<T> {
  method: string;
  url: string;
  initialState: T;
}

const useAxios = <T>({ method, url, initialState }: UseAxiosProps<T>): [boolean, T] => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState(initialState);
  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios({
        method,
        url,
      });
      setApiData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [method, url]);
  useEffect(() => {
    fetchData();
    setIsLoading(true);
  }, [fetchData]);
  return [isLoading, apiData];
};

export default useAxios;
