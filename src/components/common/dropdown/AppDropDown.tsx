/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {
  FlatList,
  GestureResponderEvent,
  LayoutChangeEvent,
  Modal,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {colors, getSize} from 'themes';
import {AppText} from '../text';
import {Icons} from 'assets';
import {TKeyTranslation} from 'interfaces';
import {caculateOpacityColor} from 'ultils/ui';
import {useAppTranslation} from 'hooks';

interface IDataDropDown {
  label: string;
  value: string;
  key?: string;
  dataIndex?: number;
}

interface IAppDropDownProps<
  T extends Record<string, any> = IDataDropDown,
  K extends keyof T = keyof T,
> {
  containerStyle?: StyleProp<ViewStyle>;
  data: T[];
  labelKey?: K;
  placeholder?: TKeyTranslation;
  maxHeight?: number;
  renderItem?: (item: T) => React.ReactNode;
  renderLabel?: (item: T) => string;
  keyExtractor?: (item?: T, index?: number) => string;
  renderValue?: (item: T) => string;
  onChange?: (item?: T, index?: number) => void;
  onChangeMutilple?: (
    item?: T[],
    index?: number[],
    changeItem?: T,
    state?: 'remove' | 'add' | 'clear',
  ) => void;
  onClear?: () => void;
  filterOption?: (filterValue: string, item?: T, index?: number) => boolean;
  ItemSeparatorComponent?: React.ComponentType<any>;
  dropdownContainerStyle?: StyleProp<ViewStyle>;
  title?: TKeyTranslation;
  titleStyle?: StyleProp<TextStyle>;
  initialIndexSelected?: number;
  initialKeySelected?: string;
  value?: T;
  mutilpleValue?: T[];
  error?: string;
  errStyle?: StyleProp<TextStyle>;
  mutilple?: boolean;
  children?: React.ReactNode;
  defaultKeySelected?: string;
  defaultIndexSelected?: number;
  clearAble?: boolean;
}
interface IPosition {
  x: number;
  y: number;
}

export const AppDropDown = <
  T extends Record<string, any> = IDataDropDown,
  K extends keyof T = keyof T,
>(
  props: IAppDropDownProps<T, K>,
) => {
  const {
    data,
    value,
    labelKey = 'label',
    containerStyle,
    title,
    titleStyle,
    dropdownContainerStyle,
    placeholder,
    maxHeight = getSize(250),
    initialIndexSelected,
    initialKeySelected,
    renderItem,
    keyExtractor,
    renderValue,
    onChange,
    onChangeMutilple,
    onClear,
    renderLabel,
    filterOption,
    ItemSeparatorComponent,
    errStyle,
    error,
    mutilple = false,
    mutilpleValue = [],
    children,
    defaultIndexSelected,
    defaultKeySelected,
    clearAble = true,
  } = props;
  const {t} = useAppTranslation();
  const getLabel = (item: any) =>
    renderLabel ? renderLabel(item) : (item?.[labelKey] as string) ?? '';
  const isUseValue =
    props.hasOwnProperty('value') || props.hasOwnProperty('mutilpleValue');

  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [containerHeight, setContainerHeight] = React.useState<number>(0);
  const [modalHeight, setModalHeight] = React.useState<number>(0);
  const [containerWidth, setContainerWidth] = React.useState<number>(0);
  const [position, setPosition] = React.useState<IPosition>({x: 0, y: 0});
  const [selectedKey, setSelectedKey] = React.useState<string | undefined>(
    initialKeySelected ?? value?.key,
  );
  const [selectedIndex, setSelectedIndex] = React.useState<number>(
    initialIndexSelected ?? -1,
  );
  const [listSelectedKey, setListSelectedKey] = React.useState<string[]>([]);
  const [listSelectedIndex, setListSelectedIndex] = React.useState<number[]>(
    [],
  );
  const [inputValue, setValue] = React.useState('');

  const firstIndex = useMemo(() => {
    if (mutilple) {
      return listSelectedIndex?.[0] ?? -1;
    }
    return selectedIndex;
  }, [selectedIndex, listSelectedIndex, mutilple]);

  const containerRef = React.useRef<View>(null);
  const listRef = React.useRef<FlatList<T>>(null);

  const convertDataWithKey = React.useMemo(
    () =>
      data.map((item, index) => ({
        ...item,
        key: keyExtractor ? keyExtractor(item, index) : index.toString(),
        dataIndex: index,
      })),
    [data, keyExtractor],
  );

  React.useEffect(() => {
    if (isUseValue && !mutilple) {
      setSelectedKey(keyExtractor?.(value as T, -1));
      setSelectedIndex(
        convertDataWithKey.findIndex(
          item => item.key === keyExtractor?.(value as T, -1),
        ),
      );
    }
    if (isUseValue && mutilple) {
      const selectedKeys = mutilpleValue?.map?.(
        item => keyExtractor?.(item, -1) ?? '',
      );
      const selectedIndexes =
        mutilpleValue?.map?.(item =>
          item?.dataIndex
            ? item?.dataIndex
            : convertDataWithKey.findIndex(
                i => i.key === keyExtractor?.(item, -1) ?? '',
              ),
        ) ?? [];
      setListSelectedKey(selectedKeys ?? []);
      setListSelectedIndex(selectedIndexes);
    }
  }, [
    value,
    convertDataWithKey,
    isUseValue,
    keyExtractor,
    mutilple,
    mutilpleValue,
  ]);

  React.useEffect(() => {
    if (defaultKeySelected) {
      setSelectedKey(defaultKeySelected);
      setSelectedIndex(
        convertDataWithKey.findIndex(item => item.key === defaultKeySelected),
      );
    }
  }, [convertDataWithKey]);

  React.useEffect(() => {
    if (defaultIndexSelected) {
      setSelectedKey(convertDataWithKey[defaultIndexSelected].key);
      setSelectedIndex(defaultIndexSelected);
    }
  }, [convertDataWithKey]);

  const filteredData = React.useMemo(() => {
    const dataWithKey = convertDataWithKey;
    return dataWithKey.filter((val, index) => {
      if (!inputValue) {
        return true;
      }
      return filterOption
        ? filterOption(inputValue, val, index)
        : getLabel(val).includes(inputValue);
    });
  }, [data, keyExtractor, inputValue]);

  const onLayout = (event: LayoutChangeEvent) => {
    if (position.x === 0 && position.y === 0) {
      event.currentTarget.measure((_x, _y, width, height, px, py) => {
        setContainerHeight(height);
        setContainerWidth(width);
        setPosition({x: px, y: py});
      });
    }
  };

  const onModalLayout = (event: LayoutChangeEvent) => {
    if (modalHeight === 0) {
      setModalHeight(event.nativeEvent.layout.height);
    }
  };

  const onOpenDropdown = (e: GestureResponderEvent) => {
    e.currentTarget.measureInWindow((x, y, width, height) => {
      setContainerHeight(height);
      setContainerWidth(width);
      setPosition({x: x, y: y});
    });
    setShowModal(true);
  };

  const clearSelected = () => {
    setSelectedKey(undefined);
    setSelectedIndex(-1);
    setListSelectedIndex([]);
    setListSelectedKey([]);
    setValue('');
    onChange?.(undefined, -1);
    onChangeMutilple?.([], [], undefined, 'clear');
    onClear?.();
    setShowModal(false);
  };

  const onSelectItem = (item: T, index: number) => {
    if (mutilple) {
      let draftListSelectedIndex = [...listSelectedIndex];
      let draftListSelectedKey = [...listSelectedKey];
      let state: 'add' | 'remove' = 'add';
      if (listSelectedKey.includes(item.key)) {
        draftListSelectedKey = listSelectedKey.filter(key => key !== item.key);
        draftListSelectedIndex = listSelectedIndex.filter(i => i !== index);
        state = 'remove';
      } else {
        draftListSelectedKey = [...listSelectedKey, item.key];
        draftListSelectedIndex = [...listSelectedIndex, index];
      }
      setListSelectedKey(draftListSelectedKey);
      setListSelectedIndex(draftListSelectedIndex);
      setShowModal(false);
      setValue('');
      const selectedItems = draftListSelectedIndex.map(
        indexSelected => convertDataWithKey[indexSelected],
      );
      onChangeMutilple?.(selectedItems, draftListSelectedIndex, item, state);
    } else {
      setSelectedKey(item.key);
      setSelectedIndex(index);
      setValue('');
      onChange?.(item, index);
      setShowModal(false);
    }
  };

  const isSelectedItem = (item: T) => {
    if (mutilple) {
      return listSelectedKey.includes(item.key);
    }
    return selectedKey === item.key;
  };

  const onItemLayout = (index: number) => {
    if (firstIndex === index) {
      listRef.current?.scrollToIndex({
        index: firstIndex,
        animated: true,
      });
    }
  };

  const _renderItem = ({item, index}: {item: T; index: number}) => {
    const isSelected = isSelectedItem(item);
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[
          styles.itemContainer,
          isSelected && {
            backgroundColor: caculateOpacityColor(colors.primary, 0.5),
          },
        ]}
        onLayout={() => onItemLayout(index)}
        onPress={() => onSelectItem(item, item?.dataIndex ?? index)}>
        {renderItem ? (
          renderItem(item)
        ) : (
          <AppText style={styles.itemText}>{getLabel(item) ?? ''}</AppText>
        )}
      </TouchableOpacity>
    );
  };

  const getTopPosition = () => {
    if (position.y + containerHeight + maxHeight + getSize(4) > modalHeight) {
      //value: position.y - getSize(250) - getSize(4)
      return {
        value: modalHeight - position.y + getSize(4),
        isTop: false,
      };
    }
    return {
      value: position.y + containerHeight + getSize(4),
      isTop: true,
    };
  };

  const onFocusInput = () => {
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.measure((_x, _y, width, height, px, py) => {
          setPosition({x: px, y: py});
        });
      }
    }, 700);
  };

  const renderModal = () => {
    const caculatedPosition = getTopPosition();

    return (
      <Modal
        visible={showModal}
        transparent
        // statusBarTranslucent
        animationType="fade"
        onRequestClose={() => setShowModal(false)}>
        <View onLayout={onModalLayout} style={styles.modalContainer}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.overlay}
            onPress={() => {
              setShowModal(false);
              setValue('');
            }}
          />
          <TouchableOpacity
            style={[
              styles.dropdownContainer,
              dropdownContainerStyle,
              {
                position: 'absolute',
                top: position.y,
                left: position.x,
                width: containerWidth,
                height: containerHeight,
                borderColor: colors.neutralColor3,
                backgroundColor: colors.white,
              },
            ]}
            onLayout={onLayout}>
            <TextInput
              value={inputValue}
              onChangeText={setValue}
              style={styles.value}
              placeholder={placeholder}
              onFocus={onFocusInput}
              placeholderTextColor={colors.neutralColor3}
            />
            {!!selectedKey && clearAble && (
              <TouchableOpacity
                hitSlop={20}
                activeOpacity={0.7}
                onPress={clearSelected}>
                <Icons.CloseOutline color={colors.neutralColor3} />
              </TouchableOpacity>
            )}
            <View
              style={[
                styles.separate,
                {
                  height: containerHeight - getSize(8),
                },
              ]}
            />
            <TouchableOpacity
              onPress={() => {
                setShowModal(false);
                setValue('');
              }}
              style={styles.iconContainer}>
              <Icons.ChevronDownIcon
                color={colors.neutralColor3}
                strokeWidth={1}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <FlatList
            style={[
              styles.listItem,
              !!maxHeight && {maxHeight},
              {
                left: position.x,
                width: containerWidth,
                backgroundColor: colors.white,
                borderRadius: getSize(16),
                borderWidth: getSize(1),
                borderColor: colors.neutralColor5,
              },
              caculatedPosition.isTop
                ? {
                    top: caculatedPosition?.value,
                  }
                : {
                    bottom: caculatedPosition?.value,
                  },
            ]}
            contentContainerStyle={styles.listItemContainer}
            data={filteredData}
            renderItem={_renderItem}
            keyExtractor={keyExtractor}
            ref={listRef}
            ItemSeparatorComponent={ItemSeparatorComponent}
          />
        </View>
      </Modal>
    );
  };

  const renderSelectedValue = () => {
    if (selectedKey) {
      return (
        <AppText style={styles.value}>
          {renderValue
            ? renderValue(convertDataWithKey?.[selectedIndex])
            : getLabel(convertDataWithKey?.[selectedIndex])}
        </AppText>
      );
    } else {
      return <AppText style={styles.placeholder}>{placeholder ?? ''}</AppText>;
    }
  };

  const renderMultipleSelectedValue = () => {
    if (listSelectedIndex.length) {
      return (
        <View style={styles.listMuitiple}>
          {listSelectedIndex.map(item => {
            if ((item ?? -1) < 0) {
              return null;
            }
            return (
              <TouchableOpacity
                key={`${item}`}
                activeOpacity={0.7}
                style={styles.selectedItem}
                onPress={() => {
                  onSelectItem(convertDataWithKey[item], item);
                }}>
                <AppText
                  key={`text${item}`}
                  numberOfLines={2}
                  style={[styles.value, {flexGrow: 0}]}>
                  {renderValue
                    ? renderValue(data?.[item])
                    : getLabel(data?.[item])}
                </AppText>
                <Icons.CloseOutline
                  color={colors.neutralColor3}
                  hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      );
    } else {
      return <AppText style={styles.placeholder}>{placeholder ?? ''}</AppText>;
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {title && <AppText style={[styles.title, titleStyle]}>{title}</AppText>}
      <TouchableOpacity
        onPress={onOpenDropdown}
        style={[
          styles.dropdownContainer,
          dropdownContainerStyle,
          {
            opacity: showModal ? 0 : 1,
          },
        ]}
        ref={containerRef}
        onLayout={onLayout}>
        {mutilple ? renderMultipleSelectedValue() : renderSelectedValue()}
        {(!!selectedKey || !!listSelectedIndex.length) && clearAble && (
          <TouchableOpacity
            hitSlop={20}
            activeOpacity={0.7}
            onPress={clearSelected}>
            <Icons.CloseOutline color={colors.neutralColor3} />
          </TouchableOpacity>
        )}
        <View style={[styles.separate]} />
        <View style={styles.iconContainer}>
          <Icons.ChevronDownIcon color={colors.neutralColor3} strokeWidth={1} />
        </View>
        {renderModal()}
      </TouchableOpacity>
      {children}
      {!!error && (
        <AppText style={[styles.error, errStyle]}>
          {t(error).toString()}
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexShrink: 1,
    gap: getSize(8),
  },
  title: {
    fontSize: getSize(14),
    lineHeight: getSize(14) * 1.2,
    color: colors.neutralColor1,
  },
  dropdownContainer: {
    width: '100%',
    minHeight: getSize(40),
    borderRadius: getSize(16),
    borderWidth: getSize(1),
    borderColor: colors.neutralColor5,
    flexDirection: 'row',
    paddingHorizontal: getSize(12),
    alignItems: 'center',
    gap: getSize(8),
    position: 'relative',
    paddingVertical: getSize(4),
  },
  placeholder: {
    fontSize: getSize(14),
    lineHeight: getSize(14) * 1.2,
    color: colors.neutralColor3,
    flexGrow: 1,
    flexShrink: 1,
  },
  value: {
    fontSize: getSize(14),
    lineHeight: getSize(14) * 1.2,
    color: colors.neutralColor1,
    flexGrow: 1,
    flexShrink: 1,
    padding: 0,
  },
  separate: {
    width: getSize(1),
    backgroundColor: colors.neutralColor5,
    height: '100%',
  },
  modalContainer: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    zIndex: -1,
  },
  iconContainer: {
    width: getSize(32),
    height: getSize(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    position: 'absolute',
    minHeight: getSize(52),
    borderRadius: getSize(16),
    backgroundColor: colors.white,
    borderWidth: getSize(1),
    borderColor: colors.neutralColor5,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  listItemContainer: {
    // gap: getSize(8),
    paddingBottom: getSize(16),
    paddingVertical: getSize(12),
    borderRadius: getSize(16),
    overflow: 'hidden',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: getSize(8),
    paddingHorizontal: getSize(12),
    minHeight: getSize(40),
  },
  itemText: {
    color: colors.neutralColor1,
    fontSize: getSize(14),
    lineHeight: getSize(14) * 1.2,
    fontWeight: '500',
  },
  error: {
    // marginTop: getSize(4),
    color: colors.red,
    fontSize: getSize(12),
  },
  listMuitiple: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: getSize(8),
    alignItems: 'center',
    flexShrink: 1,
    width: '100%',
    marginVertical: getSize(4),
    marginRight: getSize(8),
  },
  selectedItem: {
    minHeight: getSize(32),
    borderRadius: getSize(8),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: getSize(4),
    paddingHorizontal: getSize(12),
    paddingVertical: getSize(4),
    backgroundColor: colors.neutralColor7,
  },
});
