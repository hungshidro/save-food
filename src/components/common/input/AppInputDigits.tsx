import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {colors, getSize} from 'themes';
import {useTranslation} from 'react-i18next';

export type AppInputDigitsProps = {
  digits?: number;
  value: string;
  onChangeText: (text: string) => void;
  onChange?: (text: string) => void;
  style?: StyleProp<ViewStyle>;
  error?: string;
};

// const convertValueToStar = (value: string) => {
//   return value.replace(/./g, '.');
// };

export const AppInputDigits = (props: AppInputDigitsProps) => {
  const {digits = 4, onChangeText, onChange, value, style, error} = props;

  const {t} = useTranslation();

  const onChangeCode = (text: string) => {
    onChangeText(text);
    onChange && onChange(text);
  };

  const ref = useBlurOnFulfill({value, cellCount: digits});
  const [propsCode, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeCode,
  });

  return (
    <View>
      <CodeField
        ref={ref}
        {...propsCode}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={onChangeCode}
        cellCount={digits}
        rootStyle={style}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol ? (
              <View style={styles.dot} />
            ) : isFocused ? (
              <Text style={styles.textCell}>
                <Cursor />
              </Text>
            ) : null}
          </View>
        )}
      />
      {!!error && <Text style={[styles.error]}>{t(error).toString()}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: getSize(64),
    height: getSize(64),
    borderRadius: getSize(16),
    borderWidth: getSize(1.5),
    borderColor: colors.neutralColor1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCell: {
    lineHeight: getSize(20) * 1.3,
    fontSize: getSize(20),
    color: colors.primary,
    textAlign: 'center',
    width: '100%',
    fontWeight: '600',
    backgroundColor: colors.transparent,
  },
  focusCell: {
    backgroundColor: colors.lightBlue,
    borderColor: colors.accentColor,
  },
  focusTextCell: {
    color: colors.accentColor,
    fontWeight: '600',
    backgroundColor: colors.lightBlue,
  },
  error: {
    marginTop: getSize(4),
    color: colors.red,
    fontSize: getSize(12),
  },
  dot: {
    width: getSize(12),
    height: getSize(12),
    borderRadius: getSize(999),
    backgroundColor: colors.primary,
  },
});
