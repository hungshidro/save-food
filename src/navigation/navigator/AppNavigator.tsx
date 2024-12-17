import {NavigationContainer} from '@react-navigation/native';
import React, {useCallback} from 'react';
// import BootSplash from 'react-native-bootsplash';

import {navigationRef} from '../NavigationUtils';
// import {changeLaguage} from 'localization';
import {MainStack} from 'navigation/stack/MainStack';
// import {useCameraPermission} from 'react-native-vision-camera';
// import {ECountryCode} from 'enums';

export const AppNavigator = () => {
  // const {hasPermission, requestPermission} = useCameraPermission();

  const onStart = useCallback(async () => {
    // changeLaguage(lang);
    // await requestPermissionCamera();
    // await initNotifications();
    // createChannel();
    // BootSplash.hide({fade: true});
    // BootSplash.hide({fade: true});
  }, []);

  return (
    <NavigationContainer
      onReady={() => {
        onStart();
      }}
      ref={navigationRef}>
      {/* <AuthStack /> */}
      {/* <MainStack /> */}
      <MainStack />
    </NavigationContainer>
  );
};
