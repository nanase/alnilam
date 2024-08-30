var y = Object.defineProperty;
var b = (n, t, e) => t in n ? y(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var p = (n, t, e) => b(n, typeof t != "symbol" ? t + "" : t, e);
import { onMounted as w, onBeforeUnmount as k, watch as v } from "vue";
const u = "vuetify-color-scheme";
function f(n, t) {
  t === "unspecified" ? (n.global.name.value = "", document.querySelectorAll(".color-responsive").forEach((e) => {
    var r;
    if (e.classList.remove("color-responsive-dark", "color-responsive-light"), e instanceof HTMLObjectElement) {
      const i = (r = e.contentDocument) == null ? void 0 : r.documentElement;
      i && i.classList.remove("color-responsive-dark", "color-responsive-light");
    }
  })) : (n.global.name.value = t, document.querySelectorAll(".color-responsive").forEach((e) => {
    var r;
    if (t === "light" ? (e.classList.add("color-responsive-light"), e.classList.remove("color-responsive-dark")) : (e.classList.add("color-responsive-dark"), e.classList.remove("color-responsive-light")), e instanceof HTMLObjectElement) {
      const i = (r = e.contentDocument) == null ? void 0 : r.documentElement;
      if (!i)
        return;
      t === "light" ? (i.classList.add("color-responsive-light"), i.classList.remove("color-responsive-dark")) : (i.classList.add("color-responsive-dark"), i.classList.remove("color-responsive-light"));
    }
  }));
}
function d() {
  return window.matchMedia ? window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "unspecified" : "unspecified";
}
function A(n) {
  n.global.current.value.dark ? (d() === "light" ? localStorage.removeItem(u) : localStorage.setItem(u, "light"), f(n, "light")) : (d() === "dark" ? localStorage.removeItem(u) : localStorage.setItem(u, "dark"), f(n, "dark"));
}
function L(n) {
  const t = localStorage.getItem(u);
  t === "light" ? f(n, "light") : t === "dark" || d() === "dark" ? f(n, "dark") : f(n, "light");
}
function h(n, t, e) {
  for (const r of e)
    if (!(typeof r[n] > "u") && r[n] === t)
      return r;
  return null;
}
function I(n, t, e) {
  return t.map((r) => {
    const i = h(n, r[n], t), o = h(n, r[n], e);
    return i == null || o == null ? null : { ...i, ...o };
  }).filter((r) => r !== null);
}
function T(n, t) {
  return t == null ? n.reduce((e, r) => e + Number(r), 0) : n.reduce((e, r) => e + t(r), 0);
}
function j(n) {
  return n == null || n.length === 0;
}
function E(n) {
  return n.some((t, e) => n.indexOf(t) !== e);
}
function F(n, t) {
  if (!n)
    return 0;
  if (!t)
    return n.length;
  let e = 0, r = 0;
  for (const i of n)
    t(i, r, n) && e++, r++;
  return e;
}
function $(n, t) {
  if (typeof t > "u") {
    const e = Array(n);
    let r = 0;
    for (; r < n; )
      e[r] = r++;
    return e;
  } else {
    const e = Array(t - n);
    let r = 0, i = n;
    for (; i < t; )
      e[r++] = i++;
    return e;
  }
}
function O(n, t) {
  const e = Array(t);
  let r = 0;
  for (; r < t; )
    e[r] = n / t * r++;
  return e;
}
function q(n) {
  let t = -1 / 0, e = 1 / 0, r = -1, i = -1, o = 0;
  for (const s of n)
    s > t && (t = s, r = o), s < e && (e = s, i = o), o++;
  return {
    max: t,
    min: e,
    maxIndex: r,
    minIndex: i
  };
}
function* V(n, t) {
  const e = n.length, r = Array(t).fill(0);
  for (; ; ) {
    yield r.map((o) => n[o]);
    let i = t - 1;
    for (; i >= 0 && (r[i]++, !(r[i] < e)); )
      r[i] = 0, i--;
    if (i < 0)
      break;
  }
}
const c = { symbol: "", exponent: 0 }, a = [
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
  c,
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
    return a.filter((e) => e.exponent % (t ? 1 : 3) === 0).map((e) => e.symbol);
  }
  static test(t) {
    return l.siValuePattern.test(t ?? "");
  }
  static parse(t) {
    const e = l.siValuePattern.exec(t ?? "");
    if (e == null)
      return new l(Number.NaN, c);
    const r = Number.parseFloat(e[1]), i = a.find((o) => o.symbol === e[2]);
    return i ? new l(r, i) : new l(r, c);
  }
  static fit(t, e) {
    if (!Number.isFinite(t) && e.length === 0)
      return new l(t, c);
    if (t !== 0) {
      const r = Math.sign(t);
      t = Math.abs(t);
      const i = e.map((o) => {
        const s = l.getPrefix(o), x = t * 10 ** -s.exponent, g = Math.abs(x - 500);
        return { prefix: s, practicalValue: x, rank: g };
      }).sort((o, s) => o.rank - s.rank);
      return new l(i[0].practicalValue * r, i[0].prefix);
    } else
      return new l(0, c);
  }
  static fitBy(t, e) {
    if (!Number.isFinite(t))
      return new l(t, c);
    const r = Math.sign(t);
    t = Math.abs(t);
    const i = l.getPrefix(e), o = t * 10 ** -i.exponent;
    return new l(o * r, i);
  }
  static getPrefix(t) {
    const e = a.find((r) => r.symbol === t);
    if (!e)
      throw new Error(`Prefix symbol '${t}' is not defined.`);
    return e;
  }
  static successor(t, e) {
    const r = l.getPrefix(t), i = a.filter(
      (s) => s.exponent > r.exponent && s.exponent % (e ? 1 : 3) === 0
    );
    if (i.length === 0)
      return t;
    const o = i.slice(-1)[0];
    return i.filter((s) => s.exponent === o.exponent)[0].symbol;
  }
  static predecessor(t, e) {
    const r = l.getPrefix(t), i = a.filter(
      (o) => o.exponent < r.exponent && o.exponent % (e ? 1 : 3) === 0
    );
    return i.length === 0 ? t : i[0].symbol;
  }
};
p(l, "siValuePattern", /^([+-]?(?:[0-9]*\.)?[0-9]+)([QRYZEPTGMkmuμnpfazyrq]?)$/);
let m = l;
const B = {
  required: (n) => !!n || "値を入力してください",
  value: (n) => Number.isFinite(m.parse(n).fraction) || "不正な値です",
  notZero: (n) => Number(n) !== 0 || "値を 0 にはできません",
  notNegative: (n) => {
    const t = m.parse(n);
    return Number.isFinite(t.fraction) && t.fraction >= 0 || "負値にはできません";
  }
};
function R(n) {
  return n == null ? "" : n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
class S {
  constructor(t) {
    this.obj = t;
  }
}
function M(n, t) {
  if (typeof n < "u" && n != null)
    for (const e of Object.keys(t))
      t[e] instanceof S ? n[e] = t[e].obj : t[e] === null ? n[e] = null : !Array.isArray(t[e]) && typeof t[e] == "object" ? n[e] = M(n[e], t[e]) : n[e] = t[e];
  return n;
}
function D(n, t, e, r) {
  return typeof n > "u" || n == null ? r : n ? t : e;
}
function z(n, t, e) {
  return n !== n && t !== t ? 0 : n !== n ? 1 : t !== t ? -1 : n == null && t == null ? 0 : n == null ? 1 : t == null ? -1 : n < t ? e === "descending" ? 1 : -1 : n > t ? e === "descending" ? -1 : 1 : 0;
}
function H(n) {
  return n.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
}
const N = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Z(n) {
  return n.replace(N, (t, e) => (e = e.toLowerCase(), e === "amp" ? "&" : e === "colon" ? ":" : e === "quot" ? '"' : e === "lt" ? "<" : e === "gt" ? ">" : e.charAt(0) === "#" ? e.charAt(1) === "x" ? String.fromCharCode(parseInt(e.substring(2), 16)) : String.fromCharCode(+e.substring(1)) : ""));
}
function G(n, t) {
  let e, r;
  const i = async function() {
    try {
      r = await n(), typeof r < "u" && (e = setTimeout(i, r * 1e3));
    } catch (o) {
      t && (r = await t(o), typeof r < "u" && (e = setTimeout(i, r * 1e3)));
    }
  };
  w(async () => {
    await i();
  }), k(() => {
    clearTimeout(e);
  });
}
function J(n, t, e) {
  const r = ((e == null ? void 0 : e.type) ?? "local") === "local" ? localStorage : sessionStorage, i = () => {
    typeof n.value < "u" && r.setItem(t, JSON.stringify(n.value));
  }, o = () => {
    const s = r.getItem(t);
    s != null && (n.value = JSON.parse(s));
  };
  return ((e == null ? void 0 : e.immediate) ?? !0) && ((e == null ? void 0 : e.readable) ?? !0) && o(), ((e == null ? void 0 : e.writable) ?? !0) && v(() => n.value, i, {
    immediate: (e == null ? void 0 : e.immediate) ?? !0
  }), {
    remove: () => {
      r.removeItem(t);
    },
    save: i,
    load: o
  };
}
class Q {
  constructor(t, e) {
    p(this, "_worker", null);
    this.workerConstructor = t, this.options = e;
  }
  async invoke(t) {
    return this._worker == null && (this._worker = new this.workerConstructor(this.options)), await new Promise((e, r) => {
      if (this._worker == null) {
        r("worker is not initialized");
        return;
      }
      this._worker.onmessage = function(i) {
        e(i.data);
      }, this._worker.onmessageerror = function(i) {
        r(i);
      }, this._worker.postMessage(t);
    });
  }
  get worker() {
    return this._worker;
  }
}
export {
  c as BaseSIPrefix,
  S as RawObject,
  B as Rules,
  m as SIValue,
  u as VuetifyColorSchemeName,
  Q as WorkerManager,
  f as applyColorScheme,
  z as compareWithNull,
  F as count,
  M as deepAssign,
  G as definePeriodicCall,
  O as divide,
  j as empty,
  H as escapeRegex,
  E as existsDuplicate,
  h as findBy,
  q as findMinMax,
  V as generateForDepth,
  d as getPrefersColorScheme,
  I as mergeArrayBy,
  L as reapplyTheme,
  $ as sequence,
  J as storage,
  T as sum,
  D as ternary,
  A as toggleTheme,
  Z as unescapeHtml,
  R as withCommas
};
