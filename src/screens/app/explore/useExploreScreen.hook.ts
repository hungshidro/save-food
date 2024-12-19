/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useShallow} from 'zustand/react/shallow';
import {useAppStore} from 'zustands';

export const useExploreScreen = () => {
  const {setLoading} = useAppStore(
    useShallow(state => ({
      setLoading: state.setLoading,
    })),
  );

  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    callApi();
  }, []);

  const callApi = React.useCallback(async () => {
    async () => {
      try {
        setLoading(true);
        await new Promise(() =>
          setTimeout(() => {
            console.log('API called');
          }, 2000),
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    //do something on refresh
    await callApi();
    setRefreshing(false);
  };
  return {
    refreshing,
    onRefresh,
  };
};
