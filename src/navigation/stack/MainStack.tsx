import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  HomeScreen,
  // NEW SCREEN IMPORT HERE
} from 'screens';
import RouteName from '../RouteName';
import {TabNavigator} from 'navigation/navigator';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouteName.MAIN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RouteName.MAIN} component={TabNavigator} />
      {/* NEW SCREEN HERE */}
    </Stack.Navigator>
  );
};
