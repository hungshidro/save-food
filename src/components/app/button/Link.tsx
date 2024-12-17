import {AppText} from 'components/common';
import {navigate} from 'navigation';
import React from 'react';
import {Linking, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, getSize} from 'themes';

interface ILinkProps {
  path?: string;
  title?: string;
  onPress?: (path?: string) => void;
}

export const AppLink = (props: ILinkProps) => {
  const {path, onPress, title} = props;

  const onNavigate = () => {
    if (onPress) {
      onPress(path);
      return;
    }
    if (!path) {
      return;
    }
    if (path.includes('http') || path.includes('https')) {
      Linking.openURL(path);
    } else {
      navigate(path);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.65}
      onPress={onNavigate}
      style={styles.container}>
      <AppText style={styles.text}>{title ?? path}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    fontSize: getSize(16),
    lineHeight: getSize(16) * 1.2,
    color: colors.primary,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
