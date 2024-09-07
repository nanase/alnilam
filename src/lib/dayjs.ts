import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import duration from 'dayjs/plugin/duration';
import 'dayjs/locale/ja';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.extend(duration);

type DayjsDate = Parameters<typeof dayjs>[0];

export function fromLocale(locale?: string, date?: DayjsDate): Dayjs {
  const dateTimeFormat = Intl.DateTimeFormat(locale).resolvedOptions();
  return dayjs(date).tz(dateTimeFormat.timeZone).locale(dateTimeFormat.locale);
}

export function getTimezoneName(date: Dayjs): string {
  if (date.isUTC()) {
    return 'UTC';
  }

  if ('$x' in date && typeof date.$x === 'object' && date.$x != null) {
    if ('$timezone' in date.$x && typeof date.$x.$timezone === 'string') {
      return date.$x.$timezone;
    }
  }

  return dayjs.tz.guess();
}

export { Dayjs, utc, timezone, advancedFormat, duration };
export default dayjs;
