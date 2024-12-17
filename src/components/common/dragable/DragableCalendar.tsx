import React, {useImperativeHandle} from 'react';
import {
  Animated,
  LayoutChangeEvent,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppText} from '../text';
import {Icons} from 'assets';
import {colors} from 'themes';
import {ICalendarDay} from 'interfaces';
import moment from 'moment';

const listWeekdays = ['日', '月', '火', '水', '木', '金', '土'];

export interface DateValue {
  date: Date;
  isPrevMonth: boolean;
  isNextMonth: boolean;
  dateString: string;
  day: number;
  month: number;
  year: number;
}
export interface DateRange {
  startDate: DateValue | null;
  endDate: DateValue | null;
}

interface ContainerLayout {
  width: number;
  height: number;
  pX: number;
  pY: number;
  x: number;
  y: number;
}

export interface IMarkedDate {
  [date: string]: IMarkedDateProperty;
}

export interface IMarkedDateProperty {
  color?: string;
  textColor?: string;
  startingDay?: boolean;
  endingDay?: boolean;
  disabledInRange?: boolean;
  disableTouchEvent?: boolean;
}

interface IDragableCalendarProps {
  minDate?: Date;
  maxDate?: Date;
  onDateChange?: (date: DateRange) => void;
  isDisable?: (date: Date) => boolean;
  markedDates?: IMarkedDate;
  longPressDuration?: number;
  onLongPress?: (date: DateValue) => void;
  onDayPress?: (date: DateValue) => void;
  /**
   * Clear the inner date range and inner marked dates when user release the touch
   */
  clearOnRelease?: boolean;
  /**
   * Turn this on to block the calendar when user drag and meet the disable date
   *
   * disable date only contain date disabled from marked date. minDate, maxDate or from isDisable function
   */
  blockOnDisable?: boolean;
}

const defaultContainerLayout: ContainerLayout = {
  width: 0,
  height: 0,
  pX: 0,
  pY: 0,
  x: 0,
  y: 0,
};
const DAY_HEIGHT = 44;
const MONTH = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
];

const getMonthProperty = (month: number, year: number) => {
  const date = moment();
  date.set('month', month - 1);
  date.set('year', year);
  date.set('date', 1);
  const startWeekDay = date.day();
  const endWeekDay = date.endOf('month').day();
  const daysInMonth = date.daysInMonth();
  const numberOfWeek = daysInMonth / 7;
  const previousMonthDays = date.subtract(1, 'month').daysInMonth();
  const nextMonthDays = date.add(2, 'month').daysInMonth();

  return {
    startWeekDay,
    daysInMonth,
    numberOfWeek,
    endWeekDay,
    previousMonthDays,
    nextMonthDays,
  };
};

const toDateString = (year: number, month: number, day: number) => {
  return `${year}-${`${month}`.padStart(2, '0')}-${`${day}`.padStart(2, '0')}`;
};

/**
 *
 * month return from 1-12
 *
 * day return from 1-31
 *
 * weekday return from 0-6 (Sun to Sat)
 */
const generateMonthCalendar = (month: number, year: number) => {
  const {daysInMonth, numberOfWeek, startWeekDay, previousMonthDays} =
    getMonthProperty(month, year);
  const weekDays: ICalendarDay[] = [];
  let currentDay = 1;
  for (let i = 0; i < numberOfWeek; i++) {
    const week: ICalendarDay[] = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < startWeekDay) {
        // const date = previousMonthDays - startWeekDay + j + 1;
        week.push({
          month: month - 1,
          year,
          date: previousMonthDays - startWeekDay + j + 1,
          day: j,
          dayString: toDateString(
            year,
            month - 1,
            previousMonthDays - startWeekDay + j + 1,
          ),
          daysInPrevMonth: startWeekDay,
          isCurrentMonth: false,
        });
      } else if (currentDay > daysInMonth) {
        week.push({
          month: month + 1,
          year,
          date: currentDay - daysInMonth,
          day: j,
          daysInPrevMonth: startWeekDay,
          dayString: toDateString(year, month + 1, currentDay - daysInMonth),
          isCurrentMonth: false,
        });
        currentDay++;
      } else {
        week.push({
          month,
          year,
          date: currentDay,
          day: j,
          daysInPrevMonth: startWeekDay,
          dayString: toDateString(year, month, currentDay),
          isCurrentMonth: true,
        });
        currentDay++;
      }
    }
    weekDays.push(...week);
  }
  return weekDays;
};

