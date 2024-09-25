import { getCurrentScope as ae, onScopeDispose as ie, unref as ue, toRef as le, readonly as R, customRef as se, ref as F, isRef as Y, watch as M, nextTick as te, computed as W, shallowRef as K, getCurrentInstance as ce, onMounted as fe } from "vue";
function H(e) {
  return ae() ? (ie(e), !0) : !1;
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
  return typeof e == "function" ? e() : ue(e);
}
const V = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const de = (e) => e != null, pe = () => {
};
function ne(e, t = !1, r = "Timeout") {
  return new Promise((u, a) => {
    setTimeout(t ? () => a(r) : u, e);
  });
}
function me(e, ...t) {
  return t.some((r) => r in e);
}
function _(...e) {
  if (e.length !== 1)
    return le(...e);
  const t = e[0];
  return typeof t == "function" ? R(se(() => ({ get: t, set: pe }))) : F(t);
}
function X(e, t = !1) {
  function r(i, { flush: l = "sync", deep: s = !1, timeout: y, throwOnTimeout: O } = {}) {
    let v = null;
    const C = [new Promise((T) => {
      v = M(
        e,
        (P) => {
          i(P) !== t && (v ? v() : te(() => v == null ? void 0 : v()), T(P));
        },
        {
          flush: l,
          deep: s,
          immediate: !0
        }
      );
    })];
    return y != null && C.push(
      ne(y, O).then(() => d(e)).finally(() => v == null ? void 0 : v())
    ), Promise.race(C);
  }
  function u(i, l) {
    if (!Y(i))
      return r((P) => P === i, l);
    const { flush: s = "sync", deep: y = !1, timeout: O, throwOnTimeout: v } = l ?? {};
    let b = null;
    const T = [new Promise((P) => {
      b = M(
        [e, i],
        ([E, x]) => {
          t !== (E === x) && (b ? b() : te(() => b == null ? void 0 : b()), P(E));
        },
        {
          flush: s,
          deep: y,
          immediate: !0
        }
      );
    })];
    return O != null && T.push(
      ne(O, v).then(() => d(e)).finally(() => (b == null || b(), d(e)))
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
function he(e) {
  return X(e);
}
function ye(e, t = 1e3, r = {}) {
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
    h <= 0 || (o.value = !0, a && e(), p(), n = setInterval(e, h));
  }
  if (u && V && m(), Y(t) || typeof t == "function") {
    const h = M(t, () => {
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
function ve(e, t, r = {}) {
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
const re = V ? window : void 0;
function ge(e) {
  var t;
  const r = d(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
function be() {
  const e = F(!1), t = ce();
  return t && fe(() => {
    e.value = !0;
  }, t), e;
}
function we(e) {
  const t = be();
  return W(() => (t.value, !!e()));
}
function Oe(e, t, r = {}) {
  const { window: u = re, ...a } = r;
  let n;
  const o = we(() => u && "MutationObserver" in u), p = () => {
    n && (n.disconnect(), n = void 0);
  }, g = W(() => {
    const l = d(e), s = (Array.isArray(l) ? l : [l]).map(ge).filter(de);
    return new Set(s);
  }), m = M(
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
const Te = {
  json: "application/json",
  text: "text/plain"
};
function oe(e) {
  return e && me(e, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch", "updateDataOnError");
}
function Q(e) {
  return typeof Headers < "u" && e instanceof Headers ? Object.fromEntries(e.entries()) : e;
}
function Pe(e, ...t) {
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
  t.length > 0 && (oe(t[0]) ? n = { ...n, ...t[0] } : a = t[0]), t.length > 1 && oe(t[1]) && (n = { ...n, ...t[1] });
  const {
    fetch: p = (r = re) == null ? void 0 : r.fetch,
    initialData: g,
    timeout: m
  } = n, h = L(), i = L(), l = L(), s = F(!1), y = F(!1), O = F(!1), v = F(null), b = K(null), C = K(null), T = K(g || null), P = W(() => u && y.value);
  let E, x;
  const $ = () => {
    u && (E == null || E.abort(), E = new AbortController(), E.signal.onabort = () => O.value = !0, a = {
      ...a,
      signal: E.signal
    });
  }, z = (f) => {
    y.value = f, s.value = !f;
  };
  m && (x = ve($, m, { immediate: !1 }));
  let J = 0;
  const G = async (f = !1) => {
    var w, D;
    $(), z(!0), C.value = null, v.value = null, O.value = !1, J += 1;
    const I = J, j = {
      method: o.method,
      headers: {}
    };
    if (o.payload) {
      const c = Q(j.headers), A = d(o.payload);
      !o.payloadType && A && Object.getPrototypeOf(A) === Object.prototype && !(A instanceof FormData) && (o.payloadType = "json"), o.payloadType && (c["Content-Type"] = (w = Te[o.payloadType]) != null ? w : o.payloadType), j.body = o.payloadType === "json" ? JSON.stringify(A) : A;
    }
    let ee = !1;
    const N = {
      url: d(e),
      options: {
        ...j,
        ...a
      },
      cancel: () => {
        ee = !0;
      }
    };
    if (n.beforeFetch && Object.assign(N, await n.beforeFetch(N)), ee || !p)
      return z(!1), Promise.resolve(null);
    let B = null;
    return x && x.start(), p(
      N.url,
      {
        ...j,
        ...N.options,
        headers: {
          ...Q(j.headers),
          ...Q((D = N.options) == null ? void 0 : D.headers)
        }
      }
    ).then(async (c) => {
      if (b.value = c, v.value = c.status, B = await c.clone()[o.type](), !c.ok)
        throw T.value = g || null, new Error(c.statusText);
      return n.afterFetch && ({ data: B } = await n.afterFetch({
        data: B,
        response: c
      })), T.value = B, h.trigger(c), c;
    }).catch(async (c) => {
      let A = c.message || c.name;
      if (n.onFetchError && ({ error: A, data: B } = await n.onFetchError({
        data: B,
        error: c,
        response: b.value
      })), C.value = A, n.updateDataOnError && (T.value = B), i.trigger(c), f)
        throw c;
      return null;
    }).finally(() => {
      I === J && z(!1), x && x.stop(), l.trigger(null);
    });
  }, Z = _(n.refetch);
  M(
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
    error: C,
    data: T,
    canAbort: P,
    aborted: O,
    abort: $,
    execute: G,
    onFetchResponse: h.on,
    onFetchError: i.on,
    onFetchFinally: l.on,
    // method
    get: S("GET"),
    put: S("PUT"),
    post: S("POST"),
    delete: S("DELETE"),
    patch: S("PATCH"),
    head: S("HEAD"),
    options: S("OPTIONS"),
    // type
    json: k("json"),
    text: k("text"),
    blob: k("blob"),
    arrayBuffer: k("arrayBuffer"),
    formData: k("formData")
  };
  function S(f) {
    return (w, D) => {
      if (!y.value)
        return o.method = f, o.payload = w, o.payloadType = D, Y(o.payload) && M(
          [
            Z,
            _(o.payload)
          ],
          ([I]) => I && G(),
          { deep: !0 }
        ), {
          ...U,
          then(I, j) {
            return q().then(I, j);
          }
        };
    };
  }
  function q() {
    return new Promise((f, w) => {
      he(s).toBe(!0).then(() => f(U)).catch((D) => w(D));
    });
  }
  function k(f) {
    return () => {
      if (!y.value)
        return o.type = f, {
          ...U,
          then(w, D) {
            return q().then(w, D);
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
function Ee(e, t, r, u) {
  const a = ye(e, r, u);
  return M(
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
  Oe as b,
  ye as c,
  Pe as d,
  d as t,
  Ee as u
};
