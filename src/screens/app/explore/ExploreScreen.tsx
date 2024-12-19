import {AppContainer, AppText} from 'components';
import React from 'react';
import {useExploreScreen} from './useExploreScreen.hook';
import {colors, getSize} from 'themes';
import {RefreshControl, StyleSheet} from 'react-native';

export const ExploreScreen = () => {
  const {refreshing, onRefresh} = useExploreScreen();

  return (
    <AppContainer
      backgroundColor={colors.white}
      scrollable
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      statusBarProps={{backgroundColor: colors.white}}
      containerStyle={styles.container}
      title={'ExploreScreen'}>
      <AppText>Explore Screen content</AppText>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getSize(16),
    paddingBottom: getSize(32),
  },
});