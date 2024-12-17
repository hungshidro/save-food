/* eslint-disable react-hooks/exhaustive-deps */

import i18next from 'i18next';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSharedValue, withTiming} from 'react-native-reanimated';

import {AppText} from 'components';
import {colors, getSize} from 'themes';
import {IconTab} from './IconTab';
import {ECountryCode} from 'enums';
import {LIST_ICON_TAB, LIST_ICON_TAB_ACTIVE} from 'configs';
import {useAppTranslation} from 'hooks';

export const ButtonTab = ({
  route,
  index,
  descriptors,
  state,
  navigation,
}: {
  route: any;
  index: number;
  descriptors: BottomTabDescriptorMap;
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}) => {
  const {options} = descriptors[route.key];
  const opacity = useSharedValue(0);
  const isFocused = state.index === index;
  const isEN = i18next.language === ECountryCode.EN;
  const {t} = useAppTranslation();
  const arrayLable = [
    t('tab.community'),
    t('tab.habit'),
    t('tab.retreat'),
    t('tab.education'),
    t('tab.profile'),
  ];

  //state true: set backgroung button to black, else white
  const [backgroundFocus, setBackgroundFocus] = useState(false);
  const [showTextFocus, setShowTextFocus] = useState(false);

  const animatedValue = useRef(new Animated.Value(0));
  const viewRef = useRef<any>(null);

  const animatedStyle = {
    paddingHorizontal: animatedValue.current.interpolate({
      inputRange: [0, 1],
      outputRange: [getSize(12), getSize(16)],
    }),
    maxWidth: animatedValue.current.interpolate({
      inputRange: [0, 1],
      outputRange: [
        getSize(48),
        [2, 4].includes(index)
          ? getSize(isEN ? 120 : 180)
          : [1].includes(index)
          ? getSize(220)
          : getSize(isEN ? 150 : 200),
      ],
    }),
  };

  const onFocus = () => {
    Animated.timing(animatedValue.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
      delay: 400,
    }).start();
    setTimeout(() => setBackgroundFocus(true), 50);
    setTimeout(() => setShowTextFocus(true), index === 1 ? 750 : 700);
  };
  const onBlur = () => {
    Animated.timing(animatedValue.current, {
      toValue: 0,
      duration: 400,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
    setTimeout(() => setBackgroundFocus(false), 400);
    setTimeout(() => setShowTextFocus(false), 100);
  };

  useEffect(() => {
    if (isFocused) {
      onFocus();
    } else {
      onBlur();
      opacity.value = 0;
    }
  }, [isFocused]);

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
      opacity.value = withTiming(1, {
        duration: 1000,
      });
    }
  };
  return (
    <TouchableOpacity
      key={index}
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      disabled={isFocused}
      activeOpacity={0.9}
      style={styles.tabContainer}>
      <View>
        <Animated.View
          ref={viewRef}
          style={[
            isFocused ? styles.tabActive : styles.tab,
            backgroundFocus && styles.buttonFocus,
            animatedStyle,
          ]}>
          <IconTab
            index={index}
            listIcon={backgroundFocus ? LIST_ICON_TAB_ACTIVE : LIST_ICON_TAB}
            listIconFocus={LIST_ICON_TAB_ACTIVE}
            focus={isFocused}
            style={[backgroundFocus && styles.iconFocus]}
          />
          {backgroundFocus && (
            <AppText
              // animated
              style={[
                styles.title,
                !showTextFocus && {
                  ...styles.titleBlur,
                  opacity: opacity.value,
                },
              ]}>
              {arrayLable[index]}
            </AppText>
          )}
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: colors.white,
  },
  tab: {
    height: getSize(48),
    minWidth: getSize(48),
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    borderRadius: getSize(50),
    overflow: 'hidden',
  },
  tabActive: {
    height: getSize(48),
    minWidth: getSize(48),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getSize(20),
    flexGrow: 1,
    flexShrink: 1,
    borderRadius: getSize(50),
    overflow: 'hidden',
  },
  title: {
    fontSize: getSize(14),
    fontWeight: '500',
    lineHeight: getSize(18),
    letterSpacing: getSize(0.07),
    color: colors.primary,
    marginLeft: getSize(12),
  },
  titleBlur: {
    color: colors.black,
  },
  iconFocus: {
    tintColor: colors.primary,
  },
  iconBlur: {
    marginLeft: getSize(12),
  },
  buttonFocus: {
    backgroundColor: colors.primary2,
  },
});
