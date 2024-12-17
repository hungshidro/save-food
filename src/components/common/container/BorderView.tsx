/* eslint-disable react-native/no-inline-styles */
import {TAlignItems, TJustifyContent} from 'interfaces';
import React from 'react';
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {colors, getSize} from 'themes';

interface IBorderViewProps {
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  padding?: number;
  margin?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  isFullWidth?: boolean;
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
  gap?: number;
  onPress?: () => void;
}

export const BorderView = (props: IBorderViewProps) => {
  const {
    borderRadius = getSize(16),
    borderWidth = 0,
    borderColor = colors.neutralColor4,
    backgroundColor = colors.white,
    padding = 0,
    margin = 0,
    paddingVertical = getSize(20),
    paddingHorizontal = getSize(16),
    marginVertical = 0,
    marginHorizontal = 0,
    containerStyle,
    children,
    isFullWidth = false,
    gap = 0,
    alignItems = 'flex-start',
    justifyContent = 'flex-start',
    onPress,
  } = props;

  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      activeOpacity={0.65}
      style={[
        styles.container,
        {
          borderRadius,
          borderWidth,
          borderColor,
          backgroundColor,
          paddingVertical,
          paddingHorizontal,
          marginVertical,
          marginHorizontal,
          padding,
          margin,
          gap,
          justifyContent,
          alignItems,
        },
        !!isFullWidth && {width: '100%'},
        containerStyle,
      ]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
