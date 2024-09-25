import { computed as i, ref as c, watch as o } from "vue";
import "../dayjs.js";
import n from "dayjs";
import { c as m, t as l, d as f } from "../../chunks/usePage.YF9ZHX8m.js";
import { u as O, a as w } from "../../chunks/usePage.YF9ZHX8m.js";
import { u as p, a as d, r as h, t as v } from "../../chunks/theme.BqEKJIqM.js";
function S(t, e = {}) {
  return i({
    get: () => JSON.stringify(t.value, e.replacer, e.space),
    set: (r) => {
      t.value = JSON.parse(r, e.reviver);
    }
  });
}
function b(t = n(), e = 1e3, r = "s", u = !1) {
  const a = c(Number.NaN);
  function s() {
    a.value = n().diff(l(t), r, u);
  }
  return m(s, () => l(e)), o(() => l(t), s, { immediate: !0 }), a;
}
function k(t, e, r) {
  const u = c(n(null)), a = f(t, {}, r), s = m(
    async () => {
      await a.execute();
    },
    e,
    r
  );
  return o(
    () => a.isFinished.value,
    () => {
      a.data != null && (u.value = n());
    }
  ), {
    fetchedAt: u,
    ...a,
    ...s
  };
}
function x(t = {}) {
  const e = p(), r = i({
    get: () => e.global.current.value.dark,
    set: (s) => d(e, s ? "dark" : "light")
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
