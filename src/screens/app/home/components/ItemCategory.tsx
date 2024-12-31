import {Icons} from 'assets';
import {AppText, FlexView} from 'components';
import {ItemCategoryData} from 'interfaces/category.interface';
import React from 'react';
import {StyleSheet} from 'react-native';
import {colors, getSize} from 'themes';

interface ItemCategoryProps {
  item: ItemCategoryData;
}

export const ItemCategory = (props: ItemCategoryProps) => {
  const {item} = props;

  return (
    <FlexView
      borderColor={colors.neutralColor5}
      // borderWidth={1}
      borderRadius={4}
      onPress={() => {}}
      minHeight={getSize(44)}
      justifyContent="space-between"
      containerStyle={styles.container}
      backgroundColor={colors.transparent}>
      <AppText style={styles.title}>{item?.title}</AppText>
      {!!item?.amount && <Icons.ChevronForward />}
    </FlexView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
  },
  title: {
    fontSize: getSize(18),
    fontWeight: 'bold',
    color: colors.neutralColor1,
  },
});
