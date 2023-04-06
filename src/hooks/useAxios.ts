import axios from 'axios';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

interface UseAxiosProps<P> {
  queryId: string;
  method: string;
  url: string;
  params?: P;
}
type UseAxiosReturnTypes<T> = [boolean, T, Error | null];

const useAxios = <T, P = unknown>({
  queryId,
  method,
  url,
  params,
}: UseAxiosProps<P>): UseAxiosReturnTypes<T> => {
  const { data, isLoading, error } = useQuery<T, Error>(queryId, async () => {
    const { data } = await axios<T>({
      method,
      url,
      params,
    });
    return data;
  });

  useEffect(() => {
    if (error instanceof Error) {
      console.error(error);
    }
  }, [error]);

  return [isLoading, data as T, error];
};

export default useAxios;
