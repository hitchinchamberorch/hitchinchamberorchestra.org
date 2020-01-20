import { format } from 'date-fns';

type DateOrString = Date | string;

const formatDate = (date: DateOrString, formatString: string) =>
  typeof date === 'string'
    ? format(new Date(date), formatString)
    : format(date, formatString);

export const format12HourTime = (date: DateOrString) =>
  formatDate(date, 'h:mma').toLowerCase();

export const formatAbbrDate = (date: DateOrString) =>
  formatDate(date, 'eee dd MMM yyyy');

export const formatLongDate = (date: DateOrString) =>
  formatDate(date, 'eeee dd MMMM yyyy');
