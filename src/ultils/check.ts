import {EFileType} from 'enums';
import {getFileTypeFromUrl} from './helper';

export const isPdfFile = (url?: string) => {
  if (!url) {
    return false;
  }
  const fileType = getFileTypeFromUrl(url);
  return fileType === EFileType.PDF;
};

export const isExcelFile = (url?: string) => {
  if (!url) {
    return false;
  }
  const fileType = getFileTypeFromUrl(url);
  return fileType === EFileType.XLS || fileType === EFileType.XLSX;
};

export const isString = (value: any) => {
  return typeof value === 'string';
};
