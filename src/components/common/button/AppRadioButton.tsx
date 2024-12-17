import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {colors, getSize} from 'themes';
import {AppText} from '../text';
import {useAppTranslation} from 'hooks';

interface IAppRadioButtonProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
  title?: string;
  customTitle?: React.ReactNode;
  error?: string;
  errStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  titleColor?: string;
  boxColor?: string;
  disabled?: boolean;
}

export const AppRadioButton = (props: IAppRadioButtonProps) => {
  const {
    value,
    onChange,
    title,
    errStyle,
    error,
    containerStyle,
    boxColor,
    titleStyle,
    titleColor,
    disabled,
    customTitle,
  } = props;

  const {t} = useAppTranslation();
  const [draftValue, setDraftValue] = React.useState(value);

  const valueInner = React.useMemo(() => {
    if (value === undefined) {
      return draftValue;
    }
    return value;
  }, [value, draftValue]);

  const onChangeValue = () => {
    setDraftValue(!valueInner);
    onChange?.(!valueInner);
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.6}
      onPress={onChangeValue}
      style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.boxContainer,
          value && styles.valueChecked,
          !!boxColor && {borderColor: boxColor},
        ]}>
        {value && <View style={styles.innerBox} />}
      </View>
      {customTitle}
      {title && !customTitle && (
        <AppText
          style={[
            styles.title,
            !!titleColor && {color: titleColor},
            titleStyle,
          ]}>
          {title}
        </AppText>
      )}
      {!!error && (
        <AppText style={[styles.error, errStyle]}>
          {t(error).toString()}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: getSize(8),
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: getSize(24),
    width: getSize(24),
    padding: getSize(2.5),
    borderRadius: getSize(12),
    borderWidth: getSize(1),
    borderColor: colors.neutralColor5,
  },
  valueChecked: {
    borderColor: colors.primary,
  },
  innerBox: {
    width: '100%',
    height: '100%',
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    borderRadius: getSize(20),
  },
  title: {
    color: colors.neutralColor1,
    fontSize: getSize(12),
    lineHeight: getSize(12) * 1.2,
    fontWeight: '500',
  },
  error: {
    marginTop: getSize(4),
    color: colors.red,
    fontSize: getSize(12),
  },
});
