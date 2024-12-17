import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {RootScreen} from 'screens';
import RouteName from '../RouteName';

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={RouteName.ROOT} component={RootScreen} />
    </Tab.Navigator>
  );
};
