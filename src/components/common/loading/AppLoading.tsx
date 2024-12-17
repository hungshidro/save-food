import React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import {colors} from 'themes';
import {useAppStore} from 'zustands';
import {useShallow} from 'zustand/react/shallow';
import {isIOS} from 'configs';

export const AppLoading = () => {
  const {loading} = useAppStore(
    useShallow(state => ({loading: state.loading})),
  );
  return isIOS ? (
    loading ? (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    ) : null
  ) : (
    <Modal transparent statusBarTranslucent visible={loading}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 9999,
  },
});
