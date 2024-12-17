import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputFocusEventData,
  NativeSyntheticEvent,
  TextInputProps,
  TouchableOpacity,
  TextInputContentSizeChangeEventData,
} from 'react-native';

import {colors, getSize} from 'themes';
import {FontWeight, TKeyTranslation} from 'interfaces';
import {AppText} from '../text';
import {useAppTranslation} from 'hooks';
import {EFontFamily} from 'enums';
import {Icons} from 'assets';

export type AppInputProps = {
  title?: TKeyTranslation | null;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean;
  error?: string;
  errStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle> & {
    fontWeight?: FontWeight;
  };
  required?: boolean;
  inputContainerStyle?: StyleProp<ViewStyle>;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  maxLength?: number;
  prefix?: React.ReactNode;
  fontType?: EFontFamily;
  height?: number;
  focusColor?: string;
  prefixStyle?: StyleProp<ViewStyle>;
  isTranslate?: boolean;
} & TextInputProps;

export const AppInput = (props: AppInputProps) => {
  const {
    title,
    titleStyle,
    containerStyle,
    secureTextEntry,
    error,
    errStyle,
    inputStyle,
    onFocus,
    onBlur,
    value,
    placeholder,
    inputContainerStyle,
    multiline = false,
    maxLength,
    required,
    prefix,
    height: inputHeight = getSize(40),
    focusColor,
    prefixStyle,
    isTranslate = true,
    ...rest
  } = props;

  const [secure, setSecure] = useState(
    secureTextEntry ? secureTextEntry : false,
  );
  const [height, setHeight] = useState(inputHeight);
  const [isFocus, setIsFocus] = useState(false);

  const inputContainerFlattenStyle = StyleSheet.flatten(inputContainerStyle);
  const maxHeight = (inputContainerFlattenStyle as ViewStyle)?.maxHeight;
  const inputRef = useRef<TextInput>(null);
  const {t} = useAppTranslation();

  const handleFocus = (e?: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (onFocus && e) {
      onFocus(e);
    }
    setIsFocus(true);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (onBlur) {
      onBlur(e);
    }
    setIsFocus(false);
  };

  const onChangeStateEye = useCallback(() => {
    setSecure(!secure);
  }, [secure]);

  const onPressInputView = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (value) {
      handleFocus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  //animated placeholder
  // const animatedValue = useRef(new Animated.Value(0));

  //caculate maxHeight of input when mutiline is true
  const onContentSizeChange = (
    e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
  ) => {
    const h = e.nativeEvent.contentSize.height;
    const newHeight = Math.max(
      //inputHeight is the default height of input
      inputHeight,
      //maxHeight is the max height of input pass from inputContainerStyle
      //h is the height of input when typing
      Math.min(parseInt(maxHeight?.toString() ?? h.toString(), 10), h),
    );
    setHeight(height !== newHeight ? newHeight : height);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPressInputView}
      style={[styles.container, containerStyle]}>
      <View>
        {title && (
          <AppText style={[styles.txtTitle, titleStyle]}>
            {isTranslate ? t(title).toString() : title}
            {required && <Text style={styles.required}>*</Text>}
          </AppText>
        )}
        <View
          style={[
            styles.viewInput,
            {
              // minHeight: inputHeight,
              // maxHeight: inputHeight,
            },
            inputContainerStyle,
            multiline && {
              maxHeight: height,
            },
            isFocus && [
              styles.viewFocus,
              focusColor && {
                borderColor: focusColor,
              },
            ],
            !!error && styles.viewError,
          ]}>
          {prefix && (
            <View style={[styles.prefixView, prefixStyle]}>{prefix}</View>
          )}
          <TextInput
            placeholderTextColor={colors.neutralColor5}
            style={[styles.input, inputStyle]}
            secureTextEntry={secure}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            placeholder={placeholder}
            selectionColor="#505C45"
            numberOfLines={multiline ? 4 : undefined}
            ref={inputRef}
            multiline={multiline}
            onContentSizeChange={onContentSizeChange}
            maxLength={maxLength}
            {...rest}
          />
          {secureTextEntry ? (
            <TouchableOpacity onPress={onChangeStateEye}>
              {secure ? <Icons.EyeClose /> : <Icons.EyeIcon />}
            </TouchableOpacity>
          ) : null}
        </View>
        {!!error && (
          <AppText style={[styles.error, errStyle]}>
            {t(error).toString()}
          </AppText>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
  },
  txtTitle: {
    fontSize: getSize(14),
    color: colors.neutralColor3,
    lineHeight: getSize(14) * 1.2,
    marginBottom: getSize(8),
  },
  required: {
    color: colors.borderErrorInput,
    marginLeft: getSize(6),
  },
  viewInput: {
    borderWidth: getSize(1),
    borderColor: colors.neutralColor5,
    borderRadius: getSize(16),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: getSize(12),
    gap: getSize(8),
    minHeight: getSize(40),
  },
  viewFocus: {
    // borderColor: colors.neutralColor6,
  },
  viewError: {
    // borderColor: colors.borderErrorInput,
  },
  input: {
    color: colors.black,
    fontSize: getSize(16),
    lineHeight: getSize(16) * 1.2,
    fontWeight: '400',
    flexGrow: 1,
    flexShrink: 1,
    textAlign: 'left',
    textAlignVertical: 'center',
    // height: '100%',
    // padding: 0,
  },
  error: {
    marginTop: getSize(4),
    color: colors.red,
    fontSize: getSize(12),
  },
  iconEye: {
    width: getSize(24),
    height: getSize(24),
    marginLeft: getSize(20),
    marginRight: getSize(12),
  },
  prefixView: {
    paddingHorizontal: getSize(10),
    paddingVertical: getSize(4),
  },
});
