import {Dimensions} from 'react-native';

const DW = 390;
export const {width: appWidth, height: appHeight} = Dimensions.get('window');
const scale = appWidth < appHeight ? appWidth / DW : appHeight / DW;
export const getSize = (value: number) => value * scale;
