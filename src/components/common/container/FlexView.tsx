import {TAlignItems, TDirection, TJustifyContent} from 'interfaces';
import React from 'react';
import {
  DimensionValue,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors} from 'themes';

interface IFlexViewProps {
  direction?: TDirection;
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
  gap?: number;
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  fullWidth?: boolean;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
  padding?: DimensionValue;
  margin?: DimensionValue;
  paddingVertical?: DimensionValue;
  paddingHorizontal?: DimensionValue;
  marginVertical?: DimensionValue;
  marginHorizontal?: DimensionValue;
  onPress?: (event: GestureResponderEvent) => void;
  shrink?: number;
  grow?: number;
  flex?: number;
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  maxWidth?: DimensionValue;
  maxHeight?: DimensionValue;
  minHeight?: DimensionValue;
  minWidth?: DimensionValue;
  height?: DimensionValue;
  width?: DimensionValue;
}

export const FlexView = (props: IFlexViewProps) => {
  const {
    alignItems = 'center',
    direction = 'row',
    gap,
    justifyContent = 'flex-start',
    children,
    containerStyle,
    fullWidth = true,
    borderRadius,
    borderWidth,
    borderColor = colors.neutralColor4,
    backgroundColor = colors.white,
    padding,
    margin,
    paddingVertical,
    paddingHorizontal,
    marginVertical,
    marginHorizontal,
    shrink,
    grow,
    flex,
    wrap,
    height,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    width,
    onPress,
  } = props;

  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      activeOpacity={0.75}
      style={[
        styles.container,
        {
          flexDirection: direction,
          justifyContent,
          alignItems,
          gap,
          borderRadius,
          borderWidth,
          borderColor,
          backgroundColor,
          padding,
          margin,
          paddingVertical,
          paddingHorizontal,
          marginVertical,
          marginHorizontal,
          flex,
          flexGrow: grow,
          flexShrink: shrink,
          flexWrap: wrap,
          width: width !== undefined ? width : fullWidth ? '100%' : undefined,
          height,
          maxWidth,
          maxHeight,
          minWidth,
          minHeight,
        },
        containerStyle,
      ]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
});
