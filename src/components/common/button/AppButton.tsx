/* eslint-disable react-native/no-inline-styles */
import {useAppTranslation} from 'hooks';
import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors, getSize} from 'themes';
import {AppText} from '../text';
import {TKeyTranslation} from 'interfaces';
import {navigate} from 'navigation';

type Props = {
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  title: TKeyTranslation;
  preIcon?: React.ReactNode;
  sufIcon?: React.ReactNode;
  textStyle?: StyleProp<TextStyle>;
  variant?: 'outline' | 'rounded' | 'text';
  disabled?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  loading?: boolean;
  isFullWidth?: boolean;
  isTranslate?: boolean;
  height?: number;
  path?: string;
  pathParams?: any;
};

export const AppButton = (props: Props) => {
  const {
    onPress,
    style,
    title,
    preIcon,
    sufIcon,
    textStyle,
    variant = 'rounded',
    disabled,
    backgroundColor,
    borderColor,
    titleColor,
    loading,
    isFullWidth = true,
    isTranslate = true,
    height,
    path,
    pathParams,
  } = props;

  const {t} = useAppTranslation();

  const isOutlineButton = variant === 'outline';
  const isTextButton = variant === 'text';

  const _onPress = (event: GestureResponderEvent) => {
    if (path) {
      navigate(path, pathParams);
      return;
    }
    onPress?.(event);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[
        styles.button,
        isOutlineButton && styles.buttonOutline,
        isTextButton && styles.buttonText,
        disabled && styles.disabled,
        !isFullWidth && {
          width: undefined,
          alignSelf: 'baseline',
        },
        style,
        !!backgroundColor && {backgroundColor: backgroundColor},
        !!borderColor && {borderColor: borderColor},
        !!height && {height},
      ]}
      onPress={_onPress}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color={colors.primary} />
      ) : (
        <>
          {preIcon}
          <AppText
            style={[
              styles.textButton,
              (isOutlineButton || isTextButton) && styles.textOutline,
              textStyle,
              !!titleColor && {color: titleColor},
            ]}>
            {isTranslate ? t(title) : title}
          </AppText>
          {sufIcon}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: getSize(40),
    width: '100%',
    borderRadius: getSize(8),
    backgroundColor: colors.neutralColor1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: getSize(8),
    paddingHorizontal: getSize(16),
  },
  buttonOutline: {
    backgroundColor: colors.transparent,
    borderWidth: getSize(1),
    borderColor: colors.neutralColor1,
  },
  buttonText: {
    backgroundColor: colors.transparent,
    borderWidth: 0,
  },
  textButton: {
    fontSize: getSize(16),
    fontWeight: '500',
    lineHeight: getSize(16) * 1.2,
    color: colors.neutralColor9,
  },
  textOutline: {
    color: colors.primary,
  },
  disabled: {
    opacity: 0.4,
  },
});
