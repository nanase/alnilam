var k = Object.defineProperty;
var v = (n, e, t) => e in n ? k(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var h = (n, e, t) => v(n, typeof e != "symbol" ? e + "" : e, t);
import { getCurrentInstance as S, inject as C, defineComponent as T, onMounted as y, onBeforeUnmount as w, resolveComponent as x, openBlock as M, createBlock as I, withCtx as N, createVNode as P, mergeProps as L, unref as $, watch as E } from "vue";
function j(n, e) {
  const t = S();
  if (!t)
    throw new Error(`[Vuetify] ${n} must be called from inside a setup function`);
  return t;
}
const A = Symbol.for("vuetify:theme");
function _() {
  j("useTheme");
  const n = C(A, null);
  if (!n) throw new Error("Could not find Vuetify theme injection");
  return n;
}
const c = "vuetify-color-scheme";
function B() {
  return _();
}
function a(n, e) {
  e === "unspecified" ? (n.global.name.value = "", document.querySelectorAll(".color-responsive").forEach((t) => {
    var r;
    if (t.classList.remove("color-responsive-dark", "color-responsive-light"), t instanceof HTMLObjectElement) {
      const o = (r = t.contentDocument) == null ? void 0 : r.documentElement;
      o && o.classList.remove("color-responsive-dark", "color-responsive-light");
    }
  })) : (n.global.name.value = e, document.querySelectorAll(".color-responsive").forEach((t) => {
    var r;
    if (e === "light" ? (t.classList.add("color-responsive-light"), t.classList.remove("color-responsive-dark")) : (t.classList.add("color-responsive-dark"), t.classList.remove("color-responsive-light")), t instanceof HTMLObjectElement) {
      const o = (r = t.contentDocument) == null ? void 0 : r.documentElement;
      if (!o)
        return;
      e === "light" ? (o.classList.add("color-responsive-light"), o.classList.remove("color-responsive-dark")) : (o.classList.add("color-responsive-dark"), o.classList.remove("color-responsive-light"));
    }
  }));
}
function g() {
  var n, e;
  return (n = window.matchMedia) != null && n.call(window, "(prefers-color-scheme: light)").matches ? "light" : (e = window.matchMedia) != null && e.call(window, "(prefers-color-scheme: dark)").matches ? "dark" : "unspecified";
}
function F(n) {
  n.global.current.value.dark ? (g() === "light" ? localStorage.removeItem(c) : localStorage.setItem(c, "light"), a(n, "light")) : (g() === "dark" ? localStorage.removeItem(c) : localStorage.setItem(c, "dark"), a(n, "dark"));
}
function V(n) {
  const e = localStorage.getItem(c);
  e === "light" ? a(n, "light") : e === "dark" || g() === "dark" ? a(n, "dark") : a(n, "light");
}
const Z = /* @__PURE__ */ T({
  __name: "ThemeToggleButton",
  setup(n) {
    const e = B();
    function t(o) {
      const i = localStorage.getItem(c);
      i === null ? a(e, o.matches ? "dark" : "light") : (i === "dark" && o.matches || i === "light" && !o.matches) && localStorage.removeItem(c);
    }
    function r() {
      F(e);
    }
    return y(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", t), V(e);
    }), w(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", t);
    }), (o, i) => {
      const s = x("v-btn"), u = x("v-tooltip");
      return M(), I(u, {
        text: "テーマを切り替え",
        "aria-label": "テーマを切り替え"
      }, {
        activator: N(({ props: d }) => [
          P(s, L({ "data-test": "button" }, d, {
            icon: $(e).global.current.value.dark ? "mdi-weather-night" : "mdi-white-balance-sunny",
            onClick: r,
            "aria-label": "テーマを切り替え"
          }), null, 16, ["icon"])
        ]),
        _: 1
      });
    };
  }
});
function b(n, e, t) {
  for (const r of t)
    if (!(typeof r[n] > "u") && r[n] === e)
      return r;
  return null;
}
function z(n, e, t) {
  return e.map((r) => {
    const o = b(n, r[n], e), i = b(n, r[n], t);
    return o == null || i == null ? null : { ...o, ...i };
  }).filter((r) => r !== null);
}
function G(n, e) {
  return e == null ? n.reduce((t, r) => t + Number(r), 0) : n.reduce((t, r) => t + e(r), 0);
}
function J(n) {
  return n == null || n.length === 0;
}
function Q(n) {
  return n.some((e, t) => n.indexOf(e) !== t);
}
function W(n, e) {
  if (!n)
    return 0;
  if (!e)
    return n.length;
  let t = 0, r = 0;
  for (const o of n)
    e(o, r, n) && t++, r++;
  return t;
}
function Y(n, e) {
  if (typeof e > "u") {
    const t = Array(n);
    let r = 0;
    for (; r < n; )
      t[r] = r++;
    return t;
  } else {
    const t = Array(e - n);
    let r = 0, o = n;
    for (; o < e; )
      t[r++] = o++;
    return t;
  }
}
function U(n, e) {
  const t = Array(e);
  let r = 0;
  for (; r < e; )
    t[r] = n / e * r++;
  return t;
}
function K(n) {
  let e = -1 / 0, t = 1 / 0, r = -1, o = -1, i = 0;
  for (const s of n)
    s > e && (e = s, r = i), s < t && (t = s, o = i), i++;
  return { max: e, min: t, maxIndex: r, minIndex: o };
}
function* X(n, e) {
  const t = n.length, r = Array(e).fill(0);
  for (; ; ) {
    yield r.map((i) => n[i]);
    let o = e - 1;
    for (; o >= 0 && (r[o]++, !(r[o] < t)); )
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
  constructor(e, t) {
    this.fraction = e, this.prefix = t;
  }
  get actualValue() {
    return this.fraction * 10 ** this.prefix.exponent;
  }
  toString() {
    return `${this.fraction}${this.prefix.symbol}`;
  }
  toSimpleString(e) {
    return `${Number(this.fraction.toFixed(e))}${this.prefix.symbol}`;
  }
  toFixed(e) {
    return `${this.fraction.toFixed(e)}${this.prefix.symbol}`;
  }
  static getPrefixSymbols(e) {
    return f.filter((t) => t.exponent % (e ? 1 : 3) === 0).map((t) => t.symbol);
  }
  static test(e) {
    return l.siValuePattern.test(e ?? "");
  }
  static parse(e) {
    const t = l.siValuePattern.exec(e ?? "");
    if (t == null)
      return new l(Number.NaN, m);
    const r = Number.parseFloat(t[1]), o = f.find((i) => i.symbol === t[2]);
    return new l(r, o);
  }
  static fit(e, t) {
    if (!Number.isFinite(e) && t.length === 0)
      return new l(e, m);
    if (e !== 0) {
      const r = Math.sign(e);
      e = Math.abs(e);
      const o = t.map((i) => {
        const s = l.getPrefix(i), u = e * 10 ** -s.exponent, d = Math.abs(u - 500);
        return { prefix: s, practicalValue: u, rank: d };
      }).sort((i, s) => i.rank - s.rank);
      return new l(o[0].practicalValue * r, o[0].prefix);
    } else
      return new l(0, m);
  }
  static fitBy(e, t) {
    const r = l.getPrefix(t);
    if (!Number.isFinite(e))
      return new l(e, r);
    const o = Math.sign(e);
    e = Math.abs(e);
    const i = e * 10 ** -r.exponent;
    return new l(i * o, r);
  }
  static getPrefix(e) {
    const t = f.find((r) => r.symbol === e);
    if (!t)
      throw new Error(`Prefix symbol '${e}' is not defined.`);
    return t;
  }
  static successor(e, t) {
    const r = l.getPrefix(e), o = f.filter(
      (s) => s.exponent > r.exponent && s.exponent % (t ? 1 : 3) === 0
    );
    if (o.length === 0)
      return e;
    const i = o.slice(-1)[0];
    return o.filter((s) => s.exponent === i.exponent)[0].symbol;
  }
  static predecessor(e, t) {
    const r = l.getPrefix(e), o = f.filter(
      (i) => i.exponent < r.exponent && i.exponent % (t ? 1 : 3) === 0
    );
    return o.length === 0 ? e : o[0].symbol;
  }
};
h(l, "siValuePattern", /^([+-]?(?:[0-9]*\.)?[0-9]+)([QRYZEPTGMkmuμnpfazyrq]?)$/);
let p = l;
const ee = {
  required: (n) => !!n || "値を入力してください",
  value: (n) => Number.isFinite(p.parse(n).fraction) || "不正な値です",
  notZero: (n) => Number(n) !== 0 || "値を 0 にはできません",
  notNegative: (n) => {
    const e = p.parse(n);
    return Number.isFinite(e.fraction) && e.fraction >= 0 || "負値にはできません";
  }
};
function te(n) {
  return n == null ? "" : n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
class O {
  constructor(e) {
    this.obj = e;
  }
}
function q(n, e) {
  if (typeof n < "u" && n != null)
    for (const t of Object.keys(e))
      e[t] instanceof O ? n[t] = e[t].obj : e[t] === null ? n[t] = null : !Array.isArray(e[t]) && typeof e[t] == "object" ? n[t] = q(n[t], e[t]) : n[t] = e[t];
  return n;
}
function ne(n, e, t, r) {
  return typeof n > "u" || n == null ? r : n ? e : t;
}
function re(n, e, t) {
  return n !== n && e !== e ? 0 : n !== n ? 1 : e !== e ? -1 : n == null && e == null ? 0 : n == null ? 1 : e == null ? -1 : n < e ? t === "descending" ? 1 : -1 : n > e ? t === "descending" ? -1 : 1 : 0;
}
function oe(n) {
  return n.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
}
const R = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));/gi;
function ie(n) {
  return n.replace(R, (e, t) => {
    const r = t.toLowerCase();
    return r === "amp" ? "&" : r === "colon" ? ":" : r === "apos" ? "'" : r === "quot" ? '"' : r === "lt" ? "<" : r === "gt" ? ">" : r.charAt(0) === "#" ? r.charAt(1) === "x" ? String.fromCharCode(parseInt(r.substring(2), 16)) : String.fromCharCode(+r.substring(1)) : `&${t};`;
  });
}
function se(n, e) {
  let t, r;
  const o = async function() {
    try {
      r = await n(), typeof r < "u" && (t = setTimeout(o, r * 1e3));
    } catch (i) {
      e && (r = await e(i), typeof r < "u" && (t = setTimeout(o, r * 1e3)));
    }
  };
  y(async () => {
    await o();
  }), w(() => {
    clearTimeout(t);
  });
}
function le(n, e, t) {
  const r = ((t == null ? void 0 : t.type) ?? "local") === "local" ? localStorage : sessionStorage, o = () => {
    typeof n.value < "u" && r.setItem(e, JSON.stringify(n.value));
  }, i = () => {
    const s = r.getItem(e);
    s != null && (n.value = JSON.parse(s));
  };
  return ((t == null ? void 0 : t.readable) ?? !0) && i(), ((t == null ? void 0 : t.writable) ?? !0) && E(() => n.value, o, {
    immediate: (t == null ? void 0 : t.readable) ?? !0
  }), {
    remove: () => {
      r.removeItem(e);
    },
    save: o,
    load: i
  };
}
class ce {
  constructor(e, t) {
    h(this, "_worker", null);
    this.workerConstructor = e, this.options = t;
  }
  async invoke(e) {
    return this._worker == null && (this._worker = new this.workerConstructor(this.options)), await new Promise((t, r) => {
      this._worker.onmessage = function(o) {
        t(o.data);
      }, this._worker.onmessageerror = function(o) {
        r(o);
      }, this._worker.postMessage(e);
    });
  }
  get worker() {
    return this._worker == null && (this._worker = new this.workerConstructor(this.options)), this._worker;
  }
}
export {
  m as BaseSIPrefix,
  O as RawObject,
  ee as Rules,
  p as SIValue,
  Z as ThemeToggleButton,
  c as VuetifyColorSchemeName,
  ce as WorkerManager,
  a as applyColorScheme,
  re as compareWithNull,
  W as count,
  q as deepAssign,
  se as definePeriodicCall,
  U as divide,
  J as empty,
  oe as escapeRegex,
  Q as existsDuplicate,
  b as findBy,
  K as findMinMax,
  X as generateForDepth,
  g as getPrefersColorScheme,
  z as mergeArrayBy,
  V as reapplyTheme,
  Y as sequence,
  le as storage,
  G as sum,
  ne as ternary,
  F as toggleTheme,
  ie as unescapeHtml,
  B as useTheme,
  te as withCommas
};
