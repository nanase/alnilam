import { unref as v, ref as y, isRef as S, watch as p, getCurrentScope as b, onScopeDispose as h } from "vue";
function m(e) {
  return b() ? (h(e), !0) : !1;
}
function l(e) {
  return typeof e == "function" ? e() : v(e);
}
const d = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function I(e, t = 1e3, r = {}) {
  const {
    immediate: n = !0,
    immediateCallback: u = !1
  } = r;
  let a = null;
  const f = y(!1);
  function c() {
    a && (clearInterval(a), a = null);
  }
  function s() {
    f.value = !1, c();
  }
  function o() {
    const i = l(t);
    i <= 0 || (f.value = !0, u && e(), c(), a = setInterval(e, i));
  }
  if (n && d && o(), S(t) || typeof t == "function") {
    const i = p(t, () => {
      f.value && d && o();
    });
    m(i);
  }
  return m(s), {
    isActive: f,
    pause: s,
    resume: o
  };
}
function k(e, t, r, n) {
  const u = I(e, r, n);
  return p(
    () => l(t),
    () => l(t) ? u.pause() : u.resume(),
    { immediate: (n == null ? void 0 : n.immediate) ?? !0 }
  ), u;
}
export {
  k as a,
  l as t,
  I as u
};
