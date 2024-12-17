import React from 'react';
import {useMemo} from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import {getSize} from 'themes';

export const IconTab = ({
  listIcon,
  listIconFocus,
  focus,
  style,
  index,
}: {
  focus: boolean;
  listIcon: ImageSourcePropType[];
  listIconFocus: ImageSourcePropType[];
  style?: StyleProp<ImageStyle>;
  index: number;
}) => {
  const icon = useMemo(() => listIcon[index], [listIcon, index]);
  const iconFocus = useMemo(() => listIconFocus[index], [listIconFocus, index]);
  return (
    <Image
      source={focus ? iconFocus : icon}
      style={[styles.container, style]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: getSize(24),
    width: getSize(24),
  },
});
