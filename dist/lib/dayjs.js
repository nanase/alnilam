import o from "dayjs";
import { default as T } from "dayjs";
import m from "dayjs/plugin/advancedFormat.js";
import { default as g } from "dayjs/plugin/advancedFormat.js";
import n from "dayjs/plugin/duration.js";
import { default as y } from "dayjs/plugin/duration.js";
import i from "dayjs/plugin/timezone.js";
import { default as C } from "dayjs/plugin/timezone.js";
import f from "dayjs/plugin/utc.js";
import { default as b } from "dayjs/plugin/utc.js";
import "dayjs/locale/ja.js";
o.extend(f);
o.extend(i);
o.extend(m);
o.extend(n);
function s(e, r) {
  const t = Intl.DateTimeFormat(e).resolvedOptions();
  return o(r).tz(t.timeZone).locale(t.locale);
}
function c(e) {
  return e.isUTC() ? "UTC" : "$x" in e && typeof e.$x == "object" && e.$x != null && "$timezone" in e.$x && typeof e.$x.$timezone == "string" ? e.$x.$timezone : o.tz.guess();
}
export {
  g as advancedFormat,
  T as default,
  y as duration,
  s as fromLocale,
  c as getTimezoneName,
  C as timezone,
  b as utc
};
