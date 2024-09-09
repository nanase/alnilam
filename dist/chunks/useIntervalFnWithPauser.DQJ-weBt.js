import { unref as x, ref as A, isRef as I, watch as P, getCurrentScope as D, onScopeDispose as G, toRef as O, readonly as W, customRef as U, nextTick as C } from "vue";
function b(e) {
  return D() ? (G(e), !0) : !1;
}
function M() {
  const e = /* @__PURE__ */ new Set(), n = (t) => {
    e.delete(t);
  };
  return {
    on: (t) => {
      e.add(t);
      const o = () => n(t);
      return b(o), {
        off: o
      };
    },
    off: n,
    trigger: (...t) => Promise.all(Array.from(e).map((o) => o(...t)))
  };
}
function l(e) {
  return typeof e == "function" ? e() : x(e);
}
const S = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const V = () => {
};
function F(e, n = !1, r = "Timeout") {
  return new Promise((i, t) => {
    setTimeout(n ? () => t(r) : i, e);
  });
}
function $(e, ...n) {
  return n.some((r) => r in e);
}
function j(...e) {
  if (e.length !== 1)
    return O(...e);
  const n = e[0];
  return typeof n == "function" ? W(U(() => ({ get: n, set: V }))) : A(n);
}
function k(e, n = !1) {
  function r(u, { flush: s = "sync", deep: d = !1, timeout: g, throwOnTimeout: T } = {}) {
    let c = null;
    const B = [new Promise((v) => {
      c = P(
        e,
        (w) => {
          u(w) !== n && (c ? c() : C(() => c == null ? void 0 : c()), v(w));
        },
        {
          flush: s,
          deep: d,
          immediate: !0
        }
      );
    })];
    return g != null && B.push(
      F(g, T).then(() => l(e)).finally(() => c == null ? void 0 : c())
    ), Promise.race(B);
  }
  function i(u, s) {
    if (!I(u))
      return r((w) => w === u, s);
    const { flush: d = "sync", deep: g = !1, timeout: T, throwOnTimeout: c } = s ?? {};
    let p = null;
    const v = [new Promise((w) => {
      p = P(
        [e, u],
        ([R, N]) => {
          n !== (R === N) && (p ? p() : C(() => p == null ? void 0 : p()), w(R));
        },
        {
          flush: d,
          deep: g,
          immediate: !0
        }
      );
    })];
    return T != null && v.push(
      F(T, c).then(() => l(e)).finally(() => (p == null || p(), l(e)))
    ), Promise.race(v);
  }
  function t(u) {
    return r((s) => !!s, u);
  }
  function o(u) {
    return i(null, u);
  }
  function f(u) {
    return i(void 0, u);
  }
  function h(u) {
    return r(Number.isNaN, u);
  }
  function y(u, s) {
    return r((d) => {
      const g = Array.from(d);
      return g.includes(u) || g.includes(l(u));
    }, s);
  }
  function a(u) {
    return m(1, u);
  }
  function m(u = 1, s) {
    let d = -1;
    return r(() => (d += 1, d >= u), s);
  }
  return Array.isArray(l(e)) ? {
    toMatch: r,
    toContains: y,
    changed: a,
    changedTimes: m,
    get not() {
      return k(e, !n);
    }
  } : {
    toMatch: r,
    toBe: i,
    toBeTruthy: t,
    toBeNull: o,
    toBeNaN: h,
    toBeUndefined: f,
    changed: a,
    changedTimes: m,
    get not() {
      return k(e, !n);
    }
  };
}
function q(e) {
  return k(e);
}
function E(e, n = 1e3, r = {}) {
  const {
    immediate: i = !0,
    immediateCallback: t = !1
  } = r;
  let o = null;
  const f = A(!1);
  function h() {
    o && (clearInterval(o), o = null);
  }
  function y() {
    f.value = !1, h();
  }
  function a() {
    const m = l(n);
    m <= 0 || (f.value = !0, t && e(), h(), o = setInterval(e, m));
  }
  if (i && S && a(), I(n) || typeof n == "function") {
    const m = P(n, () => {
      f.value && S && a();
    });
    b(m);
  }
  return b(y), {
    isActive: f,
    pause: y,
    resume: a
  };
}
function z(e, n, r = {}) {
  const {
    immediate: i = !0
  } = r, t = A(!1);
  let o = null;
  function f() {
    o && (clearTimeout(o), o = null);
  }
  function h() {
    t.value = !1, f();
  }
  function y(...a) {
    f(), t.value = !0, o = setTimeout(() => {
      t.value = !1, o = null, e(...a);
    }, l(n));
  }
  return i && (t.value = !0, S && y()), b(h), {
    isPending: W(t),
    start: y,
    stop: h
  };
}
function J(e, n, r, i) {
  const t = E(e, r, i);
  return P(
    () => l(n),
    () => l(n) ? t.pause() : t.resume(),
    { immediate: (i == null ? void 0 : i.immediate) ?? !0 }
  ), t;
}
export {
  z as a,
  q as b,
  $ as c,
  M as d,
  l as e,
  E as f,
  S as i,
  j as t,
  J as u
};
