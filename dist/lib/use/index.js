import { computed as Y, ref as v, shallowRef as B, watch as w, readonly as R, isRef as ee, useTemplateRef as te } from "vue";
import "../dayjs.js";
import { a as ne, t as _, b as ae, i as oe, c as re, d as k, e as E, f as Z } from "../../chunks/useIntervalFnWithPauser.DQJ-weBt.js";
import { u as Fe } from "../../chunks/useIntervalFnWithPauser.DQJ-weBt.js";
import j from "dayjs";
function pe(t, a = {}) {
  return Y({
    get: () => JSON.stringify(t.value, a.replacer, a.space),
    set: (s) => {
      t.value = JSON.parse(s, a.reviver);
    }
  });
}
const ie = oe ? window : void 0, le = {
  json: "application/json",
  text: "text/plain"
};
function X(t) {
  return t && re(t, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch", "updateDataOnError");
}
function G(t) {
  return typeof Headers < "u" && t instanceof Headers ? Object.fromEntries(t.entries()) : t;
}
function se(t, ...a) {
  var s;
  const l = typeof AbortController == "function";
  let r = {}, e = {
    immediate: !0,
    refetch: !1,
    timeout: 0,
    updateDataOnError: !1
  };
  const n = {
    method: "GET",
    type: "text",
    payload: void 0
  };
  a.length > 0 && (X(a[0]) ? e = { ...e, ...a[0] } : r = a[0]), a.length > 1 && X(a[1]) && (e = { ...e, ...a[1] });
  const {
    fetch: U = (s = ie) == null ? void 0 : s.fetch,
    initialData: W,
    timeout: V
  } = e, q = k(), z = k(), K = k(), P = v(!1), y = v(!1), C = v(!1), N = v(null), A = B(null), S = B(null), g = B(W || null), $ = Y(() => l && y.value);
  let m, b;
  const H = () => {
    l && (m == null || m.abort(), m = new AbortController(), m.signal.onabort = () => C.value = !0, r = {
      ...r,
      signal: m.signal
    });
  }, I = (i) => {
    y.value = i, P.value = !i;
  };
  V && (b = ne(H, V, { immediate: !1 }));
  let J = 0;
  const x = async (i = !1) => {
    var u, c;
    H(), I(!0), S.value = null, N.value = null, C.value = !1, J += 1;
    const T = J, p = {
      method: n.method,
      headers: {}
    };
    if (n.payload) {
      const o = G(p.headers), f = E(n.payload);
      !n.payloadType && f && Object.getPrototypeOf(f) === Object.prototype && !(f instanceof FormData) && (n.payloadType = "json"), n.payloadType && (o["Content-Type"] = (u = le[n.payloadType]) != null ? u : n.payloadType), p.body = n.payloadType === "json" ? JSON.stringify(f) : f;
    }
    let Q = !1;
    const O = {
      url: E(t),
      options: {
        ...p,
        ...r
      },
      cancel: () => {
        Q = !0;
      }
    };
    if (e.beforeFetch && Object.assign(O, await e.beforeFetch(O)), Q || !U)
      return I(!1), Promise.resolve(null);
    let h = null;
    return b && b.start(), U(
      O.url,
      {
        ...p,
        ...O.options,
        headers: {
          ...G(p.headers),
          ...G((c = O.options) == null ? void 0 : c.headers)
        }
      }
    ).then(async (o) => {
      if (A.value = o, N.value = o.status, h = await o.clone()[n.type](), !o.ok)
        throw g.value = W || null, new Error(o.statusText);
      return e.afterFetch && ({ data: h } = await e.afterFetch({
        data: h,
        response: o
      })), g.value = h, q.trigger(o), o;
    }).catch(async (o) => {
      let f = o.message || o.name;
      if (e.onFetchError && ({ error: f, data: h } = await e.onFetchError({
        data: h,
        error: o,
        response: A.value
      })), S.value = f, e.updateDataOnError && (g.value = h), z.trigger(o), i)
        throw o;
      return null;
    }).finally(() => {
      T === J && I(!1), b && b.stop(), K.trigger(null);
    });
  }, L = _(e.refetch);
  w(
    [
      L,
      _(t)
    ],
    ([i]) => i && x(),
    { deep: !0 }
  );
  const D = {
    isFinished: R(P),
    isFetching: R(y),
    statusCode: N,
    response: A,
    error: S,
    data: g,
    canAbort: $,
    aborted: C,
    abort: H,
    execute: x,
    onFetchResponse: q.on,
    onFetchError: z.on,
    onFetchFinally: K.on,
    // method
    get: d("GET"),
    put: d("PUT"),
    post: d("POST"),
    delete: d("DELETE"),
    patch: d("PATCH"),
    head: d("HEAD"),
    options: d("OPTIONS"),
    // type
    json: F("json"),
    text: F("text"),
    blob: F("blob"),
    arrayBuffer: F("arrayBuffer"),
    formData: F("formData")
  };
  function d(i) {
    return (u, c) => {
      if (!y.value)
        return n.method = i, n.payload = u, n.payloadType = c, ee(n.payload) && w(
          [
            L,
            _(n.payload)
          ],
          ([T]) => T && x(),
          { deep: !0 }
        ), {
          ...D,
          then(T, p) {
            return M().then(T, p);
          }
        };
    };
  }
  function M() {
    return new Promise((i, u) => {
      ae(P).toBe(!0).then(() => i(D)).catch((c) => u(c));
    });
  }
  function F(i) {
    return () => {
      if (!y.value)
        return n.type = i, {
          ...D,
          then(u, c) {
            return M().then(u, c);
          }
        };
    };
  }
  return e.immediate && Promise.resolve().then(() => x()), {
    ...D,
    then(i, u) {
      return M().then(i, u);
    }
  };
}
function he(t = j(), a = 1e3, s = "s", l = !1) {
  const r = v(Number.NaN);
  function e() {
    r.value = j().diff(E(t), s, l);
  }
  return Z(e, () => E(a)), w(() => E(t), e, { immediate: !0 }), r;
}
function ve(t, a, s) {
  const l = v(j(null)), r = se(t, {}, s), e = Z(
    async () => {
      await r.execute();
    },
    a,
    s
  );
  return w(
    () => r.isFinished.value,
    () => {
      r.data != null && (l.value = j());
    }
  ), {
    fetchedAt: l,
    ...r,
    ...e
  };
}
function ye(t, a, s) {
  const l = typeof t == "string" ? te(t) : t, r = new MutationObserver(a);
  function e() {
    l.value && r.observe(l.value, s);
  }
  function n() {
    r.disconnect();
  }
  return w(
    () => l.value,
    () => l.value ? e() : n(),
    { immediate: !0 }
  ), { pause: n, resume: e, targetRef: l };
}
export {
  pe as computedJSON,
  he as useElapsedTime,
  ve as useIntervalFetch,
  Fe as useIntervalFnWithPauser,
  ye as useMutationObserver
};
