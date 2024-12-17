import React from 'react';
import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {colors, getSize} from 'themes';

interface IAppLineProps {
  color?: string;
  length?: DimensionValue;
  height?: DimensionValue;
  vertical?: boolean;
  style?: StyleProp<ViewStyle>;
  mt?: DimensionValue;
  mb?: DimensionValue;
  ml?: DimensionValue;
  mr?: DimensionValue;
  mx?: DimensionValue;
  my?: DimensionValue;
}

export const AppLine = (props: IAppLineProps) => {
  const {
    color = colors.greyC4,
    height = getSize(1),
    length = '100%',
    vertical = false,
    style,
    mt,
    mb,
    ml,
    mr,
    mx,
    my,
  } = props;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color,
          height: vertical ? length : height,
          width: vertical ? height : length,
          marginTop: mt,
          marginBottom: mb,
          marginLeft: ml,
          marginRight: mr,
          marginHorizontal: mx,
          marginVertical: my,
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});
