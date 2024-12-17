import {AppButton} from 'components/common';
import {TKeyTranslation} from 'interfaces';
import {navigate} from 'navigation';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {colors} from 'themes';

interface ILinkButtonProps {
  path: string;
  style?: StyleProp<ViewStyle>;
  title: TKeyTranslation;
}

export const LinkButton = (props: ILinkButtonProps) => {
  const {path, style, title} = props;

  return (
    <AppButton
      variant="outline"
      title={title}
      isTranslate={false}
      isFullWidth={false}
      borderColor={colors.primary2}
      titleColor={colors.primary2}
      onPress={() => navigate(path)}
      style={style}
    />
  );
};
