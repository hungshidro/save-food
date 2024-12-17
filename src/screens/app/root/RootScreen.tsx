import {AppContainer, AppText} from 'components';
import React from 'react';
import {useRootScreen} from './useRootScreen.hook';
import {colors, getSize} from 'themes';
import {RefreshControl, StyleSheet} from 'react-native';

export const RootScreen = () => {
  const {refreshing, onRefresh} = useRootScreen();

  return (
    <AppContainer
      backgroundColor={colors.white}
      scrollable
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      statusBarProps={{backgroundColor: colors.white}}
      containerStyle={styles.container}
      title={'Root Screen'}>
      <AppText>Root Screen content</AppText>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getSize(16),
    paddingBottom: getSize(32),
  },
});
