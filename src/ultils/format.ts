import moment, {MomentInput} from 'moment';

export const formatDate = (dateStr?: MomentInput, format?: string) => {
  if (!dateStr || !format) {
    return '';
  }
  const date = moment(dateStr);
  return date.format(format);
};