const isOutOfRange = (date: Date, minDate?: Date, maxDate?: Date) => {
  if (minDate && date < minDate) {
    return true;
  }
  if (maxDate && date > maxDate) {
    return true;
  }
  return false;
};

const getDateFromLayout = (
  layout: ContainerLayout,
  x: number,
  y: number,
  daysInPrevMonth: number,
  previousMonthDays: number,
  curerntMonthDays: number,
) => {
  const width = layout.width / 7;
  const row = Math.ceil(y / DAY_HEIGHT);
  const col = Math.ceil(x / width);
  const indexDate = (row - 1) * 7 + col - daysInPrevMonth;
  let date = 1;
  let isPrevMonth = false;
  let isNextMonth = false;
  if (indexDate < 1) {
    date = previousMonthDays + indexDate;
    isPrevMonth = true;
  } else if (indexDate > curerntMonthDays) {
    date = indexDate - curerntMonthDays;
    isNextMonth = true;
  } else {
    date = indexDate;
  }
  return {
    date,
    isPrevMonth,
    isNextMonth,
  };
};

const createDateRange = (start?: string, end?: string) => {
  let startDate = start ? new Date(start) : new Date();
  let endDate = end ? new Date(end) : start ? new Date(start) : new Date();
  let dates = [];
  while (startDate <= endDate) {
    dates.push(startDate.toISOString().split('T')[0]);
    startDate.setDate(startDate.getDate() + 1);
  }
  return dates;
};

const generateMaskedDate = (start?: string, end?: string) => {
  if (!start && !end) {
    return {};
  }
  let newMarkedDates: IMarkedDate = {};
  const range = createDateRange(start, end);
  range?.forEach?.(date => {
    newMarkedDates[date] = {
      textColor: 'white',
    };
  });
  if (range?.[range?.length - 1]) {
    newMarkedDates[range[range?.length - 1]] = {
      endingDay: true,
      textColor: 'white',
    };
  }
  if (range?.[0]) {
    newMarkedDates[range[0]] = {
      startingDay: true,
      endingDay: range?.length === 1,
      textColor: 'white',
    };
  }
  return newMarkedDates;
};

const getMonthYear = (
  month: number,
  year: number,
  isNextMonth: boolean,
  isPreviousMonth: boolean,
) => {
  if (isNextMonth) {
    if (month === 12) {
      return {
        month: 1,
        year: year + 1,
      };
    }
    return {
      month: month + 1,
      year,
    };
  }
  if (isPreviousMonth) {
    if (month === 1) {
      return {
        month: 12,
        year: year - 1,
      };
    }
    return {
      month: month - 1,
      year,
    };
  }
  return {
    month,
    year,
  };
};

export interface DragableCalendarHandle {
  clear: () => void;
}

/**
 * DragableCalendar Component
 */
