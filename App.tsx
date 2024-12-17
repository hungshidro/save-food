/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';

import {colors} from 'themes';
import {AppLoading} from 'components';
import {AppNavigator} from 'navigation';
import {initI18n} from 'localization';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

initI18n();
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={colors.transparent}
      />
      <KeyboardProvider>
        <QueryClientProvider client={queryClient}>
          <AppNavigator />
        </QueryClientProvider>
      </KeyboardProvider>
      <AppLoading />
    </>
  );
}

export default App;
