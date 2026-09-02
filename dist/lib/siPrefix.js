const f = { symbol: "", exponent: 0 }, p = [
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
];
class o {
  constructor(e, t) {
    this.fraction = e, this.prefix = t;
  }
  fraction;
  prefix;
  static siValuePattern = /^([+-]?(?:[0-9]*\.)?[0-9]+)([QRYZEPTGMkmuμnpfazyrq]?)$/;
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
    return o.siValuePattern.test(e ?? "");
  }
  static parseToPart(e) {
    const t = o.siValuePattern.exec(e ?? "");
    return t == null ? {} : { fraction: Number.parseFloat(t[1]), prefix: p.find((n) => n.symbol === t[2]) };
  }
  static parse(e) {
    const { fraction: t, prefix: n } = o.parseToPart(e);
    return typeof t > "u" || typeof n > "u" ? new o(Number.NaN, f) : new o(t, n);
  }
  static fit(e, t) {
    if (!Number.isFinite(e) && t.length === 0)
      return new o(e, f);
    if (e !== 0) {
      const n = Math.sign(e), r = Math.abs(e), i = t.map((s) => {
        const x = o.getPrefix(s), a = r * 10 ** -x.exponent, c = Math.abs(a - 500);
        return { prefix: x, practicalValue: a, rank: c };
      }).sort((s, x) => s.rank - x.rank);
      return new o(i[0].practicalValue * n, i[0].prefix);
    }
    return new o(0, f);
  }
  static fitBy(e, t) {
    const n = o.getPrefix(t);
    if (!Number.isFinite(e))
      return new o(e, n);
    const r = Math.sign(e), s = Math.abs(e) * 10 ** -n.exponent;
    return new o(s * r, n);
  }
  static getPrefix(e) {
    const t = p.find((n) => n.symbol === e);
    if (!t)
      throw new Error(`Prefix symbol '${e}' is not defined.`);
    return t;
  }
  static successor(e, t) {
    const n = o.getPrefix(e), r = p.filter(
      (s) => s.exponent > n.exponent && s.exponent % (t ? 1 : 3) === 0
    );
    if (r.length === 0)
      return e;
    const i = r.slice(-1)[0];
    return r.filter((s) => s.exponent === i.exponent)[0].symbol;
  }
  static predecessor(e, t) {
    const n = o.getPrefix(e), r = p.filter(
      (i) => i.exponent < n.exponent && i.exponent % (t ? 1 : 3) === 0
    );
    return r.length === 0 ? e : r[0].symbol;
  }
}
export {
  f as BaseSIPrefix,
  o as SIValue
};
