import React from 'react';
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  Modal,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {appWidth, colors, getSize} from 'themes';
import {FlexView} from './FlexView';
import {Icons} from 'assets';
import {AppText} from '../text';
import {ILabelValue} from 'interfaces';

interface IMonthSelectWrapperProps {
  children?: React.ReactNode;
  value?: string;
  onChangeMonthYear?: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  popupContainerStyle?: StyleProp<ViewStyle>;
  yearContainerStyle?: StyleProp<ViewStyle>;
  yearTextStyle?: StyleProp<TextStyle>;
  monthContainerStyle?: StyleProp<ViewStyle>;
  monthTextStyle?: StyleProp<TextStyle>;
}

interface IPosition {
  x: number;
  y: number;
}

//label in japanese
const LIST_MONTH: Required<ILabelValue<string>>[] = [
  {label: '1月', value: '01'},
  {label: '2月', value: '02'},
  {label: '3月', value: '03'},
  {label: '4月', value: '04'},
  {label: '5月', value: '05'},
  {label: '6月', value: '06'},
  {label: '7月', value: '07'},
  {label: '8月', value: '08'},
  {label: '9月', value: '09'},
  {label: '10月', value: '10'},
  {label: '11月', value: '11'},
  {label: '12月', value: '12'},
];

export const MonthSelectWrapper = (props: IMonthSelectWrapperProps) => {
  const {
    children,
    onChangeMonthYear,
    value,
    containerStyle,
    monthContainerStyle,
    yearContainerStyle,
    yearTextStyle,
    monthTextStyle,
    popupContainerStyle,
  } = props;
  const [yearSelected, monthSelected] = value?.split('-') || [];
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [year, setYear] = React.useState<number>(
    parseInt(yearSelected ?? currentYear, 10),
  );
  const [month, setMonth] = React.useState<number>(
    parseInt(monthSelected ?? currentMonth, 10),
  );
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [containerHeight, setContainerHeight] = React.useState<number>(0);
  const [modalHeight, setModalHeight] = React.useState<number>(0);
  const [popupHeight, setPopupHeight] = React.useState<number>(0);
  const [containerWidth, setContainerWidth] = React.useState<number>(0);
  const [position, setPosition] = React.useState<IPosition>({x: 0, y: 0});

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

  const onPopupLayout = (event: LayoutChangeEvent) => {
    if (popupHeight !== event.nativeEvent.layout.height) {
      setPopupHeight(event.nativeEvent.layout.height);
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

  const getTopPosition = () => {
    if (position.y + containerHeight + popupHeight + getSize(4) > modalHeight) {
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
            }}
          />
          <View
            style={[
              styles.listItem,
              {
                left: position.x,
                width: appWidth - position.x * 2,
                minWidth: containerWidth,
              },
              caculatedPosition.isTop
                ? {
                    top: caculatedPosition?.value,
                  }
                : {
                    bottom: caculatedPosition?.value,
                  },
              popupContainerStyle,
            ]}>
            <FlexView
              justifyContent="space-between"
              containerStyle={yearContainerStyle}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setYear(year - 1)}
                hitSlop={20}>
                <Icons.ChevronLeft color={colors.primary} />
              </TouchableOpacity>
              <AppText style={[styles.year, yearTextStyle]}>{year}</AppText>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setYear(year + 1)}
                hitSlop={20}>
                <Icons.ChevronRightIcon color={colors.primary} />
              </TouchableOpacity>
            </FlexView>
            <View onLayout={onPopupLayout} style={styles.listMonthContainer}>
              {LIST_MONTH.map((item, index) => (
                <View
                  key={index}
                  style={[styles.monthContainer, monthContainerStyle]}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      setMonth(parseInt(item.value, 10));
                      setShowModal(false);
                      onChangeMonthYear?.(`${year}-${item.value}`);
                    }}
                    style={[
                      styles.monthInnerContainer,
                      month === parseInt(item.value, 10) &&
                        year === parseInt(yearSelected, 10) &&
                        styles.monthSelected,
                    ]}>
                    <AppText
                      style={[
                        styles.year,
                        monthTextStyle,
                        month === parseInt(item.value, 10) &&
                          year === parseInt(yearSelected, 10) &&
                          styles.monthTextSelected,
                      ]}>
                      {item.label}
                    </AppText>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.container, containerStyle]}
        activeOpacity={0.7}
        onLayout={onLayout}
        onPress={onOpenDropdown}>
        {children}
      </TouchableOpacity>
      {renderModal()}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexShrink: 1,
  },
  modalContainer: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    zIndex: -1,
  },
  year: {
    fontSize: getSize(16),
    lineHeight: getSize(16) * 1.2,
    color: colors.neutralColor1,
    fontWeight: '500',
  },
  listItem: {
    position: 'absolute',
    backgroundColor: colors.white,
    minHeight: getSize(200),
    borderRadius: getSize(8),
    borderColor: colors.neutralColor7,
    borderWidth: getSize(1),
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: getSize(8),
    padding: getSize(12),
  },
  listMonthContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: getSize(12),
    width: '100%',
  },
  monthContainer: {
    width: '33%',
    alignItems: 'center',
  },
  monthInnerContainer: {
    width: getSize(44),
    height: getSize(44),
    borderRadius: getSize(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthSelected: {
    backgroundColor: colors.primary,
  },
  monthTextSelected: {
    color: colors.white,
  },
});
