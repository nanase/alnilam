import { default as dayjs, Dayjs } from 'dayjs';
import { default as advancedFormat } from 'dayjs/plugin/advancedFormat';
import { default as duration } from 'dayjs/plugin/duration';
import { default as timezone } from 'dayjs/plugin/timezone';
import { default as utc } from 'dayjs/plugin/utc';
type DayjsDate = Parameters<typeof dayjs>[0];
export declare function fromLocale(locale?: string, date?: DayjsDate): Dayjs;
export declare function getTimezoneName(date: Dayjs): string;
export type { Dayjs };
export { advancedFormat, duration, timezone, utc };
export default dayjs;
//# sourceMappingURL=dayjs.d.ts.map