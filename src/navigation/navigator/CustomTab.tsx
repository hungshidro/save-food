import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import {appWidth, getSize} from 'themes';
import {ButtonTab} from './ButtonTab';

export const CustomTab = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const inset = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: inset.bottom,
          height: getSize(68) + inset.bottom,
        },
      ]}>
      {state.routes.map((route, index) => {
        return (
          <ButtonTab
            key={index}
            route={route}
            index={index}
            descriptors={descriptors}
            navigation={navigation}
            state={state}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: getSize(4),
    paddingHorizontal: getSize(12),
  },
  subTab: {
    height: getSize(52),
    width: (appWidth - getSize(24)) / 5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: getSize(10),
    left: 0,
    zIndex: -10,
  },
  circleRound: {
    height: getSize(48),
    minWidth: getSize(48),
    backgroundColor: 'black',
    borderRadius: 50,
    opacity: 0.3,
  },
});
