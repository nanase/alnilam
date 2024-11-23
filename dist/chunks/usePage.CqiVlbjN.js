import { getCurrentScope as ie, onScopeDispose as ue, unref as le, toRef as se, readonly as R, customRef as ce, ref as F, isRef as Y, watch as B, nextTick as ne, computed as W, shallowRef as K, getCurrentInstance as fe, onMounted as de } from "vue";
function H(e) {
  return ie() ? (ue(e), !0) : !1;
}
function L() {
  const e = /* @__PURE__ */ new Set(), t = (a) => {
    e.delete(a);
  };
  return {
    on: (a) => {
      e.add(a);
      const n = () => t(a);
      return H(n), {
        off: n
      };
    },
    off: t,
    trigger: (...a) => Promise.all(Array.from(e).map((n) => n(...a)))
  };
}
function d(e) {
  return typeof e == "function" ? e() : le(e);
}
const V = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const pe = (e) => e != null, me = () => {
};
function oe(e, t = !1, r = "Timeout") {
  return new Promise((u, a) => {
    setTimeout(t ? () => a(r) : u, e);
  });
}
function he(e, ...t) {
  return t.some((r) => r in e);
}
function _(...e) {
  if (e.length !== 1)
    return se(...e);
  const t = e[0];
  return typeof t == "function" ? R(ce(() => ({ get: t, set: me }))) : F(t);
}
function X(e, t = !1) {
  function r(i, { flush: l = "sync", deep: s = !1, timeout: y, throwOnTimeout: O } = {}) {
    let v = null;
    const D = [new Promise((T) => {
      v = B(
        e,
        (P) => {
          i(P) !== t && (v ? v() : ne(() => v == null ? void 0 : v()), T(P));
        },
        {
          flush: l,
          deep: s,
          immediate: !0
        }
      );
    })];
    return y != null && D.push(
      oe(y, O).then(() => d(e)).finally(() => v == null ? void 0 : v())
    ), Promise.race(D);
  }
  function u(i, l) {
    if (!Y(i))
      return r((P) => P === i, l);
    const { flush: s = "sync", deep: y = !1, timeout: O, throwOnTimeout: v } = l ?? {};
    let b = null;
    const T = [new Promise((P) => {
      b = B(
        [e, i],
        ([E, C]) => {
          t !== (E === C) && (b ? b() : ne(() => b == null ? void 0 : b()), P(E));
        },
        {
          flush: s,
          deep: y,
          immediate: !0
        }
      );
    })];
    return O != null && T.push(
      oe(O, v).then(() => d(e)).finally(() => (b == null || b(), d(e)))
    ), Promise.race(T);
  }
  function a(i) {
    return r((l) => !!l, i);
  }
  function n(i) {
    return u(null, i);
  }
  function o(i) {
    return u(void 0, i);
  }
  function p(i) {
    return r(Number.isNaN, i);
  }
  function g(i, l) {
    return r((s) => {
      const y = Array.from(s);
      return y.includes(i) || y.includes(d(i));
    }, l);
  }
  function m(i) {
    return h(1, i);
  }
  function h(i = 1, l) {
    let s = -1;
    return r(() => (s += 1, s >= i), l);
  }
  return Array.isArray(d(e)) ? {
    toMatch: r,
    toContains: g,
    changed: m,
    changedTimes: h,
    get not() {
      return X(e, !t);
    }
  } : {
    toMatch: r,
    toBe: u,
    toBeTruthy: a,
    toBeNull: n,
    toBeNaN: p,
    toBeUndefined: o,
    changed: m,
    changedTimes: h,
    get not() {
      return X(e, !t);
    }
  };
}
function ye(e) {
  return X(e);
}
function ve(e, t = 1e3, r = {}) {
  const {
    immediate: u = !0,
    immediateCallback: a = !1
  } = r;
  let n = null;
  const o = F(!1);
  function p() {
    n && (clearInterval(n), n = null);
  }
  function g() {
    o.value = !1, p();
  }
  function m() {
    const h = d(t);
    h <= 0 || (o.value = !0, a && e(), p(), o.value && (n = setInterval(e, h)));
  }
  if (u && V && m(), Y(t) || typeof t == "function") {
    const h = B(t, () => {
      o.value && V && m();
    });
    H(h);
  }
  return H(g), {
    isActive: o,
    pause: g,
    resume: m
  };
}
function ge(e, t, r = {}) {
  const {
    immediate: u = !0
  } = r, a = F(!1);
  let n = null;
  function o() {
    n && (clearTimeout(n), n = null);
  }
  function p() {
    a.value = !1, o();
  }
  function g(...m) {
    o(), a.value = !0, n = setTimeout(() => {
      a.value = !1, n = null, e(...m);
    }, d(t));
  }
  return u && (a.value = !0, V && g()), H(p), {
    isPending: R(a),
    start: g,
    stop: p
  };
}
const ae = V ? window : void 0;
function be(e) {
  var t;
  const r = d(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
function we() {
  const e = F(!1), t = fe();
  return t && de(() => {
    e.value = !0;
  }, t), e;
}
function Te(e) {
  const t = we();
  return W(() => (t.value, !!e()));
}
function Pe(e, t, r = {}) {
  const { window: u = ae, ...a } = r;
  let n;
  const o = Te(() => u && "MutationObserver" in u), p = () => {
    n && (n.disconnect(), n = void 0);
  }, g = W(() => {
    const l = d(e), s = (Array.isArray(l) ? l : [l]).map(be).filter(pe);
    return new Set(s);
  }), m = B(
    () => g.value,
    (l) => {
      p(), o.value && l.size && (n = new MutationObserver(t), l.forEach((s) => n.observe(s, a)));
    },
    { immediate: !0, flush: "post" }
  ), h = () => n == null ? void 0 : n.takeRecords(), i = () => {
    m(), p();
  };
  return H(i), {
    isSupported: o,
    stop: i,
    takeRecords: h
  };
}
const Fe = {
  json: "application/json",
  text: "text/plain"
};
function re(e) {
  return e && he(e, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch", "updateDataOnError");
}
function Q(e) {
  return typeof Headers < "u" && e instanceof Headers ? Object.fromEntries(e.entries()) : e;
}
function Ee(e, ...t) {
  var r;
  const u = typeof AbortController == "function";
  let a = {}, n = {
    immediate: !0,
    refetch: !1,
    timeout: 0,
    updateDataOnError: !1
  };
  const o = {
    method: "GET",
    type: "text",
    payload: void 0
  };
  t.length > 0 && (re(t[0]) ? n = { ...n, ...t[0] } : a = t[0]), t.length > 1 && re(t[1]) && (n = { ...n, ...t[1] });
  const {
    fetch: p = (r = ae) == null ? void 0 : r.fetch,
    initialData: g,
    timeout: m
  } = n, h = L(), i = L(), l = L(), s = F(!1), y = F(!1), O = F(!1), v = F(null), b = K(null), D = K(null), T = K(g || null), P = W(() => u && y.value);
  let E, C;
  const $ = () => {
    u && (E == null || E.abort(), E = new AbortController(), E.signal.onabort = () => O.value = !0, a = {
      ...a,
      signal: E.signal
    });
  }, z = (f) => {
    y.value = f, s.value = !f;
  };
  m && (C = ge($, m, { immediate: !1 }));
  let J = 0;
  const G = async (f = !1) => {
    var w, M;
    $(), z(!0), D.value = null, v.value = null, O.value = !1, J += 1;
    const I = J, S = {
      method: o.method,
      headers: {}
    };
    if (o.payload) {
      const c = Q(S.headers), A = d(o.payload), te = Object.getPrototypeOf(A);
      !o.payloadType && A && (te === Object.prototype || Array.isArray(te)) && !(A instanceof FormData) && (o.payloadType = "json"), o.payloadType && (c["Content-Type"] = (w = Fe[o.payloadType]) != null ? w : o.payloadType), S.body = o.payloadType === "json" ? JSON.stringify(A) : A;
    }
    let ee = !1;
    const N = {
      url: d(e),
      options: {
        ...S,
        ...a
      },
      cancel: () => {
        ee = !0;
      }
    };
    if (n.beforeFetch && Object.assign(N, await n.beforeFetch(N)), ee || !p)
      return z(!1), Promise.resolve(null);
    let j = null;
    return C && C.start(), p(
      N.url,
      {
        ...S,
        ...N.options,
        headers: {
          ...Q(S.headers),
          ...Q((M = N.options) == null ? void 0 : M.headers)
        }
      }
    ).then(async (c) => {
      if (b.value = c, v.value = c.status, j = await c.clone()[o.type](), !c.ok)
        throw T.value = g || null, new Error(c.statusText);
      return n.afterFetch && ({ data: j } = await n.afterFetch({
        data: j,
        response: c
      })), T.value = j, h.trigger(c), c;
    }).catch(async (c) => {
      let A = c.message || c.name;
      if (n.onFetchError && ({ error: A, data: j } = await n.onFetchError({
        data: j,
        error: c,
        response: b.value
      })), D.value = A, n.updateDataOnError && (T.value = j), i.trigger(c), f)
        throw c;
      return null;
    }).finally(() => {
      I === J && z(!1), C && C.stop(), l.trigger(null);
    });
  }, Z = _(n.refetch);
  B(
    [
      Z,
      _(e)
    ],
    ([f]) => f && G(),
    { deep: !0 }
  );
  const U = {
    isFinished: R(s),
    isFetching: R(y),
    statusCode: v,
    response: b,
    error: D,
    data: T,
    canAbort: P,
    aborted: O,
    abort: $,
    execute: G,
    onFetchResponse: h.on,
    onFetchError: i.on,
    onFetchFinally: l.on,
    // method
    get: x("GET"),
    put: x("PUT"),
    post: x("POST"),
    delete: x("DELETE"),
    patch: x("PATCH"),
    head: x("HEAD"),
    options: x("OPTIONS"),
    // type
    json: k("json"),
    text: k("text"),
    blob: k("blob"),
    arrayBuffer: k("arrayBuffer"),
    formData: k("formData")
  };
  function x(f) {
    return (w, M) => {
      if (!y.value)
        return o.method = f, o.payload = w, o.payloadType = M, Y(o.payload) && B(
          [
            Z,
            _(o.payload)
          ],
          ([I]) => I && G(),
          { deep: !0 }
        ), {
          ...U,
          then(I, S) {
            return q().then(I, S);
          }
        };
    };
  }
  function q() {
    return new Promise((f, w) => {
      ye(s).toBe(!0).then(() => f(U)).catch(w);
    });
  }
  function k(f) {
    return () => {
      if (!y.value)
        return o.type = f, {
          ...U,
          then(w, M) {
            return q().then(w, M);
          }
        };
    };
  }
  return n.immediate && Promise.resolve().then(() => G()), {
    ...U,
    then(f, w) {
      return q().then(f, w);
    }
  };
}
function Ae(e, t, r, u) {
  const a = ve(e, r, u);
  return B(
    () => d(t),
    () => d(t) ? a.pause() : a.resume(),
    { immediate: (u == null ? void 0 : u.immediate) ?? !0 }
  ), a;
}
function De(e, t) {
  const r = e ? _(e) : F(window.pageId), u = W(
    () => d(t).find((n) => n.pages.some((o) => o.id === r.value))
  ), a = W(() => {
    var n;
    return (n = u.value) == null ? void 0 : n.pages.find((o) => o.id === r.value);
  });
  return {
    pageId: r,
    section: u,
    page: a
  };
}
export {
  De as a,
  Pe as b,
  ve as c,
  Ee as d,
  d as t,
  Ae as u
};
