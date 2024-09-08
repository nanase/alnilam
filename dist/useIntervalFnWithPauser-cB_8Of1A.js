import { unref as v, ref as y, isRef as S, watch as p, getCurrentScope as b, onScopeDispose as h } from "vue";
function m(e) {
  return b() ? (h(e), !0) : !1;
}
function l(e) {
  return typeof e == "function" ? e() : v(e);
}
const d = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function I(e, t = 1e3, o = {}) {
  const {
    immediate: n = !0,
    immediateCallback: u = !1
  } = o;
  let f = null;
  const i = y(!1);
  function c() {
    f && (clearInterval(f), f = null);
  }
  function s() {
    i.value = !1, c();
  }
  function a() {
    const r = l(t);
    r <= 0 || (i.value = !0, u && e(), c(), f = setInterval(e, r));
  }
  if (n && d && a(), S(t) || typeof t == "function") {
    const r = p(t, () => {
      i.value && d && a();
    });
    m(r);
  }
  return m(s), {
    isActive: i,
    pause: s,
    resume: a
  };
}
function k(e, t, o, n) {
  const u = I(e, o, n);
  return p(
    () => l(t),
    () => l(t) ? u.pause() : u.resume(),
    { immediate: (n == null ? void 0 : n.immediate) ?? !0 }
  ), u;
}
export {
  k as u
};
