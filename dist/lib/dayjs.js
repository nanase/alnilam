import o from "dayjs";
import { Dayjs as T, default as y } from "dayjs";
import m from "dayjs/plugin/utc";
import { default as g } from "dayjs/plugin/utc";
import n from "dayjs/plugin/timezone";
import { default as v } from "dayjs/plugin/timezone";
import i from "dayjs/plugin/advancedFormat";
import { default as D } from "dayjs/plugin/advancedFormat";
import f from "dayjs/plugin/duration";
import { default as b } from "dayjs/plugin/duration";
import "dayjs/locale/ja";
o.extend(m);
o.extend(n);
o.extend(i);
o.extend(f);
function d(e, r) {
  const t = Intl.DateTimeFormat(e).resolvedOptions();
  return o(r).tz(t.timeZone).locale(t.locale);
}
function c(e) {
  return e.isUTC() ? "UTC" : "$x" in e && typeof e.$x == "object" && e.$x != null && "$timezone" in e.$x && typeof e.$x.$timezone == "string" ? e.$x.$timezone : o.tz.guess();
}
export {
  T as Dayjs,
  D as advancedFormat,
  y as default,
  b as duration,
  d as fromLocale,
  c as getTimezoneName,
  v as timezone,
  g as utc
};
