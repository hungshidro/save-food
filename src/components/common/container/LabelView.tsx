/* eslint-disable react-native/no-inline-styles */

import {
  TAlignItems,
  TDirection,
  TJustifyContent,
  TKeyTranslation,
} from 'interfaces';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {colors, getSize} from 'themes';
import {AppText} from '../text';

interface ILabelViewProps {
  direction?: TDirection;
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
  title?: TKeyTranslation;
  titleStyle?: StyleProp<TextStyle>;
  isTranslate?: boolean;
  value?: string | React.ReactElement;
  valueStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  isFullWidth?: boolean;
  gap?: number;
  children?: React.ReactNode;
  titleProps?: TextProps;
  shrink?: number;
  grow?: number;
}

export const LabelView = (props: ILabelViewProps) => {
  const {
    direction = 'row',
    justifyContent = 'space-between',
    alignItems = 'center',
    containerStyle,
    isFullWidth = false,
    title,
    titleStyle,
    value = '',
    valueStyle,
    gap,
    children,
    titleProps,
    grow,
    shrink,
  } = props;

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: direction,
          justifyContent,
          alignItems,
          gap,
          flexShrink: shrink,
          flexGrow: grow,
        },
        {width: isFullWidth ? '100%' : undefined},
        containerStyle,
      ]}>
      {title && (
        <AppText {...titleProps} style={[styles.title, titleStyle]}>
          {title}
        </AppText>
      )}
      {typeof value === 'string' ? (
        <AppText style={[styles.value, valueStyle]}>{value}</AppText>
      ) : (
        value
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontSize: getSize(14),
    lineHeight: getSize(14) * 1.2,
    color: colors.neutralColor1,
  },
  value: {
    fontSize: getSize(14),
    lineHeight: getSize(14) * 1.2,
    color: colors.neutralColor1,
    fontWeight: '500',
  },
});
