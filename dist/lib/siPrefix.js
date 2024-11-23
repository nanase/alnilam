var u = Object.defineProperty;
var y = (p, e, t) => e in p ? u(p, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[e] = t;
var l = (p, e, t) => y(p, typeof e != "symbol" ? e + "" : e, t);
const f = { symbol: "", exponent: 0 }, x = [
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
  f,
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
], n = class n {
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
    return x.filter((t) => t.exponent % (e ? 1 : 3) === 0).map((t) => t.symbol);
  }
  static test(e) {
    return n.siValuePattern.test(e ?? "");
  }
  static parseToPart(e) {
    const t = n.siValuePattern.exec(e ?? "");
    return t == null ? {} : { fraction: Number.parseFloat(t[1]), prefix: x.find((o) => o.symbol === t[2]) };
  }
  static parse(e) {
    const { fraction: t, prefix: o } = n.parseToPart(e);
    return typeof t > "u" || typeof o > "u" ? new n(Number.NaN, f) : new n(t, o);
  }
  static fit(e, t) {
    if (!Number.isFinite(e) && t.length === 0)
      return new n(e, f);
    if (e !== 0) {
      const o = Math.sign(e), r = Math.abs(e), i = t.map((s) => {
        const a = n.getPrefix(s), c = r * 10 ** -a.exponent, m = Math.abs(c - 500);
        return { prefix: a, practicalValue: c, rank: m };
      }).sort((s, a) => s.rank - a.rank);
      return new n(i[0].practicalValue * o, i[0].prefix);
    }
    return new n(0, f);
  }
  static fitBy(e, t) {
    const o = n.getPrefix(t);
    if (!Number.isFinite(e))
      return new n(e, o);
    const r = Math.sign(e), s = Math.abs(e) * 10 ** -o.exponent;
    return new n(s * r, o);
  }
  static getPrefix(e) {
    const t = x.find((o) => o.symbol === e);
    if (!t)
      throw new Error(`Prefix symbol '${e}' is not defined.`);
    return t;
  }
  static successor(e, t) {
    const o = n.getPrefix(e), r = x.filter(
      (s) => s.exponent > o.exponent && s.exponent % (t ? 1 : 3) === 0
    );
    if (r.length === 0)
      return e;
    const i = r.slice(-1)[0];
    return r.filter((s) => s.exponent === i.exponent)[0].symbol;
  }
  static predecessor(e, t) {
    const o = n.getPrefix(e), r = x.filter(
      (i) => i.exponent < o.exponent && i.exponent % (t ? 1 : 3) === 0
    );
    return r.length === 0 ? e : r[0].symbol;
  }
};
l(n, "siValuePattern", /^([+-]?(?:[0-9]*\.)?[0-9]+)([QRYZEPTGMkmuμnpfazyrq]?)$/);
let b = n;
export {
  f as BaseSIPrefix,
  b as SIValue
};
