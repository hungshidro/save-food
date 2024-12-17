import React from 'react';
import {
  StatusBar,
  StatusBarProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, getSize} from 'themes';
import {AppText} from '../text';
import {useAppTranslation} from 'hooks';
import {goBack} from 'navigation';
import {TKeyTranslation} from 'interfaces';
import {Icons} from 'assets';

export type AppheaderProps = {
  title?: TKeyTranslation;
  absolute?: boolean;
  mode?: 'light' | 'dark';
  iconReturn?: React.ReactNode;
  returnEnabled?: boolean;
  onReturn?: () => void;
  iconRight?: React.ReactNode;
  onClickRight?: () => void;
  statusBarProps?: StatusBarProps;
  headerShown?: boolean;
  leading?: React.ReactNode;
};

export const AppHeader = (props: AppheaderProps) => {
  const {t} = useAppTranslation();

  const {
    title,
    absolute,
    mode = 'dark',
    iconReturn,
    returnEnabled = true,
    onReturn,
    iconRight,
    onClickRight,
    statusBarProps,
    headerShown,
    leading,
  } = props;

  // useEffect(() => {
  //   StatusBar.setBarStyle();
  // }, [mode]);

  const onClickReturn = () => {
    if (returnEnabled && onReturn) {
      onReturn();
      return;
    }
    goBack();
  };

  return (
    <>
      {headerShown && (
        <View style={[styles.container, absolute && styles.absoluteContainer]}>
          {!returnEnabled ? (
            <View style={styles.viewLeft} />
          ) : leading ? (
            leading
          ) : (
            <TouchableOpacity onPress={onClickReturn} style={styles.viewLeft}>
              {iconReturn ? (
                iconReturn
              ) : (
                <Icons.ArrowLeft
                  color={mode === 'dark' ? colors.neutralColor1 : colors.white}
                />
              )}
            </TouchableOpacity>
          )}
          {title && (
            <AppText
              style={[styles.title, mode === 'light' && styles.lightTitle]}>
              {t(title)}
            </AppText>
          )}
          <TouchableOpacity
            onPress={onClickRight}
            disabled={!onClickRight || !iconRight}
            style={styles.viewRight}>
            {iconRight && iconRight}
          </TouchableOpacity>
        </View>
      )}
      <StatusBar
        barStyle={mode === 'dark' ? 'dark-content' : 'light-content'}
        {...statusBarProps}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // justifyContent: 'space-between',
    minHeight: getSize(32),
    flexDirection: 'row',
    // marginTop: getSize(16),
    // paddingHorizontal: getSize(16),
    padding: getSize(16),
  },
  absoluteContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  },
  title: {
    fontSize: getSize(20),
    fontWeight: '600',
    lineHeight: getSize(26),
    color: colors.black,
    letterSpacing: -0.165,
  },
  lightTitle: {
    color: colors.white,
  },
  viewLeft: {
    width: getSize(32),
    height: getSize(32),
  },
  viewRight: {
    width: getSize(32),
    height: getSize(32),
  },
});
