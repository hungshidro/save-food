import {Icons} from 'assets';
import {TKeyTranslation} from 'interfaces';
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

export type TAppCheckBoxProps = {
  //
  value?: boolean;
  onChange?: (value: boolean) => void;
  title?: TKeyTranslation;
  error?: string;
  errStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  titleColor?: string;
  boxColor?: string;
  disabled?: boolean;
};

export const AppCheckBox = (props: TAppCheckBoxProps) => {
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
      onPress={onChangeValue}
      activeOpacity={0.85}
      disabled={disabled}
      style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.boxContainer,
          valueInner && styles.valueChecked,
          !!boxColor && {borderColor: boxColor},
        ]}>
        {valueInner && <Icons.Check size={getSize(18)} color={colors.white} />}
      </View>
      {title && (
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
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: getSize(24),
    width: getSize(24),
    borderRadius: getSize(4),
    borderWidth: getSize(2),
    borderColor: colors.neutralColor5,
    marginRight: getSize(10),
  },
  valueChecked: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  title: {
    color: colors.neutralColor6,
    fontSize: getSize(12),
    lineHeight: getSize(12) * 1.1,
  },
  error: {
    marginTop: getSize(4),
    color: colors.red,
    fontSize: getSize(12),
  },
});
