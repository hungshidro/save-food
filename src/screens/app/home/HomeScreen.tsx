import {AppContainer, AppText} from 'components';
import React from 'react';
import {useHomeScreen} from './useHomeScreen.hook';
import {colors, getSize} from 'themes';
import {RefreshControl, StyleSheet} from 'react-native';

export const HomeScreen = () => {
  const {refreshing, onRefresh} = useHomeScreen();

  return (
    <AppContainer
      backgroundColor={colors.white}
      scrollable
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      statusBarProps={{backgroundColor: colors.white}}
      containerStyle={styles.container}
      title={'HomeScreen'}>
      <AppText>Home Screen content</AppText>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getSize(16),
    paddingBottom: getSize(32),
  },
});