import {TAlignItems, TDirection, TJustifyContent} from 'interfaces';
import React from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {AppRadioButton} from './AppRadioButton';
import {colors, getSize} from 'themes';
import {AppText} from '../text';
import {useAppTranslation} from 'hooks';

interface IDataRadioButtonGroup {
  label: string;
  value: string;
  key?: string;
}

interface IAppRadioButtonGroupProps<
  T extends Record<string, any> = IDataRadioButtonGroup,
  K extends keyof T = keyof T,
> {
  containerStyle?: StyleProp<ViewStyle>;
  buttonGroupStyle?: StyleProp<ViewStyle>;
  radioButtonStyle?: StyleProp<ViewStyle>;
  boxColor?: string;
  data: T[];
  labelKey?: K;
  renderLabel?: (item: T) => string;
  renderTitle?: (item: T, index?: number) => React.ReactNode;
  keyExtractor?: (item?: T, index?: number) => string;
  onChange?: (item?: T, index?: number) => void;
  value?: T;
  useValue?: boolean;
  initialIndexSelected?: number;
  initialKeySelected?: string;
  titleStyle?: StyleProp<TextStyle>;
  titleColor?: string;
  direction?: TDirection;
  alignItems?: TAlignItems;
  justifyContent?: TJustifyContent;
  gap?: number;
  disabled?: boolean;
  error?: string;
  errStyle?: StyleProp<TextStyle>;
}

export const AppRadioButtonGroup = <
  T extends Record<string, any> = IDataRadioButtonGroup,
  K extends keyof T = keyof T,
>(
  props: IAppRadioButtonGroupProps<T, K>,
) => {
  const {
    containerStyle,
    buttonGroupStyle,
    data,
    labelKey = 'label',
    renderLabel,
    renderTitle,
    keyExtractor,
    onChange,
    value,
    useValue,
    // initialIndexSelected,
    initialKeySelected,
    titleStyle,
    titleColor,
    gap = getSize(12),
    alignItems,
    boxColor,
    justifyContent,
    disabled,
    direction,
    radioButtonStyle,
    errStyle,
    error,
  } = props;
  const {t} = useAppTranslation();
  const getLabel = (item: any) =>
    renderLabel ? renderLabel(item) : (item?.[labelKey] as string) ?? '';
  const [selectedKey, setSelectedKey] = React.useState<string | undefined>(
    initialKeySelected ?? value?.key,
  );
  // const [selectedIndex, setSelectedIndex] = React.useState<number>(
  //   initialIndexSelected ?? -1,
  // );

  const convertDataWithKey = React.useMemo(
    () =>
      data.map((item, index) => ({
        ...item,
        key: keyExtractor?.(item, index) ?? index.toString(),
      })),
    [data, keyExtractor],
  );

  React.useEffect(() => {
    if (useValue) {
      setSelectedKey(keyExtractor?.(value as T, -1));
      // setSelectedIndex(
      //   convertDataWithKey.findIndex(
      //     item => item.key === keyExtractor?.(value as T, -1),
      //   ),
      // );
    }
  }, [value, convertDataWithKey, useValue, keyExtractor]);

  const _renderItem = (item: T, index: number) => {
    const isSelected = selectedKey === item?.key;

    return (
      <AppRadioButton
        key={`${item?.key}${index}`}
        title={getLabel(item)}
        titleStyle={titleStyle}
        titleColor={titleColor}
        value={isSelected}
        disabled={disabled || isSelected}
        boxColor={boxColor}
        containerStyle={radioButtonStyle}
        customTitle={renderTitle?.(item, index)}
        onChange={() => {
          // setSelectedIndex(index);
          setSelectedKey(item?.key);
          onChange?.(item, index);
        }}
      />
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.container,
          buttonGroupStyle,
          {
            flexDirection: direction,
            alignItems: alignItems,
            justifyContent: justifyContent,
            gap,
          },
        ]}>
        {convertDataWithKey.map(_renderItem)}
      </View>
      {!!error && (
        <AppText style={[styles.error, errStyle]}>
          {t(error).toString()}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  error: {
    marginTop: getSize(4),
    color: colors.red,
    fontSize: getSize(12),
  },
});
