import {AppContainer, AppText} from 'components';
import React from 'react';
import {useSettingScreen} from './useSettingScreen.hook';
import {colors, getSize} from 'themes';
import {RefreshControl, StyleSheet} from 'react-native';

export const SettingScreen = () => {
  const {refreshing, onRefresh} = useSettingScreen();

  return (
    <AppContainer
      backgroundColor={colors.white}
      scrollable
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      statusBarProps={{backgroundColor: colors.white}}
      containerStyle={styles.container}
      title={'SettingScreen'}>
      <AppText>Setting Screen content</AppText>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getSize(16),
    paddingBottom: getSize(32),
  },
});