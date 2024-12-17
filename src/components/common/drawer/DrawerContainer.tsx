/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {appHeight, appWidth, colors, getSize} from 'themes';
import {caculateOpacityColor} from 'ultils/ui';

export interface IDrawerContainerProps {
  show?: boolean;
  onCloseDrawer?: () => void;
  align?: 'left' | 'right';
  children?: React.ReactNode;
}

export const DrawerContainer = (props: IDrawerContainerProps) => {
  const {show = false, align = 'right', onCloseDrawer, children} = props;

  const insets = useSafeAreaInsets();

  const positionValue = React.useRef(new Animated.Value(0));
  const opacityValue = React.useRef(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(positionValue.current, {
      toValue: show ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(opacityValue.current, {
      toValue: show ? 1 : 0,
      duration: show ? 200 : 1,
      delay: show ? 200 : 0,
      useNativeDriver: false,
    }).start();
  }, [show]);

  const translateX = positionValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: [appWidth, 0],
  });

  const overlayOpacity = opacityValue.current.interpolate({
    inputRange: [0, 0.1, 1],
    outputRange: [0, 0.5, 1],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{translateX}],
          height: appHeight + insets.bottom + getSize(16),
          alignItems: align === 'left' ? 'flex-start' : 'flex-end',
          top: insets.top,
        },
      ]}>
      <Animated.View
        style={[
          styles.overlay,
          {
            opacity: overlayOpacity,
            height: appHeight + insets.bottom + getSize(16),
          },
        ]}
        onTouchStart={onCloseDrawer}
      />
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: appWidth,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    backgroundColor: caculateOpacityColor(colors.black, 0.5),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});
