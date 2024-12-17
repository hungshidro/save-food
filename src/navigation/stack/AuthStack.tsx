import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import RouteName from '../RouteName';
import {RootScreen} from 'screens';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={
        RouteName.ROOT
        // RouteName.PERSONALIZE_BOARD_SCREEN
      }>
      <Stack.Screen name={RouteName.ROOT} component={RootScreen} />
    </Stack.Navigator>
  );
};
