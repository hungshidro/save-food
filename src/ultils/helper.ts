import {MochiyPopOneFont, NotoSansJPFont} from 'configs';
import {EFontFamily} from 'enums';
import {FontWeight, ICalendarDay} from 'interfaces';
import {isString} from './check';
import moment, {Moment} from 'moment';
import {Linking} from 'react-native';

export const getFont = (
  fontWeight: FontWeight = '400',
  fontFamily: EFontFamily = EFontFamily.NOTO_SANS_JP,
) => {
  let font = '';
  switch (fontFamily) {
    case EFontFamily.MOCHIY_POP_ONE:
      font = MochiyPopOneFont[`normal-${fontWeight}`];
      break;
    default:
      font = NotoSansJPFont[`normal-${fontWeight}`];
  }
  return font;
};

//function that execute a function after delay amount of time, take 2 params: the function and the delay time
export const debounce = (func: Function, delay: number) => {
  let inDebounce: NodeJS.Timeout;
  return function (this: any, ...args: any) {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(this, args), delay);
  };
};

// export const hashCode = async (
//   s: string,
//   algorithm: string = CONSTANTS.HashAlgorithms.sha256,
// ) => {
//   const hashedString = await JSHash(s, algorithm);
//   return hashedString;
// };

export const getFileTypeFromUrl = (url?: string) => {
  if (!url) {
    return '';
  }
  const splitUrl = url.split('.');
  return splitUrl[splitUrl.length - 1];
};

export const toString = (value: any, defaultString: string) => {
  if (isString(value) && value !== '') {
    return value;
  }
  return defaultString;
};

export const getMonthProperty = (month: number, year: number) => {
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

/**
 *
 * month return from 1-12
 *
 * day return from 1-31
 *
 * weekday return from 0-6 (Sun to Sat)
 */
export const generateMonthCalendar = <T = any>(
  month: number,
  year: number,
  data?: T[],
) => {
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
          users: [],
          dayString: `${year}-${month - 1}-${
            previousMonthDays - startWeekDay + j + 1
          }`,
          daysInPrevMonth: startWeekDay,
          isCurrentMonth: false,
        });
      } else if (currentDay > daysInMonth) {
        week.push({
          month: month + 1,
          year,
          date: currentDay - daysInMonth,
          day: j,
          users: [],
          daysInPrevMonth: startWeekDay,
          dayString: `${year}-${month + 1}-${currentDay - daysInMonth}`,
          isCurrentMonth: false,
        });
        currentDay++;
      } else {
        week.push({
          month,
          year,
          date: currentDay,
          day: j,
          users: data?.[currentDay - 1] ?? [],
          daysInPrevMonth: startWeekDay,
          dayString: `${year}-${month}-${currentDay}`,
          isCurrentMonth: true,
        });
        currentDay++;
      }
    }
    weekDays.push(...week);
  }
  return weekDays;
};

export const getMonth = (date: Moment) => {
  return date.month() + 1;
};

export const getYear = (date: Moment) => {
  return date.year();
};

export const getStartOfMonth = (date: Moment) => {
  const startDate = date.startOf('month');
  return startDate;
};

export const getEndOfMonth = (date: Moment) => {
  const endDate = date.endOf('month');
  return endDate;
};

export const openLink = (url: string) => {
  if (!url) {
    return;
  }
  Linking.openURL(url);
};

export const isWeekend = (year: number, month: number, day: number) => {
  return new Date(year, month - 1, day).getDay() % 6 === 0;
};
