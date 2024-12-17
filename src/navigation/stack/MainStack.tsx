import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  RootScreen,
  // NEW SCREEN IMPORT HERE
} from 'screens';
import RouteName from '../RouteName';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.ROOT}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RouteName.ROOT} component={RootScreen} />
      {/* NEW SCREEN HERE */}
    </Stack.Navigator>
  );
};
