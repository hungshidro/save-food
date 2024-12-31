import {AppContainer} from 'components';
import React from 'react';
import {useHomeScreen} from './useHomeScreen.hook';
import {colors, getSize} from 'themes';
import {StyleSheet} from 'react-native';
import {Icons} from 'assets';
import {ListCategory} from './components';
import {mockListCategories} from 'mock/category.mock';
import PagerView from 'react-native-pager-view';

export const HomeScreen = () => {
  const {} = useHomeScreen();

  return (
    <AppContainer
      backgroundColor={colors.whiteF5}
      scrollable={false}
      statusBarProps={{backgroundColor: colors.white}}
      containerStyle={styles.container}
      showLeading={false}
      titleCenter
      iconRight={<Icons.Plus size={getSize(36)} />}
      title={'HomeScreen'}>
      <PagerView style={{flex: 1}}>
        <ListCategory data={mockListCategories} />
        <ListCategory data={mockListCategories} />
        <ListCategory data={mockListCategories} />
      </PagerView>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: getSize(16),
    paddingBottom: getSize(32),
  },
});
