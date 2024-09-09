import { computed as p, ref as f, watch as n } from "vue";
import "../dayjs.js";
import { u as o, t } from "../../chunks/useIntervalFnWithPauser.CDwrKPK1.js";
import { a as T } from "../../chunks/useIntervalFnWithPauser.CDwrKPK1.js";
import s from "dayjs";
function N(e, r = {}) {
  return p({
    get: () => JSON.stringify(e.value, r.replacer, r.space),
    set: (a) => {
      e.value = JSON.parse(a, r.reviver);
    }
  });
}
function J(e = s(), r = 1e3, a = "s", i = !1) {
  const u = f(Number.NaN);
  function m() {
    u.value = s().diff(t(e), a, i);
  }
  return o(m, () => t(r)), n(() => t(e), m, { immediate: !0 }), u;
}
export {
  N as computedJSON,
  J as useElapsedTime,
  T as useIntervalFnWithPauser
};
