import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {appWidth} from 'themes';
import {ItemCategory} from './ItemCategory';
import {ItemCategoryData} from 'interfaces/category.interface';

interface IListCategoryProps {
  data: ItemCategoryData[];
}

export function ListCategory(props: IListCategoryProps) {
  const {data} = props;

  const renderItem = ({item}: {item: ItemCategoryData; index: number}) => {
    return <ItemCategory item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: appWidth,
    height: '100%',
    paddingHorizontal: 16,
  },
});
