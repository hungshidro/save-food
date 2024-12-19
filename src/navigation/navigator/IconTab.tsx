import {IAppIcon} from 'assets';
import React from 'react';
import {useMemo} from 'react';
import {ImageStyle, StyleProp} from 'react-native';
import {colors, getSize} from 'themes';

export const IconTab = ({
  listIcon,
  listIconFocus,
  focus,
  style,
  index,
}: {
  focus: boolean;
  listIcon: IAppIcon[];
  listIconFocus: IAppIcon[];
  style?: StyleProp<ImageStyle>;
  index: number;
}) => {
  const Icon = useMemo(() => listIcon[index], [listIcon, index]);
  const IconFocus = useMemo(() => listIconFocus[index], [listIconFocus, index]);
  return focus ? (
    <IconFocus size={getSize(24)} style={style} color={colors.black} />
  ) : (
    <Icon size={getSize(24)} style={style} />
  );
};
