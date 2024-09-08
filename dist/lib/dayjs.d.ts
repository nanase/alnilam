import { default as dayjs, Dayjs } from 'dayjs';
import { default as utc } from 'dayjs/plugin/utc';
import { default as timezone } from 'dayjs/plugin/timezone';
import { default as advancedFormat } from 'dayjs/plugin/advancedFormat';
import { default as duration } from 'dayjs/plugin/duration';
type DayjsDate = Parameters<typeof dayjs>[0];
export declare function fromLocale(locale?: string, date?: DayjsDate): Dayjs;
export declare function getTimezoneName(date: Dayjs): string;
export { Dayjs, utc, timezone, advancedFormat, duration };
export default dayjs;
//# sourceMappingURL=dayjs.d.ts.map