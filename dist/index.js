var k = Object.defineProperty;
var v = (n, t, e) => t in n ? k(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var h = (n, t, e) => v(n, typeof t != "symbol" ? t + "" : t, e);
import { getCurrentInstance as S, inject as C, defineComponent as M, onMounted as y, onBeforeUnmount as w, resolveComponent as x, openBlock as T, createBlock as I, withCtx as N, createVNode as P, mergeProps as L, unref as E, watch as A } from "vue";
function $(n, t) {
  const e = S();
  if (!e)
    throw new Error(`[Vuetify] ${n} must be called from inside a setup function`);
  return e;
}
const j = Symbol.for("vuetify:theme");
function B() {
  $("useTheme");
  const n = C(j, null);
  if (!n) throw new Error("Could not find Vuetify theme injection");
  return n;
}
const c = "vuetify-color-scheme";
function a(n, t) {
  t === "unspecified" ? (n.global.name.value = "", document.querySelectorAll(".color-responsive").forEach((e) => {
    var r;
    if (e.classList.remove("color-responsive-dark", "color-responsive-light"), e instanceof HTMLObjectElement) {
      const o = (r = e.contentDocument) == null ? void 0 : r.documentElement;
      o && o.classList.remove("color-responsive-dark", "color-responsive-light");
    }
  })) : (n.global.name.value = t, document.querySelectorAll(".color-responsive").forEach((e) => {
    var r;
    if (t === "light" ? (e.classList.add("color-responsive-light"), e.classList.remove("color-responsive-dark")) : (e.classList.add("color-responsive-dark"), e.classList.remove("color-responsive-light")), e instanceof HTMLObjectElement) {
      const o = (r = e.contentDocument) == null ? void 0 : r.documentElement;
      if (!o)
        return;
      t === "light" ? (o.classList.add("color-responsive-light"), o.classList.remove("color-responsive-dark")) : (o.classList.add("color-responsive-dark"), o.classList.remove("color-responsive-light"));
    }
  }));
}
function g() {
  return window.matchMedia ? window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "unspecified" : "unspecified";
}
function F(n) {
  n.global.current.value.dark ? (g() === "light" ? localStorage.removeItem(c) : localStorage.setItem(c, "light"), a(n, "light")) : (g() === "dark" ? localStorage.removeItem(c) : localStorage.setItem(c, "dark"), a(n, "dark"));
}
function V(n) {
  const t = localStorage.getItem(c);
  t === "light" ? a(n, "light") : t === "dark" || g() === "dark" ? a(n, "dark") : a(n, "light");
}
const z = /* @__PURE__ */ M({
  __name: "ThemeToggleButton",
  setup(n) {
    const t = B();
    function e(o) {
      const i = localStorage.getItem(c);
      i === null ? a(t, o.matches ? "dark" : "light") : (i === "dark" && o.matches || i === "light" && !o.matches) && localStorage.removeItem(c);
    }
    function r() {
      F(t);
    }
    return y(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e), V(t);
    }), w(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", e);
    }), (o, i) => {
      const s = x("v-btn"), u = x("v-tooltip");
      return T(), I(u, {
        text: "テーマを切り替え",
        "aria-label": "テーマを切り替え"
      }, {
        activator: N(({ props: p }) => [
          P(s, L({ "data-test": "button" }, p, {
            icon: E(t).global.current.value.dark ? "mdi-weather-night" : "mdi-white-balance-sunny",
            onClick: r,
            "aria-label": "テーマを切り替え"
          }), null, 16, ["icon"])
        ]),
        _: 1
      });
    };
  }
});
function b(n, t, e) {
  for (const r of e)
    if (!(typeof r[n] > "u") && r[n] === t)
      return r;
  return null;
}
function H(n, t, e) {
  return t.map((r) => {
    const o = b(n, r[n], t), i = b(n, r[n], e);
    return o == null || i == null ? null : { ...o, ...i };
  }).filter((r) => r !== null);
}
function Z(n, t) {
  return t == null ? n.reduce((e, r) => e + Number(r), 0) : n.reduce((e, r) => e + t(r), 0);
}
function G(n) {
  return n == null || n.length === 0;
}
function J(n) {
  return n.some((t, e) => n.indexOf(t) !== e);
}
function Q(n, t) {
  if (!n)
    return 0;
  if (!t)
    return n.length;
  let e = 0, r = 0;
  for (const o of n)
    t(o, r, n) && e++, r++;
  return e;
}
function W(n, t) {
  if (typeof t > "u") {
    const e = Array(n);
    let r = 0;
    for (; r < n; )
      e[r] = r++;
    return e;
  } else {
    const e = Array(t - n);
    let r = 0, o = n;
    for (; o < t; )
      e[r++] = o++;
    return e;
  }
}
function Y(n, t) {
  const e = Array(t);
  let r = 0;
  for (; r < t; )
    e[r] = n / t * r++;
  return e;
}
function U(n) {
  let t = -1 / 0, e = 1 / 0, r = -1, o = -1, i = 0;
  for (const s of n)
    s > t && (t = s, r = i), s < e && (e = s, o = i), i++;
  return { max: t, min: e, maxIndex: r, minIndex: o };
}
function* K(n, t) {
  const e = n.length, r = Array(t).fill(0);
  for (; ; ) {
    yield r.map((i) => n[i]);
    let o = t - 1;
    for (; o >= 0 && (r[o]++, !(r[o] < e)); )
      r[o] = 0, o--;
    if (o < 0)
      break;
  }
}
const m = { symbol: "", exponent: 0 }, f = [
  { symbol: "Q", exponent: 30 },
  { symbol: "R", exponent: 27 },
  { symbol: "Y", exponent: 24 },
  { symbol: "Z", exponent: 21 },
  { symbol: "E", exponent: 18 },
  { symbol: "P", exponent: 15 },
  { symbol: "T", exponent: 12 },
  { symbol: "G", exponent: 9 },
  { symbol: "M", exponent: 6 },
  { symbol: "k", exponent: 3 },
  { symbol: "h", exponent: 2 },
  { symbol: "da", exponent: 1 },
  m,
  { symbol: "d", exponent: -1 },
  { symbol: "c", exponent: -2 },
  { symbol: "m", exponent: -3 },
  { symbol: "μ", exponent: -6 },
  // formal
  { symbol: "u", exponent: -6 },
  { symbol: "n", exponent: -9 },
  { symbol: "p", exponent: -12 },
  { symbol: "f", exponent: -15 },
  { symbol: "a", exponent: -18 },
  { symbol: "z", exponent: -21 },
  { symbol: "y", exponent: -24 },
  { symbol: "r", exponent: -27 },
  { symbol: "q", exponent: -30 }
], l = class l {
  constructor(t, e) {
    this.fraction = t, this.prefix = e;
  }
  get actualValue() {
    return this.fraction * 10 ** this.prefix.exponent;
  }
  toString() {
    return `${this.fraction}${this.prefix.symbol}`;
  }
  toSimpleString(t) {
    return `${Number(this.fraction.toFixed(t))}${this.prefix.symbol}`;
  }
  toFixed(t) {
    return `${this.fraction.toFixed(t)}${this.prefix.symbol}`;
  }
  static getPrefixSymbols(t) {
    return f.filter((e) => e.exponent % (t ? 1 : 3) === 0).map((e) => e.symbol);
  }
  static test(t) {
    return l.siValuePattern.test(t ?? "");
  }
  static parse(t) {
    const e = l.siValuePattern.exec(t ?? "");
    if (e == null)
      return new l(Number.NaN, m);
    const r = Number.parseFloat(e[1]), o = f.find((i) => i.symbol === e[2]);
    return new l(r, o);
  }
  static fit(t, e) {
    if (!Number.isFinite(t) && e.length === 0)
      return new l(t, m);
    if (t !== 0) {
      const r = Math.sign(t);
      t = Math.abs(t);
      const o = e.map((i) => {
        const s = l.getPrefix(i), u = t * 10 ** -s.exponent, p = Math.abs(u - 500);
        return { prefix: s, practicalValue: u, rank: p };
      }).sort((i, s) => i.rank - s.rank);
      return new l(o[0].practicalValue * r, o[0].prefix);
    } else
      return new l(0, m);
  }
  static fitBy(t, e) {
    const r = l.getPrefix(e);
    if (!Number.isFinite(t))
      return new l(t, r);
    const o = Math.sign(t);
    t = Math.abs(t);
    const i = t * 10 ** -r.exponent;
    return new l(i * o, r);
  }
  static getPrefix(t) {
    const e = f.find((r) => r.symbol === t);
    if (!e)
      throw new Error(`Prefix symbol '${t}' is not defined.`);
    return e;
  }
  static successor(t, e) {
    const r = l.getPrefix(t), o = f.filter(
      (s) => s.exponent > r.exponent && s.exponent % (e ? 1 : 3) === 0
    );
    if (o.length === 0)
      return t;
    const i = o.slice(-1)[0];
    return o.filter((s) => s.exponent === i.exponent)[0].symbol;
  }
  static predecessor(t, e) {
    const r = l.getPrefix(t), o = f.filter(
      (i) => i.exponent < r.exponent && i.exponent % (e ? 1 : 3) === 0
    );
    return o.length === 0 ? t : o[0].symbol;
  }
};
h(l, "siValuePattern", /^([+-]?(?:[0-9]*\.)?[0-9]+)([QRYZEPTGMkmuμnpfazyrq]?)$/);
let d = l;
const X = {
  required: (n) => !!n || "値を入力してください",
  value: (n) => Number.isFinite(d.parse(n).fraction) || "不正な値です",
  notZero: (n) => Number(n) !== 0 || "値を 0 にはできません",
  notNegative: (n) => {
    const t = d.parse(n);
    return Number.isFinite(t.fraction) && t.fraction >= 0 || "負値にはできません";
  }
};
function ee(n) {
  return n == null ? "" : n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
class _ {
  constructor(t) {
    this.obj = t;
  }
}
function O(n, t) {
  if (typeof n < "u" && n != null)
    for (const e of Object.keys(t))
      t[e] instanceof _ ? n[e] = t[e].obj : t[e] === null ? n[e] = null : !Array.isArray(t[e]) && typeof t[e] == "object" ? n[e] = O(n[e], t[e]) : n[e] = t[e];
  return n;
}
function te(n, t, e, r) {
  return typeof n > "u" || n == null ? r : n ? t : e;
}
function ne(n, t, e) {
  return n !== n && t !== t ? 0 : n !== n ? 1 : t !== t ? -1 : n == null && t == null ? 0 : n == null ? 1 : t == null ? -1 : n < t ? e === "descending" ? 1 : -1 : n > t ? e === "descending" ? -1 : 1 : 0;
}
function re(n) {
  return n.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
}
const q = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function oe(n) {
  return n.replace(q, (t, e) => (e = e.toLowerCase(), e === "amp" ? "&" : e === "colon" ? ":" : e === "quot" ? '"' : e === "lt" ? "<" : e === "gt" ? ">" : e.charAt(0) === "#" ? e.charAt(1) === "x" ? String.fromCharCode(parseInt(e.substring(2), 16)) : String.fromCharCode(+e.substring(1)) : ""));
}
function ie(n, t) {
  let e, r;
  const o = async function() {
    try {
      r = await n(), typeof r < "u" && (e = setTimeout(o, r * 1e3));
    } catch (i) {
      t && (r = await t(i), typeof r < "u" && (e = setTimeout(o, r * 1e3)));
    }
  };
  y(async () => {
    await o();
  }), w(() => {
    clearTimeout(e);
  });
}
function se(n, t, e) {
  const r = ((e == null ? void 0 : e.type) ?? "local") === "local" ? localStorage : sessionStorage, o = () => {
    typeof n.value < "u" && r.setItem(t, JSON.stringify(n.value));
  }, i = () => {
    const s = r.getItem(t);
    s != null && (n.value = JSON.parse(s));
  };
  return ((e == null ? void 0 : e.immediate) ?? !0) && ((e == null ? void 0 : e.readable) ?? !0) && i(), ((e == null ? void 0 : e.writable) ?? !0) && A(() => n.value, o, {
    immediate: (e == null ? void 0 : e.immediate) ?? !0
  }), {
    remove: () => {
      r.removeItem(t);
    },
    save: o,
    load: i
  };
}
class le {
  constructor(t, e) {
    h(this, "_worker", null);
    this.workerConstructor = t, this.options = e;
  }
  async invoke(t) {
    return this._worker == null && (this._worker = new this.workerConstructor(this.options)), await new Promise((e, r) => {
      if (this._worker == null) {
        r("worker is not initialized");
        return;
      }
      this._worker.onmessage = function(o) {
        e(o.data);
      }, this._worker.onmessageerror = function(o) {
        r(o);
      }, this._worker.postMessage(t);
    });
  }
  get worker() {
    return this._worker;
  }
}
export {
  m as BaseSIPrefix,
  _ as RawObject,
  X as Rules,
  d as SIValue,
  z as ThemeToggleButton,
  c as VuetifyColorSchemeName,
  le as WorkerManager,
  a as applyColorScheme,
  ne as compareWithNull,
  Q as count,
  O as deepAssign,
  ie as definePeriodicCall,
  Y as divide,
  G as empty,
  re as escapeRegex,
  J as existsDuplicate,
  b as findBy,
  U as findMinMax,
  K as generateForDepth,
  g as getPrefersColorScheme,
  H as mergeArrayBy,
  V as reapplyTheme,
  W as sequence,
  se as storage,
  Z as sum,
  te as ternary,
  F as toggleTheme,
  oe as unescapeHtml,
  ee as withCommas
};
