module.exports = function createUseScreenTemplate(screenName) {
  const arrayName = screenName.split('_');
  const capitalizeName = arrayName
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join('');

  return `/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useShallow} from 'zustand/react/shallow';
import {useAppStore} from 'zustands';

export const use${capitalizeName}Screen = () => {
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
`;
};
