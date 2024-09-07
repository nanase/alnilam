var b = Object.defineProperty;
var y = (x, e, t) => e in x ? b(x, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[e] = t;
var f = (x, e, t) => y(x, typeof e != "symbol" ? e + "" : e, t);
const c = { symbol: "", exponent: 0 }, p = [
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
    return p.filter((t) => t.exponent % (e ? 1 : 3) === 0).map((t) => t.symbol);
  }
  static test(e) {
    return n.siValuePattern.test(e ?? "");
  }
  static parse(e) {
    const t = n.siValuePattern.exec(e ?? "");
    if (t == null)
      return new n(Number.NaN, c);
    const o = Number.parseFloat(t[1]), r = p.find((s) => s.symbol === t[2]);
    return new n(o, r);
  }
  static fit(e, t) {
    if (!Number.isFinite(e) && t.length === 0)
      return new n(e, c);
    if (e !== 0) {
      const o = Math.sign(e);
      e = Math.abs(e);
      const r = t.map((s) => {
        const i = n.getPrefix(s), a = e * 10 ** -i.exponent, m = Math.abs(a - 500);
        return { prefix: i, practicalValue: a, rank: m };
      }).sort((s, i) => s.rank - i.rank);
      return new n(r[0].practicalValue * o, r[0].prefix);
    } else
      return new n(0, c);
  }
  static fitBy(e, t) {
    const o = n.getPrefix(t);
    if (!Number.isFinite(e))
      return new n(e, o);
    const r = Math.sign(e);
    e = Math.abs(e);
    const s = e * 10 ** -o.exponent;
    return new n(s * r, o);
  }
  static getPrefix(e) {
    const t = p.find((o) => o.symbol === e);
    if (!t)
      throw new Error(`Prefix symbol '${e}' is not defined.`);
    return t;
  }
  static successor(e, t) {
    const o = n.getPrefix(e), r = p.filter(
      (i) => i.exponent > o.exponent && i.exponent % (t ? 1 : 3) === 0
    );
    if (r.length === 0)
      return e;
    const s = r.slice(-1)[0];
    return r.filter((i) => i.exponent === s.exponent)[0].symbol;
  }
  static predecessor(e, t) {
    const o = n.getPrefix(e), r = p.filter(
      (s) => s.exponent < o.exponent && s.exponent % (t ? 1 : 3) === 0
    );
    return r.length === 0 ? e : r[0].symbol;
  }
};
f(n, "siValuePattern", /^([+-]?(?:[0-9]*\.)?[0-9]+)([QRYZEPTGMkmuμnpfazyrq]?)$/);
let l = n;
export {
  c as BaseSIPrefix,
  l as SIValue
};
