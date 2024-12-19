import {AppContainer, AppText} from 'components';
import React from 'react';
import {useRandomScreen} from './useRandomScreen.hook';
import {colors, getSize} from 'themes';
import {RefreshControl, StyleSheet} from 'react-native';

export const RandomScreen = () => {
  const {refreshing, onRefresh} = useRandomScreen();

  return (
    <AppContainer
      backgroundColor={colors.white}
      scrollable
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      statusBarProps={{backgroundColor: colors.white}}
      containerStyle={styles.container}
      title={'RandomScreen'}>
      <AppText>Random Screen content</AppText>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getSize(16),
    paddingBottom: getSize(32),
  },
});