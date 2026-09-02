import { shallowRef as O, isRef as ee, watch as j, shallowReadonly as V, toValue as h, getCurrentScope as le, onScopeDispose as se, toRef as ae, readonly as ce, customRef as fe, ref as ue, nextTick as oe, computed as H, getCurrentInstance as de, onMounted as pe } from "vue";
function G(e, t) {
  return le() ? (se(e, t), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function Q() {
  const e = /* @__PURE__ */ new Set(), t = (o) => {
    e.delete(o);
  };
  return {
    on: (o) => {
      e.add(o);
      const n = () => t(o);
      return G(n), { off: n };
    },
    off: t,
    trigger: (...o) => Promise.all(Array.from(e).map((n) => n(...o))),
    clear: () => {
      e.clear();
    }
  };
}
const _ = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const me = (e) => e != null, ve = () => {
};
function X(...e) {
  if (e.length !== 1) return ae(...e);
  const t = e[0];
  return typeof t == "function" ? ce(fe(() => ({
    get: t,
    set: ve
  }))) : ue(t);
}
function re(e, t = !1, r = "Timeout") {
  return new Promise((u, l) => {
    t ? setTimeout(l, e, r) : setTimeout(u, e);
  });
}
function he(e, ...t) {
  return t.some((r) => r in e);
}
function ye(e) {
  return Array.isArray(e) ? e : [e];
}
function Z(e, t = !1) {
  function r(i, { flush: s = "sync", deep: b = !1, timeout: g, throwOnTimeout: w } = {}) {
    let p = null;
    const c = [new Promise((E) => {
      p = j(e, (F) => {
        i(F) !== t && (p ? p() : oe(() => p?.()), E(F));
      }, {
        flush: s,
        deep: b,
        immediate: !0
      });
    })];
    return g != null && c.push(re(g, w).then(() => h(e)).finally(() => p?.())), Promise.race(c);
  }
  function u(i, s) {
    if (!ee(i)) return r((F) => F === i, s);
    const { flush: b = "sync", deep: g = !1, timeout: w, throwOnTimeout: p } = s ?? {};
    let c = null;
    const E = [new Promise((F) => {
      c = j([e, i], ([C, z]) => {
        t !== (C === z) && (c ? c() : oe(() => c?.()), F(C));
      }, {
        flush: b,
        deep: g,
        immediate: !0
      });
    })];
    return w != null && E.push(re(w, p).then(() => h(e)).finally(() => (c?.(), h(e)))), Promise.race(E);
  }
  function l(i) {
    return r((s) => !!s, i);
  }
  function o(i) {
    return u(null, i);
  }
  function n(i) {
    return u(void 0, i);
  }
  function a(i) {
    return r(Number.isNaN, i);
  }
  function y(i, s) {
    return r((b) => {
      const g = Array.from(b);
      return g.includes(i) || g.includes(h(i));
    }, s);
  }
  function m(i) {
    return v(1, i);
  }
  function v(i = 1, s) {
    let b = -1;
    return r(() => (b += 1, b >= i), s);
  }
  return Array.isArray(h(e)) ? {
    toMatch: r,
    toContains: y,
    changed: m,
    changedTimes: v,
    get not() {
      return Z(e, !t);
    }
  } : {
    toMatch: r,
    toBe: u,
    toBeTruthy: l,
    toBeNull: o,
    toBeNaN: a,
    toBeUndefined: n,
    changed: m,
    changedTimes: v,
    get not() {
      return Z(e, !t);
    }
  };
}
function be(e) {
  return Z(e);
}
function ge(e, t = 1e3, r = {}) {
  const { immediate: u = !0, immediateCallback: l = !1 } = r;
  let o = null;
  const n = O(!1);
  function a() {
    o && (clearInterval(o), o = null);
  }
  function y() {
    n.value = !1, a();
  }
  function m() {
    const v = h(t);
    v <= 0 || (n.value = !0, l && e(), a(), n.value && (o = setInterval(e, v)));
  }
  return u && _ && m(), (ee(t) || typeof t == "function") && G(j(t, () => {
    n.value && _ && m();
  })), G(y), {
    isActive: V(n),
    pause: y,
    resume: m
  };
}
function Te(e, t, r = {}) {
  const { immediate: u = !0, immediateCallback: l = !1 } = r, o = O(!1);
  let n;
  function a() {
    n && (clearTimeout(n), n = void 0);
  }
  function y() {
    o.value = !1, a();
  }
  function m(...v) {
    l && e(), a(), o.value = !0, n = setTimeout(() => {
      o.value = !1, n = void 0, e(...v);
    }, h(t));
  }
  return u && (o.value = !0, _ && m()), G(y), {
    isPending: V(o),
    start: m,
    stop: y
  };
}
const $ = _ ? window : void 0;
function we(e) {
  var t;
  const r = h(e);
  return (t = r?.$el) !== null && t !== void 0 ? t : r;
}
// @__NO_SIDE_EFFECTS__
function Fe() {
  const e = O(!1), t = de();
  return t && pe(() => {
    e.value = !0;
  }, t), e;
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  const t = /* @__PURE__ */ Fe();
  return H(() => (t.value, !!e()));
}
function Ae(e, t, r = {}) {
  const { window: u = $, ...l } = r;
  let o;
  const n = /* @__PURE__ */ Oe(() => u && "MutationObserver" in u), a = () => {
    o && (o.disconnect(), o = void 0);
  }, y = j(H(() => {
    const i = ye(h(e)).map(we).filter(me);
    return new Set(i);
  }), (i) => {
    a(), n.value && i.size && (o = new MutationObserver(t), i.forEach((s) => o.observe(s, l)));
  }, {
    immediate: !0,
    flush: "post"
  }), m = () => o?.takeRecords(), v = () => {
    y(), a();
  };
  return G(v), {
    isSupported: n,
    stop: v,
    takeRecords: m
  };
}
const Pe = {
  json: "application/json",
  text: "text/plain"
};
function ie(e) {
  return e && he(e, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch", "updateDataOnError");
}
function Y(e) {
  return typeof Headers < "u" && e instanceof Headers ? Object.fromEntries(e.entries()) : e;
}
function Ce(e, ...t) {
  var r, u;
  const l = typeof AbortController == "function";
  let o = {}, n = {
    immediate: !0,
    refetch: !1,
    timeout: 0,
    updateDataOnError: !1
  };
  const a = {
    method: "GET",
    type: "text",
    payload: void 0
  };
  t.length > 0 && (ie(t[0]) ? n = {
    ...n,
    ...t[0]
  } : o = t[0]), t.length > 1 && ie(t[1]) && (n = {
    ...n,
    ...t[1]
  });
  const { fetch: y = (r = $?.fetch) !== null && r !== void 0 ? r : (u = globalThis) === null || u === void 0 ? void 0 : u.fetch, initialData: m, timeout: v } = n, i = /* @__PURE__ */ Q(), s = /* @__PURE__ */ Q(), b = /* @__PURE__ */ Q(), g = O(!1), w = O(!1), p = O(!1), c = O(null), E = O(null), F = O(null), C = O(m || null), z = H(() => l && w.value);
  let B, M;
  const J = (f) => {
    l && (B?.abort(f), B = new AbortController(), B.signal.onabort = () => p.value = !0, o = {
      ...o,
      signal: B.signal
    });
  }, q = (f) => {
    w.value = f, g.value = !f;
  };
  v && (M = Te(J, v, { immediate: !1 }));
  let R = 0;
  const k = async (f = !1) => {
    var T;
    J(), q(!0), F.value = null, c.value = null, p.value = !1, R += 1;
    const I = R, P = {
      method: a.method,
      headers: {}
    }, A = h(a.payload);
    if (A) {
      var L;
      const d = Y(P.headers), W = Object.getPrototypeOf(A);
      !a.payloadType && A && (W === Object.prototype || Array.isArray(W)) && !(A instanceof FormData) && (a.payloadType = "json"), a.payloadType && (d["Content-Type"] = (L = Pe[a.payloadType]) !== null && L !== void 0 ? L : a.payloadType), P.body = a.payloadType === "json" ? JSON.stringify(A) : A;
    }
    let ne = !1;
    const x = {
      url: h(e),
      options: {
        ...P,
        ...o
      },
      cancel: () => {
        ne = !0;
      }
    };
    if (n.beforeFetch && Object.assign(x, await n.beforeFetch(x)), ne || !y)
      return q(!1), Promise.resolve(null);
    let S = null;
    return M && M.start(), y(x.url, {
      ...P,
      ...x.options,
      headers: {
        ...Y(P.headers),
        ...Y((T = x.options) === null || T === void 0 ? void 0 : T.headers)
      }
    }).then(async (d) => {
      if (E.value = d, c.value = d.status, S = await d.clone()[a.type](), !d.ok)
        throw C.value = m || null, new Error(d.statusText);
      return n.afterFetch && ({ data: S } = await n.afterFetch({
        data: S,
        response: d,
        context: x,
        execute: k
      })), C.value = S, i.trigger(d), d;
    }).catch(async (d) => {
      let W = d.message || d.name;
      if (n.onFetchError && ({ error: W, data: S } = await n.onFetchError({
        data: S,
        error: d,
        response: E.value,
        context: x,
        execute: k
      })), I === R && (F.value = W, n.updateDataOnError && (C.value = S)), s.trigger(d), f) throw d;
      return null;
    }).finally(() => {
      I === R && q(!1), M && M.stop(), b.trigger(null);
    });
  }, te = X(n.refetch);
  j([te, X(e)], ([f]) => f && k(), { deep: !0 });
  const U = {
    isFinished: V(g),
    isFetching: V(w),
    statusCode: c,
    response: E,
    error: F,
    data: C,
    canAbort: z,
    aborted: p,
    abort: J,
    execute: k,
    onFetchResponse: i.on,
    onFetchError: s.on,
    onFetchFinally: b.on,
    get: D("GET"),
    put: D("PUT"),
    post: D("POST"),
    delete: D("DELETE"),
    patch: D("PATCH"),
    head: D("HEAD"),
    options: D("OPTIONS"),
    json: N("json"),
    text: N("text"),
    blob: N("blob"),
    arrayBuffer: N("arrayBuffer"),
    formData: N("formData")
  };
  function D(f) {
    return (T, I) => {
      if (!w.value)
        return a.method = f, a.payload = T, a.payloadType = I, ee(a.payload) && j([te, X(a.payload)], ([P]) => P && k(), { deep: !0 }), {
          ...U,
          then(P, A) {
            return K().then(P, A);
          }
        };
    };
  }
  function K() {
    return new Promise((f, T) => {
      be(g).toBe(!0).then(() => f(U)).catch(T);
    });
  }
  function N(f) {
    return () => {
      if (!w.value)
        return a.type = f, {
          ...U,
          then(T, I) {
            return K().then(T, I);
          }
        };
    };
  }
  return n.immediate && Promise.resolve().then(() => k()), {
    ...U,
    then(f, T) {
      return K().then(f, T);
    }
  };
}
function De(e, t, r, u) {
  const l = ge(e, r, u);
  return j(
    () => h(t),
    () => h(t) ? l.pause() : l.resume(),
    { immediate: u?.immediate ?? !0 }
  ), l;
}
function xe(e, t) {
  const r = e ? ae(e) : ue(window.pageId), u = H(
    () => h(t).find((o) => o.pages.some((n) => n.id === r.value))
  ), l = H(() => u.value?.pages.find((o) => o.id === r.value));
  return {
    pageId: r,
    section: u,
    page: l
  };
}
export {
  xe as a,
  Ae as b,
  ge as c,
  Ce as d,
  De as u
};