export const DragableCalendar = React.forwardRef(
  (
    props: IDragableCalendarProps,
    ref: React.ForwardedRef<DragableCalendarHandle>,
  ) => {
    const {
      minDate,
      maxDate,
      onDateChange,
      markedDates = {},
      isDisable,
      longPressDuration = 1000,
      onLongPress,
      clearOnRelease,
      blockOnDisable,
      onDayPress,
    } = props;

    const [currentMonth, setCurrentMonth] = React.useState<number>(
      new Date().getMonth() + 1,
    );
    const [year, setYear] = React.useState<number>(new Date().getFullYear());
    const [listDayContainerLayout, setListDayContainerLayout] =
      React.useState<ContainerLayout>(defaultContainerLayout);
    const [draftDateRange, setDraftDateRange] = React.useState<DateRange>({
      startDate: null,
      endDate: null,
    });
    const [innerMarkedDates, setInnerMarkedDates] = React.useState<IMarkedDate>(
      {},
    );

    const currentDateSelected = React.useRef<DateValue | null>(null);
    const dayPressed = React.useRef<DateValue | null>(null);
    const fixedDate = React.useRef<DateValue | null>(null);
    const isLongPress = React.useRef<boolean>(false);
    const longPressed = React.useRef<boolean>(false);
    const blockedDates = React.useRef<DateRange>({
      startDate: null,
      endDate: null,
    });
    const isBlock = React.useRef<boolean>(false);

    const calendarDays = React.useMemo(
      () => generateMonthCalendar(currentMonth, year),
      [currentMonth, year],
    );
    const {startWeekDay, previousMonthDays, daysInMonth} = React.useMemo(
      () => getMonthProperty(currentMonth, year),
      [currentMonth, year],
    );

    const onChangeDate = (date: DateValue, isNewTouch: boolean) => {
      if (isOutOfRange(date.date, minDate, maxDate)) {
        return;
      }
      let dateRange = {...draftDateRange};
      if (isNewTouch) {
        //handle when new touch granted
        if (
          date.dateString !== dateRange.startDate?.dateString &&
          date.dateString !== dateRange.endDate?.dateString
        ) {
          //handle when date range is not selected
          dateRange.startDate = date;
          dateRange.endDate = date;
          fixedDate.current = date;
        } else if (date.dateString === dateRange.startDate?.dateString) {
          //handle user is click on start date, end date will be fixed
          fixedDate.current = dateRange.endDate;
        } else if (date.dateString === dateRange.endDate?.dateString) {
          //handle user is click on end date, start date will be fixed
          fixedDate.current = dateRange.startDate;
        }
      } else if (!dateRange.startDate && !dateRange.endDate) {
        dateRange.startDate = date;
        dateRange.endDate = date;
        fixedDate.current = date;
      } else if (!!fixedDate.current && date.date <= fixedDate.current.date) {
        //handle dragging backward
        dateRange.startDate = date;
        dateRange.endDate = fixedDate.current;
      } else if (!!fixedDate.current && date.date > fixedDate.current.date) {
        //handle dragging forward
        dateRange.endDate = date;
        dateRange.startDate = fixedDate.current;
      }
      setDraftDateRange(dateRange);
      onDateChange?.(dateRange);
      const newMarkedDates = generateMaskedDate(
        dateRange.startDate?.dateString,
        dateRange.endDate?.dateString,
      );
      setInnerMarkedDates(newMarkedDates);
    };

    const countLongPress = React.useCallback(() => {
      isLongPress.current = true;
      longPressed.current = false;
      setTimeout(() => {
        if (isLongPress.current && currentDateSelected.current) {
          onLongPress?.(currentDateSelected.current);
          longPressed.current = true;
        }
      }, longPressDuration);
    }, [longPressDuration, onLongPress]);

    const panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (_evt, _gestureState) => true,
      onStartShouldSetPanResponderCapture: (_evt, _gestureState) => true,
      onMoveShouldSetPanResponder: (_evt, _gestureState) => true,
      onMoveShouldSetPanResponderCapture: (_evt, _gestureState) => true,
      onPanResponderGrant: evt => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
        const {locationX, locationY} = evt.nativeEvent;
        const date = getDateFromLayout(
          listDayContainerLayout,
          locationX,
          locationY,
          startWeekDay,
          previousMonthDays,
          daysInMonth,
        );
        const {month: selectedMonth, year: selectedYear} = getMonthYear(
          currentMonth,
          year,
          date.isNextMonth,
          date.isPrevMonth,
        );
        const dateString = toDateString(selectedYear, selectedMonth, date.date);
        const newDate = {
          date: new Date(selectedYear, selectedMonth - 1, date.date),
          dateString: dateString,
          day: date.date,
          isNextMonth: date.isNextMonth,
          isPrevMonth: date.isPrevMonth,
          month: selectedMonth,
          year: selectedYear,
        };
        currentDateSelected.current = newDate;
        dayPressed.current = newDate;
        onLongPress && countLongPress();
        if (blockOnDisable) {
          const isDateDisabled =
            !!isDisable?.(newDate.date) ||
            !!markedDates[dateString]?.disabledInRange ||
            isOutOfRange(newDate.date, minDate, maxDate);
          if (isDateDisabled) {
            isBlock.current = true;
            return;
          }
        }
        onChangeDate(newDate, true);
        currentDateSelected.current = newDate;
      },
      onPanResponderMove: evt => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        const {locationX, locationY} = evt.nativeEvent;
        const date = getDateFromLayout(
          listDayContainerLayout,
          locationX,
          locationY,
          startWeekDay,
          previousMonthDays,
          daysInMonth,
        );
        const {month: selectedMonth, year: selectedYear} = getMonthYear(
          currentMonth,
          year,
          date.isNextMonth,
          date.isPrevMonth,
        );
        const dateString = toDateString(selectedYear, selectedMonth, date.date);
        if (currentDateSelected.current?.dateString !== dateString) {
          const newDate = {
            date: new Date(selectedYear, selectedMonth - 1, date.date),
            dateString: toDateString(selectedYear, selectedMonth, date.date),
            day: date.date,
            isNextMonth: date.isNextMonth,
            isPrevMonth: date.isPrevMonth,
            month: selectedMonth,
            year: selectedYear,
          };
          if (blockOnDisable) {
            if (isBlock.current) {
              return;
            }
            const isDateDisabled =
              !!isDisable?.(newDate.date) ||
              !!markedDates[dateString]?.disabledInRange ||
              isOutOfRange(newDate.date, minDate, maxDate);
            if (
              isDateDisabled &&
              draftDateRange.startDate?.date &&
              newDate.date < draftDateRange.startDate?.date
            ) {
              blockedDates.current = {
                ...blockedDates.current,
                startDate: newDate,
              };
              return;
            } else if (
              isDateDisabled &&
              draftDateRange.endDate?.date &&
              newDate.date > draftDateRange.endDate?.date
            ) {
              blockedDates.current = {
                ...blockedDates.current,
                endDate: newDate,
              };
              return;
            }
          }
          onChangeDate(newDate, false);
          currentDateSelected.current = newDate;
          isLongPress.current = false;
        }
      },
      // onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, _gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        fixedDate.current = null;
        isLongPress.current = false;
        isBlock.current = false;
        blockedDates.current = {
          startDate: null,
          endDate: null,
        };
        const {locationX, locationY} = evt.nativeEvent;
        const date = getDateFromLayout(
          listDayContainerLayout,
          locationX,
          locationY,
          startWeekDay,
          previousMonthDays,
          daysInMonth,
        );
        const {month: selectedMonth, year: selectedYear} = getMonthYear(
          currentMonth,
          year,
          date.isNextMonth,
          date.isPrevMonth,
        );
        const dateString = toDateString(selectedYear, selectedMonth, date.date);
        const newDate = {
          date: new Date(selectedYear, selectedMonth - 1, date.date),
          dateString: dateString,
          day: date.date,
          isNextMonth: date.isNextMonth,
          isPrevMonth: date.isPrevMonth,
          month: selectedMonth,
          year: selectedYear,
        };
        if (
          !longPressed.current &&
          dayPressed.current?.dateString === dateString
        ) {
          onDayPress?.(newDate);
        }
        longPressed.current = false;
        if (clearOnRelease) {
          setDraftDateRange({
            startDate: null,
            endDate: null,
          });
          setInnerMarkedDates({});
        }
      },
      onPanResponderTerminate: (_evt, _gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        fixedDate.current = null;
        isLongPress.current = false;
        isBlock.current = false;
        blockedDates.current = {
          startDate: null,
          endDate: null,
        };
        if (clearOnRelease) {
          setDraftDateRange({
            startDate: null,
            endDate: null,
          });
          setInnerMarkedDates({});
        }
      },
      // onShouldBlockNativeResponder: (evt, gestureState) => {
      //   // Returns whether this component should block native components from becoming the JS
      //   // responder. Returns true by default. Is currently only supported on android.
      //   return true;
      // },
    });

    const onListDayContainerLayout = (event: LayoutChangeEvent) => {
      event.currentTarget.measure((x, y, width, height, pX, pY) => {
        setListDayContainerLayout({
          width,
          height,
          pX,
          pY,
          x,
          y,
        });
      });
    };

    const isDisableDay = (dayData: ICalendarDay) => {
      const date = new Date(dayData.dayString);
      return (
        !dayData.isCurrentMonth ||
        isDisable?.(date) ||
        isOutOfRange(date, minDate, maxDate)
      );
    };

    const _onChangeMonth = (state: 'previous' | 'next') => {
      if (state === 'previous') {
        if (currentMonth === 1) {
          setCurrentMonth(12);
          setYear(year - 1);
        } else {
          setCurrentMonth(currentMonth - 1);
        }
      } else {
        if (currentMonth === 12) {
          setCurrentMonth(1);
          setYear(year + 1);
        } else {
          setCurrentMonth(currentMonth + 1);
        }
      }
    };

    const clear = () => {
      setDraftDateRange({
        startDate: null,
        endDate: null,
      });
      setInnerMarkedDates({});
    };

    useImperativeHandle(
      ref,
      () => ({
        clear,
      }),
      [],
    );

    return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => _onChangeMonth('previous')}
            style={styles.iconContainer}>
            <Icons.ChevronLeft color={colors.primary} />
          </TouchableOpacity>
          <AppText style={styles.headerTitle}>{`${
            MONTH[currentMonth - 1]
          } ${year}`}</AppText>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => _onChangeMonth('next')}
            style={styles.iconContainer}>
            <Icons.ChevronRightIcon color={colors.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.weeksRow}>
          {listWeekdays.map((day, index) => (
            <View key={index} style={styles.weekDay}>
              <AppText style={styles.weekDayText}>{day}</AppText>
            </View>
          ))}
        </View>
        <View
          onLayout={onListDayContainerLayout}
          style={styles.listDayContainer}>
          {calendarDays.map((day, index) => {
            const disable = isDisableDay(day);
            const marked =
              innerMarkedDates[day.dayString] ?? markedDates[day.dayString];
            return (
              <View style={styles.dayContainer} key={index}>
                <View
                  style={[
                    styles.dayWrapper,
                    !!marked && styles.markDay,
                    !!marked?.startingDay && styles.startingDay,
                    !!marked?.endingDay && styles.endingDay,
                    !!marked?.color && {
                      backgroundColor: marked.color ?? colors.primary2,
                    },
                    !!marked?.endingDay &&
                      !!marked?.startingDay && {
                        width: DAY_HEIGHT,
                      },
                  ]}>
                  <AppText
                    style={[
                      styles.dayText,
                      disable && styles.disableDayText,
                      !!marked?.textColor && {
                        color: marked.textColor ?? colors.white,
                      },
                    ]}>
                    {day.date}
                  </AppText>
                </View>
              </View>
            );
          })}
          <Animated.View
            style={styles.gestureView}
            {...panResponder.panHandlers}
          />
        </View>
      </View>
    );
  },
);

