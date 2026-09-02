import o from "dayjs";
import { Dayjs as T, default as y } from "dayjs";
import m from "dayjs/plugin/advancedFormat";
import { default as g } from "dayjs/plugin/advancedFormat";
import n from "dayjs/plugin/duration";
import { default as v } from "dayjs/plugin/duration";
import i from "dayjs/plugin/timezone";
import { default as D } from "dayjs/plugin/timezone";
import f from "dayjs/plugin/utc";
import { default as b } from "dayjs/plugin/utc";
import "dayjs/locale/ja";
o.extend(f);
o.extend(i);
o.extend(m);
o.extend(n);
function d(e, r) {
  const t = Intl.DateTimeFormat(e).resolvedOptions();
  return o(r).tz(t.timeZone).locale(t.locale);
}
function c(e) {
  return e.isUTC() ? "UTC" : "$x" in e && typeof e.$x == "object" && e.$x != null && "$timezone" in e.$x && typeof e.$x.$timezone == "string" ? e.$x.$timezone : o.tz.guess();
}
export {
  T as Dayjs,
  g as advancedFormat,
  y as default,
  v as duration,
  d as fromLocale,
  c as getTimezoneName,
  D as timezone,
  b as utc
};
