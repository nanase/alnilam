import { computed as i, ref as c, toValue as l, watch as o } from "vue";
import "../dayjs.js";
import { c as m, d as f } from "../../chunks/usePage.CKcnc269.js";
import { u as O, a as w } from "../../chunks/usePage.CKcnc269.js";
import s from "dayjs";
import { useTheme as p, applyColorScheme as d, reapplyTheme as h, toggleTheme as v } from "../theme.js";
function S(t, e = {}) {
  return i({
    get: () => JSON.stringify(t.value, e.replacer, e.space),
    set: (r) => {
      t.value = JSON.parse(r, e.reviver);
    }
  });
}
function b(t = s(), e = 1e3, r = "s", u = !1) {
  const a = c(Number.NaN);
  function n() {
    a.value = s().diff(l(t), r, u);
  }
  return m(n, () => l(e)), o(() => l(t), n, { immediate: !0 }), a;
}
function k(t, e, r) {
  const u = c(s(null)), a = f(t, {}, r), n = m(
    async () => {
      await a.execute();
    },
    e,
    r
  );
  return o(
    () => a.isFinished.value,
    () => {
      a.data != null && (u.value = s());
    }
  ), {
    fetchedAt: u,
    ...a,
    ...n
  };
}
function x(t = {}) {
  const e = p(), r = i({
    get: () => e.global.current.value.dark,
    set: (n) => d(e, n ? "dark" : "light")
  });
  function u() {
    h(e);
  }
  function a() {
    v(e);
  }
  return t.immediate !== !1 && u(), {
    theme: e,
    reapply: u,
    toggle: a,
    isDark: r
  };
}
export {
  S as computedJSON,
  b as useElapsedTime,
  k as useIntervalFetch,
  O as useIntervalFnWithPauser,
  w as usePage,
  x as useVuetifyTheme
};