DragableCalendar.displayName = 'DragableCalendar';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 8,
    gap: 8,
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    lineHeight: 18 * 1.2,
    fontWeight: '500',
    color: colors.neutralColor1,
  },
  weeksRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weekDay: {
    width: `${100 / 7}%`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekDayText: {
    fontSize: 16,
    lineHeight: 16 * 1.6,
    color: colors.neutralColor4,
    fontWeight: '500',
  },
  listDayContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayContainer: {
    width: `${100 / 7}%`,
    height: DAY_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayWrapper: {
    height: DAY_HEIGHT,
    width: '100%',
    minWidth: DAY_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 16,
    lineHeight: 16 * 1.2,
    color: colors.neutralColor1,
    fontWeight: '500',
  },
  disableDayText: {
    color: colors.neutralColor5,
  },
  gestureView: {
    ...StyleSheet.absoluteFillObject,
  },
  startingDay: {
    borderTopLeftRadius: DAY_HEIGHT / 2,
    borderBottomLeftRadius: DAY_HEIGHT / 2,
    backgroundColor: colors.primary2,
  },
  markDay: {
    backgroundColor: colors.primary2,
  },
  endingDay: {
    borderTopRightRadius: DAY_HEIGHT / 2,
    borderBottomRightRadius: DAY_HEIGHT / 2,
    backgroundColor: colors.primary2,
  },
});
