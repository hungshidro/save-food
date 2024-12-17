import {EFontFamily} from 'enums';
import {FontWeight} from 'interfaces';
import React from 'react';
import {Text, TextStyle, TextProps, StyleSheet, StyleProp} from 'react-native';
import {colors} from 'themes';
import {getFont} from 'ultils';

export const AppText = (
  props: AppTextProps & {
    size?: number;
    weight?: FontWeight;
    lineHeight?: number;
    color?: string;
  },
) => {
  const {
    style = {fontWeight: '400'},
    size,
    weight,
    lineHeight,
    color = colors.neutralColor1,
    fontType,
    ...textProps
  } = props;
  const flatStyle = StyleSheet.flatten(style);
  const fontWeight = flatStyle ? (flatStyle as TextStyle)?.fontWeight : '400';
  const fontFamily = getFont(fontWeight, fontType);

  return (
    <Text
      allowFontScaling={false}
      style={[
        {fontSize: size, fontWeight: weight, lineHeight, color},
        flatStyle,
        {fontFamily},
      ]}
      {...textProps}
    />
  );
};

export type TextFontType = 'NotoSansJP' | 'MochiyPopOne';

export type AppTextProps = TextProps & {
  style?: StyleProp<TextStyle>;
  fontType?: EFontFamily;
};
