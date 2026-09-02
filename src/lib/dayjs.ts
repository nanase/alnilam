import dayjs, { type Dayjs } from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
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

// Dayjs is a type here, not a value: dayjs is CommonJS and carries no
// Dayjs property at runtime, so re-exporting it as a value published an
// undefined binding - and made the module unloadable under Node's ESM
// resolver, which refuses a named import a CommonJS module does not expose.
export type { Dayjs };
export { advancedFormat, duration, timezone, utc };
export default dayjs;
