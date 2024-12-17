import {useQuery} from '@tanstack/react-query';
import {exampleApi} from './example.api';
import {QUERY_KEYS} from 'api/queryKey';

export const useGetTodos = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.example],
    queryFn: exampleApi.callApi,
  });
};
