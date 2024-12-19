import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';

import {ExploreScreen, HomeScreen, RandomScreen, SettingScreen} from 'screens';
import RouteName from '../RouteName';
import {CustomTab} from './CustomTab';

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
  const renderTab = (props: BottomTabBarProps) => {
    return <CustomTab {...props} />;
  };

  return (
    <Tab.Navigator tabBar={renderTab} screenOptions={{headerShown: false}}>
      <Tab.Screen name={RouteName.HOME} component={HomeScreen} />
      <Tab.Screen name={RouteName.SEARCH} component={ExploreScreen} />
      <Tab.Screen name={RouteName.RANDOM} component={RandomScreen} />
      <Tab.Screen name={RouteName.SETTING} component={SettingScreen} />
    </Tab.Navigator>
  );
};
