import {Platform} from 'react-native';

export const PUSH_NOTIFICATION_CONFIG = {
  chanelId: 'push-notification-channel',
  chanelName: 'Push Notification',
};

export const NotoSansJPFont = {
  'normal-normal': 'NotoSansJP-Regular',
  'normal-bold': 'NotoSansJP-Bold',
  'normal-100': 'NotoSansJP-Thin',
  'normal-200': 'NotoSansJP-ExtraLight',
  'normal-300': 'NotoSansJP-Light',
  'normal-400': 'NotoSansJP-Regular',
  'normal-500': 'NotoSansJP-Medium',
  'normal-600': 'NotoSansJP-SemiBold',
  'normal-700': 'NotoSansJP-Bold',
  'normal-800': 'NotoSansJP-ExtraBold',
  'normal-900': 'NotoSansJP-Black',
  'normal-ultralight': 'NotoSansJP-UltraLight',
  'normal-thin': 'NotoSansJP-Thin',
  'normal-light': 'NotoSansJP-Light',
  'normal-medium': 'NotoSansJP-Medium',
  'normal-regular': 'NotoSansJP-Regular',
  'normal-semibold': 'NotoSansJP-SemiBold',
  'normal-condensedBold': 'NotoSansJP-Bold',
  'normal-condensed': 'NotoSansJP-Regular',
  'normal-heavy': 'NotoSansJP-ExtraBold',
  'normal-black': 'NotoSansJP-Black',
};

export const MochiyPopOneFont = {
  'normal-normal': 'MochiyPopOne-Regular',
  'normal-bold': 'MochiyPopOne-Bold',
  'normal-100': 'MochiyPopOne-Thin',
  'normal-200': 'MochiyPopOne-ExtraLight',
  'normal-300': 'MochiyPopOne-Light',
  'normal-400': 'MochiyPopOne-Regular',
  'normal-500': 'MochiyPopOne-Medium',
  'normal-600': 'MochiyPopOne-SemiBold',
  'normal-700': 'MochiyPopOne-Bold',
  'normal-800': 'MochiyPopOne-ExtraBold',
  'normal-900': 'MochiyPopOne-Black',
  'normal-ultralight': 'MochiyPopOne-UltraLight',
  'normal-thin': 'MochiyPopOne-Thin',
  'normal-light': 'MochiyPopOne-Light',
  'normal-medium': 'MochiyPopOne-Medium',
  'normal-regular': 'MochiyPopOne-Regular',
  'normal-semibold': 'MochiyPopOne-SemiBold',
  'normal-condensedBold': 'MochiyPopOne-Bold',
  'normal-condensed': 'MochiyPopOne-Regular',
  'normal-heavy': 'MochiyPopOne-ExtraBold',
  'normal-black': 'MochiyPopOne-Black',
};

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';

export const DATE_FORMAT = {
  YYYY_DD_MM: 'YYYY-DD-MM',
  YYYY_MM_DD: 'YYYY-MM-DD',
  YYYY_MM: 'YYYY-MM',
  YYYY_MM_DD_HH_MM_SS: 'YYYY-MM-DD HH:mm:ss',
  HH_MM: 'HH:mm',
  HH_MM_SS: 'HH:mm:ss',
  DD_MM_YYYY: 'DD/MM/YYYY',
};
