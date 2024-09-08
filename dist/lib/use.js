import { computed as v, unref as S, ref as y, isRef as b, watch as d, getCurrentScope as g, onScopeDispose as h } from "vue";
function W(e, t = {}) {
  return v({
    get: () => JSON.stringify(e.value, t.replacer, t.space),
    set: (u) => {
      e.value = JSON.parse(u, t.reviver);
    }
  });
}
function m(e) {
  return g() ? (h(e), !0) : !1;
}
function l(e) {
  return typeof e == "function" ? e() : S(e);
}
const p = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function I(e, t = 1e3, u = {}) {
  const {
    immediate: n = !0,
    immediateCallback: r = !1
  } = u;
  let f = null;
  const i = y(!1);
  function o() {
    f && (clearInterval(f), f = null);
  }
  function s() {
    i.value = !1, o();
  }
  function c() {
    const a = l(t);
    a <= 0 || (i.value = !0, r && e(), o(), f = setInterval(e, a));
  }
  if (n && p && c(), b(t) || typeof t == "function") {
    const a = d(t, () => {
      i.value && p && c();
    });
    m(a);
  }
  return m(s), {
    isActive: i,
    pause: s,
    resume: c
  };
}
function k(e, t, u, n) {
  const r = I(e, u, n);
  return d(
    () => l(t),
    () => l(t) ? r.pause() : r.resume(),
    { immediate: (n == null ? void 0 : n.immediate) ?? !0 }
  ), r;
}
export {
  W as computedJSON,
  k as useIntervalFnWithPauser
};
