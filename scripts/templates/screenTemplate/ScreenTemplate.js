module.exports = function createScreenTemplate(screenName) {
  const arrayName = screenName.split('_');
  const capitalizeName = arrayName
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join('');

  return `import {AppContainer, AppText} from 'components';
import React from 'react';
import {use${capitalizeName}Screen} from './use${capitalizeName}Screen.hook';
import {colors, getSize} from 'themes';
import {RefreshControl, StyleSheet} from 'react-native';

export const ${capitalizeName}Screen = () => {
  const {refreshing, onRefresh} = use${capitalizeName}Screen();

  return (
    <AppContainer
      backgroundColor={colors.white}
      scrollable
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      statusBarProps={{backgroundColor: colors.white}}
      containerStyle={styles.container}
      title={'${capitalizeName}Screen'}>
      <AppText>${capitalizeName} Screen content</AppText>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: getSize(16),
    paddingBottom: getSize(32),
  },
});`;
};
