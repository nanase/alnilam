var V = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function B(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
}
var tt = { exports: {} };
(function(S, A) {
  (function(H, v) {
    S.exports = v();
  })(V, function() {
    var H = 1e3, v = 6e4, N = 36e5, j = "millisecond", l = "second", g = "minute", p = "hour", T = "day", C = "week", O = "month", y = "quarter", D = "year", $ = "date", s = "Invalid Date", M = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, k = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(o) {
      var r = ["th", "st", "nd", "rd"], e = o % 100;
      return "[" + o + (r[(e - 20) % 10] || r[e] || r[0]) + "]";
    } }, Y = function(o, r, e) {
      var u = String(o);
      return !u || u.length >= r ? o : "" + Array(r + 1 - u.length).join(e) + o;
    }, W = { s: Y, z: function(o) {
      var r = -o.utcOffset(), e = Math.abs(r), u = Math.floor(e / 60), n = e % 60;
      return (r <= 0 ? "+" : "-") + Y(u, 2, "0") + ":" + Y(n, 2, "0");
    }, m: function o(r, e) {
      if (r.date() < e.date()) return -o(e, r);
      var u = 12 * (e.year() - r.year()) + (e.month() - r.month()), n = r.clone().add(u, O), f = e - n < 0, h = r.clone().add(u + (f ? -1 : 1), O);
      return +(-(u + (e - n) / (f ? n - h : h - n)) || 0);
    }, a: function(o) {
      return o < 0 ? Math.ceil(o) || 0 : Math.floor(o);
    }, p: function(o) {
      return { M: O, y: D, w: C, d: T, D: $, h: p, m: g, s: l, ms: j, Q: y }[o] || String(o || "").toLowerCase().replace(/s$/, "");
    }, u: function(o) {
      return o === void 0;
    } }, x = "en", d = {};
    d[x] = k;
    var i = "$isDayjsObject", t = function(o) {
      return o instanceof z || !(!o || !o[i]);
    }, m = function o(r, e, u) {
      var n;
      if (!r) return x;
      if (typeof r == "string") {
        var f = r.toLowerCase();
        d[f] && (n = f), e && (d[f] = e, n = f);
        var h = r.split("-");
        if (!n && h.length > 1) return o(h[0]);
      } else {
        var w = r.name;
        d[w] = r, n = w;
      }
      return !u && n && (x = n), n || !u && x;
    }, c = function(o, r) {
      if (t(o)) return o.clone();
      var e = typeof r == "object" ? r : {};
      return e.date = o, e.args = arguments, new z(e);
    }, a = W;
    a.l = m, a.i = t, a.w = function(o, r) {
      return c(o, { locale: r.$L, utc: r.$u, x: r.$x, $offset: r.$offset });
    };
    var z = function() {
      function o(e) {
        this.$L = m(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[i] = !0;
      }
      var r = o.prototype;
      return r.parse = function(e) {
        this.$d = function(u) {
          var n = u.date, f = u.utc;
          if (n === null) return /* @__PURE__ */ new Date(NaN);
          if (a.u(n)) return /* @__PURE__ */ new Date();
          if (n instanceof Date) return new Date(n);
          if (typeof n == "string" && !/Z$/i.test(n)) {
            var h = n.match(M);
            if (h) {
              var w = h[2] - 1 || 0, b = (h[7] || "0").substring(0, 3);
              return f ? new Date(Date.UTC(h[1], w, h[3] || 1, h[4] || 0, h[5] || 0, h[6] || 0, b)) : new Date(h[1], w, h[3] || 1, h[4] || 0, h[5] || 0, h[6] || 0, b);
            }
          }
          return new Date(n);
        }(e), this.init();
      }, r.init = function() {
        var e = this.$d;
        this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds();
      }, r.$utils = function() {
        return a;
      }, r.isValid = function() {
        return this.$d.toString() !== s;
      }, r.isSame = function(e, u) {
        var n = c(e);
        return this.startOf(u) <= n && n <= this.endOf(u);
      }, r.isAfter = function(e, u) {
        return c(e) < this.startOf(u);
      }, r.isBefore = function(e, u) {
        return this.endOf(u) < c(e);
      }, r.$g = function(e, u, n) {
        return a.u(e) ? this[u] : this.set(n, e);
      }, r.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, r.valueOf = function() {
        return this.$d.getTime();
      }, r.startOf = function(e, u) {
        var n = this, f = !!a.u(u) || u, h = a.p(e), w = function(P, I) {
          var G = a.w(n.$u ? Date.UTC(n.$y, I, P) : new Date(n.$y, I, P), n);
          return f ? G : G.endOf(T);
        }, b = function(P, I) {
          return a.w(n.toDate()[P].apply(n.toDate("s"), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(I)), n);
        }, L = this.$W, F = this.$M, Z = this.$D, J = "set" + (this.$u ? "UTC" : "");
        switch (h) {
          case D:
            return f ? w(1, 0) : w(31, 11);
          case O:
            return f ? w(1, F) : w(0, F + 1);
          case C:
            var E = this.$locale().weekStart || 0, X = (L < E ? L + 7 : L) - E;
            return w(f ? Z - X : Z + (6 - X), F);
          case T:
          case $:
            return b(J + "Hours", 0);
          case p:
            return b(J + "Minutes", 1);
          case g:
            return b(J + "Seconds", 2);
          case l:
            return b(J + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, r.endOf = function(e) {
        return this.startOf(e, !1);
      }, r.$set = function(e, u) {
        var n, f = a.p(e), h = "set" + (this.$u ? "UTC" : ""), w = (n = {}, n[T] = h + "Date", n[$] = h + "Date", n[O] = h + "Month", n[D] = h + "FullYear", n[p] = h + "Hours", n[g] = h + "Minutes", n[l] = h + "Seconds", n[j] = h + "Milliseconds", n)[f], b = f === T ? this.$D + (u - this.$W) : u;
        if (f === O || f === D) {
          var L = this.clone().set($, 1);
          L.$d[w](b), L.init(), this.$d = L.set($, Math.min(this.$D, L.daysInMonth())).$d;
        } else w && this.$d[w](b);
        return this.init(), this;
      }, r.set = function(e, u) {
        return this.clone().$set(e, u);
      }, r.get = function(e) {
        return this[a.p(e)]();
      }, r.add = function(e, u) {
        var n, f = this;
        e = Number(e);
        var h = a.p(u), w = function(F) {
          var Z = c(f);
          return a.w(Z.date(Z.date() + Math.round(F * e)), f);
        };
        if (h === O) return this.set(O, this.$M + e);
        if (h === D) return this.set(D, this.$y + e);
        if (h === T) return w(1);
        if (h === C) return w(7);
        var b = (n = {}, n[g] = v, n[p] = N, n[l] = H, n)[h] || 1, L = this.$d.getTime() + e * b;
        return a.w(L, this);
      }, r.subtract = function(e, u) {
        return this.add(-1 * e, u);
      }, r.format = function(e) {
        var u = this, n = this.$locale();
        if (!this.isValid()) return n.invalidDate || s;
        var f = e || "YYYY-MM-DDTHH:mm:ssZ", h = a.z(this), w = this.$H, b = this.$m, L = this.$M, F = n.weekdays, Z = n.months, J = n.meridiem, E = function(I, G, q, K) {
          return I && (I[G] || I(u, f)) || q[G].slice(0, K);
        }, X = function(I) {
          return a.s(w % 12 || 12, I, "0");
        }, P = J || function(I, G, q) {
          var K = I < 12 ? "AM" : "PM";
          return q ? K.toLowerCase() : K;
        };
        return f.replace(_, function(I, G) {
          return G || function(q) {
            switch (q) {
              case "YY":
                return String(u.$y).slice(-2);
              case "YYYY":
                return a.s(u.$y, 4, "0");
              case "M":
                return L + 1;
              case "MM":
                return a.s(L + 1, 2, "0");
              case "MMM":
                return E(n.monthsShort, L, Z, 3);
              case "MMMM":
                return E(Z, L);
              case "D":
                return u.$D;
              case "DD":
                return a.s(u.$D, 2, "0");
              case "d":
                return String(u.$W);
              case "dd":
                return E(n.weekdaysMin, u.$W, F, 2);
              case "ddd":
                return E(n.weekdaysShort, u.$W, F, 3);
              case "dddd":
                return F[u.$W];
              case "H":
                return String(w);
              case "HH":
                return a.s(w, 2, "0");
              case "h":
                return X(1);
              case "hh":
                return X(2);
              case "a":
                return P(w, b, !0);
              case "A":
                return P(w, b, !1);
              case "m":
                return String(b);
              case "mm":
                return a.s(b, 2, "0");
              case "s":
                return String(u.$s);
              case "ss":
                return a.s(u.$s, 2, "0");
              case "SSS":
                return a.s(u.$ms, 3, "0");
              case "Z":
                return h;
            }
            return null;
          }(I) || h.replace(":", "");
        });
      }, r.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, r.diff = function(e, u, n) {
        var f, h = this, w = a.p(u), b = c(e), L = (b.utcOffset() - this.utcOffset()) * v, F = this - b, Z = function() {
          return a.m(h, b);
        };
        switch (w) {
          case D:
            f = Z() / 12;
            break;
          case O:
            f = Z();
            break;
          case y:
            f = Z() / 3;
            break;
          case C:
            f = (F - L) / 6048e5;
            break;
          case T:
            f = (F - L) / 864e5;
            break;
          case p:
            f = F / N;
            break;
          case g:
            f = F / v;
            break;
          case l:
            f = F / H;
            break;
          default:
            f = F;
        }
        return n ? f : a.a(f);
      }, r.daysInMonth = function() {
        return this.endOf(O).$D;
      }, r.$locale = function() {
        return d[this.$L];
      }, r.locale = function(e, u) {
        if (!e) return this.$L;
        var n = this.clone(), f = m(e, u, !0);
        return f && (n.$L = f), n;
      }, r.clone = function() {
        return a.w(this.$d, this);
      }, r.toDate = function() {
        return new Date(this.valueOf());
      }, r.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, r.toISOString = function() {
        return this.$d.toISOString();
      }, r.toString = function() {
        return this.$d.toUTCString();
      }, o;
    }(), U = z.prototype;
    return c.prototype = U, [["$ms", j], ["$s", l], ["$m", g], ["$H", p], ["$W", T], ["$M", O], ["$y", D], ["$D", $]].forEach(function(o) {
      U[o[1]] = function(r) {
        return this.$g(r, o[0], o[1]);
      };
    }), c.extend = function(o, r) {
      return o.$i || (o(r, z, c), o.$i = !0), c;
    }, c.locale = m, c.isDayjs = t, c.unix = function(o) {
      return c(1e3 * o);
    }, c.en = d[x], c.Ls = d, c.p = {}, c;
  });
})(tt);
var R = tt.exports;
const Q = /* @__PURE__ */ B(R);
var et = { exports: {} };
(function(S, A) {
  (function(H, v) {
    S.exports = v();
  })(V, function() {
    var H = "minute", v = /[+-]\d\d(?::?\d\d)?/g, N = /([+-]|\d\d)/g;
    return function(j, l, g) {
      var p = l.prototype;
      g.utc = function(s) {
        var M = { date: s, utc: !0, args: arguments };
        return new l(M);
      }, p.utc = function(s) {
        var M = g(this.toDate(), { locale: this.$L, utc: !0 });
        return s ? M.add(this.utcOffset(), H) : M;
      }, p.local = function() {
        return g(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var T = p.parse;
      p.parse = function(s) {
        s.utc && (this.$u = !0), this.$utils().u(s.$offset) || (this.$offset = s.$offset), T.call(this, s);
      };
      var C = p.init;
      p.init = function() {
        if (this.$u) {
          var s = this.$d;
          this.$y = s.getUTCFullYear(), this.$M = s.getUTCMonth(), this.$D = s.getUTCDate(), this.$W = s.getUTCDay(), this.$H = s.getUTCHours(), this.$m = s.getUTCMinutes(), this.$s = s.getUTCSeconds(), this.$ms = s.getUTCMilliseconds();
        } else C.call(this);
      };
      var O = p.utcOffset;
      p.utcOffset = function(s, M) {
        var _ = this.$utils().u;
        if (_(s)) return this.$u ? 0 : _(this.$offset) ? O.call(this) : this.$offset;
        if (typeof s == "string" && (s = function(x) {
          x === void 0 && (x = "");
          var d = x.match(v);
          if (!d) return null;
          var i = ("" + d[0]).match(N) || ["-", 0, 0], t = i[0], m = 60 * +i[1] + +i[2];
          return m === 0 ? 0 : t === "+" ? m : -m;
        }(s), s === null)) return this;
        var k = Math.abs(s) <= 16 ? 60 * s : s, Y = this;
        if (M) return Y.$offset = k, Y.$u = s === 0, Y;
        if (s !== 0) {
          var W = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (Y = this.local().add(k + W, H)).$offset = k, Y.$x.$localOffset = W;
        } else Y = this.utc();
        return Y;
      };
      var y = p.format;
      p.format = function(s) {
        var M = s || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return y.call(this, M);
      }, p.valueOf = function() {
        var s = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * s;
      }, p.isUTC = function() {
        return !!this.$u;
      }, p.toISOString = function() {
        return this.toDate().toISOString();
      }, p.toString = function() {
        return this.toDate().toUTCString();
      };
      var D = p.toDate;
      p.toDate = function(s) {
        return s === "s" && this.$offset ? g(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : D.call(this);
      };
      var $ = p.diff;
      p.diff = function(s, M, _) {
        if (s && this.$u === s.$u) return $.call(this, s, M, _);
        var k = this.local(), Y = g(s).local();
        return $.call(k, Y, M, _);
      };
    };
  });
})(et);
var it = et.exports;
const ot = /* @__PURE__ */ B(it);
var nt = { exports: {} };
(function(S, A) {
  (function(H, v) {
    S.exports = v();
  })(V, function() {
    var H = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, v = {};
    return function(N, j, l) {
      var g, p = function(y, D, $) {
        $ === void 0 && ($ = {});
        var s = new Date(y), M = function(_, k) {
          k === void 0 && (k = {});
          var Y = k.timeZoneName || "short", W = _ + "|" + Y, x = v[W];
          return x || (x = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: _, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: Y }), v[W] = x), x;
        }(D, $);
        return M.formatToParts(s);
      }, T = function(y, D) {
        for (var $ = p(y, D), s = [], M = 0; M < $.length; M += 1) {
          var _ = $[M], k = _.type, Y = _.value, W = H[k];
          W >= 0 && (s[W] = parseInt(Y, 10));
        }
        var x = s[3], d = x === 24 ? 0 : x, i = s[0] + "-" + s[1] + "-" + s[2] + " " + d + ":" + s[4] + ":" + s[5] + ":000", t = +y;
        return (l.utc(i).valueOf() - (t -= t % 1e3)) / 6e4;
      }, C = j.prototype;
      C.tz = function(y, D) {
        y === void 0 && (y = g);
        var $, s = this.utcOffset(), M = this.toDate(), _ = M.toLocaleString("en-US", { timeZone: y }), k = Math.round((M - new Date(_)) / 1e3 / 60), Y = 15 * -Math.round(M.getTimezoneOffset() / 15) - k;
        if (!Number(Y)) $ = this.utcOffset(0, D);
        else if ($ = l(_, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(Y, !0), D) {
          var W = $.utcOffset();
          $ = $.add(s - W, "minute");
        }
        return $.$x.$timezone = y, $;
      }, C.offsetName = function(y) {
        var D = this.$x.$timezone || l.tz.guess(), $ = p(this.valueOf(), D, { timeZoneName: y }).find(function(s) {
          return s.type.toLowerCase() === "timezonename";
        });
        return $ && $.value;
      };
      var O = C.startOf;
      C.startOf = function(y, D) {
        if (!this.$x || !this.$x.$timezone) return O.call(this, y, D);
        var $ = l(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return O.call($, y, D).tz(this.$x.$timezone, !0);
      }, l.tz = function(y, D, $) {
        var s = $ && D, M = $ || D || g, _ = T(+l(), M);
        if (typeof y != "string") return l(y).tz(M);
        var k = function(d, i, t) {
          var m = d - 60 * i * 1e3, c = T(m, t);
          if (i === c) return [m, i];
          var a = T(m -= 60 * (c - i) * 1e3, t);
          return c === a ? [m, c] : [d - 60 * Math.min(c, a) * 1e3, Math.max(c, a)];
        }(l.utc(y, s).valueOf(), _, M), Y = k[0], W = k[1], x = l(Y).utcOffset(W);
        return x.$x.$timezone = M, x;
      }, l.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, l.tz.setDefault = function(y) {
        g = y;
      };
    };
  });
})(nt);
var ut = nt.exports;
const at = /* @__PURE__ */ B(ut);
var rt = { exports: {} };
(function(S, A) {
  (function(H, v) {
    S.exports = v();
  })(V, function() {
    return function(H, v) {
      var N = v.prototype, j = N.format;
      N.format = function(l) {
        var g = this, p = this.$locale();
        if (!this.isValid()) return j.bind(this)(l);
        var T = this.$utils(), C = (l || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(O) {
          switch (O) {
            case "Q":
              return Math.ceil((g.$M + 1) / 3);
            case "Do":
              return p.ordinal(g.$D);
            case "gggg":
              return g.weekYear();
            case "GGGG":
              return g.isoWeekYear();
            case "wo":
              return p.ordinal(g.week(), "W");
            case "w":
            case "ww":
              return T.s(g.week(), O === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return T.s(g.isoWeek(), O === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return T.s(String(g.$H === 0 ? 24 : g.$H), O === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(g.$d.getTime() / 1e3);
            case "x":
              return g.$d.getTime();
            case "z":
              return "[" + g.offsetName() + "]";
            case "zzz":
              return "[" + g.offsetName("long") + "]";
            default:
              return O;
          }
        });
        return j.bind(this)(C);
      };
    };
  });
})(rt);
var ct = rt.exports;
const ft = /* @__PURE__ */ B(ct);
var st = { exports: {} };
(function(S, A) {
  (function(H, v) {
    S.exports = v();
  })(V, function() {
    var H, v, N = 1e3, j = 6e4, l = 36e5, g = 864e5, p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, T = 31536e6, C = 2628e6, O = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: T, months: C, days: g, hours: l, minutes: j, seconds: N, milliseconds: 1, weeks: 6048e5 }, D = function(d) {
      return d instanceof W;
    }, $ = function(d, i, t) {
      return new W(d, t, i.$l);
    }, s = function(d) {
      return v.p(d) + "s";
    }, M = function(d) {
      return d < 0;
    }, _ = function(d) {
      return M(d) ? Math.ceil(d) : Math.floor(d);
    }, k = function(d) {
      return Math.abs(d);
    }, Y = function(d, i) {
      return d ? M(d) ? { negative: !0, format: "" + k(d) + i } : { negative: !1, format: "" + d + i } : { negative: !1, format: "" };
    }, W = function() {
      function d(t, m, c) {
        var a = this;
        if (this.$d = {}, this.$l = c, t === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), m) return $(t * y[s(m)], this);
        if (typeof t == "number") return this.$ms = t, this.parseFromMilliseconds(), this;
        if (typeof t == "object") return Object.keys(t).forEach(function(o) {
          a.$d[s(o)] = t[o];
        }), this.calMilliseconds(), this;
        if (typeof t == "string") {
          var z = t.match(O);
          if (z) {
            var U = z.slice(2).map(function(o) {
              return o != null ? Number(o) : 0;
            });
            return this.$d.years = U[0], this.$d.months = U[1], this.$d.weeks = U[2], this.$d.days = U[3], this.$d.hours = U[4], this.$d.minutes = U[5], this.$d.seconds = U[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var i = d.prototype;
      return i.calMilliseconds = function() {
        var t = this;
        this.$ms = Object.keys(this.$d).reduce(function(m, c) {
          return m + (t.$d[c] || 0) * y[c];
        }, 0);
      }, i.parseFromMilliseconds = function() {
        var t = this.$ms;
        this.$d.years = _(t / T), t %= T, this.$d.months = _(t / C), t %= C, this.$d.days = _(t / g), t %= g, this.$d.hours = _(t / l), t %= l, this.$d.minutes = _(t / j), t %= j, this.$d.seconds = _(t / N), t %= N, this.$d.milliseconds = t;
      }, i.toISOString = function() {
        var t = Y(this.$d.years, "Y"), m = Y(this.$d.months, "M"), c = +this.$d.days || 0;
        this.$d.weeks && (c += 7 * this.$d.weeks);
        var a = Y(c, "D"), z = Y(this.$d.hours, "H"), U = Y(this.$d.minutes, "M"), o = this.$d.seconds || 0;
        this.$d.milliseconds && (o += this.$d.milliseconds / 1e3, o = Math.round(1e3 * o) / 1e3);
        var r = Y(o, "S"), e = t.negative || m.negative || a.negative || z.negative || U.negative || r.negative, u = z.format || U.format || r.format ? "T" : "", n = (e ? "-" : "") + "P" + t.format + m.format + a.format + u + z.format + U.format + r.format;
        return n === "P" || n === "-P" ? "P0D" : n;
      }, i.toJSON = function() {
        return this.toISOString();
      }, i.format = function(t) {
        var m = t || "YYYY-MM-DDTHH:mm:ss", c = { Y: this.$d.years, YY: v.s(this.$d.years, 2, "0"), YYYY: v.s(this.$d.years, 4, "0"), M: this.$d.months, MM: v.s(this.$d.months, 2, "0"), D: this.$d.days, DD: v.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: v.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: v.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: v.s(this.$d.seconds, 2, "0"), SSS: v.s(this.$d.milliseconds, 3, "0") };
        return m.replace(p, function(a, z) {
          return z || String(c[a]);
        });
      }, i.as = function(t) {
        return this.$ms / y[s(t)];
      }, i.get = function(t) {
        var m = this.$ms, c = s(t);
        return c === "milliseconds" ? m %= 1e3 : m = c === "weeks" ? _(m / y[c]) : this.$d[c], m || 0;
      }, i.add = function(t, m, c) {
        var a;
        return a = m ? t * y[s(m)] : D(t) ? t.$ms : $(t, this).$ms, $(this.$ms + a * (c ? -1 : 1), this);
      }, i.subtract = function(t, m) {
        return this.add(t, m, !0);
      }, i.locale = function(t) {
        var m = this.clone();
        return m.$l = t, m;
      }, i.clone = function() {
        return $(this.$ms, this);
      }, i.humanize = function(t) {
        return H().add(this.$ms, "ms").locale(this.$l).fromNow(!t);
      }, i.valueOf = function() {
        return this.asMilliseconds();
      }, i.milliseconds = function() {
        return this.get("milliseconds");
      }, i.asMilliseconds = function() {
        return this.as("milliseconds");
      }, i.seconds = function() {
        return this.get("seconds");
      }, i.asSeconds = function() {
        return this.as("seconds");
      }, i.minutes = function() {
        return this.get("minutes");
      }, i.asMinutes = function() {
        return this.as("minutes");
      }, i.hours = function() {
        return this.get("hours");
      }, i.asHours = function() {
        return this.as("hours");
      }, i.days = function() {
        return this.get("days");
      }, i.asDays = function() {
        return this.as("days");
      }, i.weeks = function() {
        return this.get("weeks");
      }, i.asWeeks = function() {
        return this.as("weeks");
      }, i.months = function() {
        return this.get("months");
      }, i.asMonths = function() {
        return this.as("months");
      }, i.years = function() {
        return this.get("years");
      }, i.asYears = function() {
        return this.as("years");
      }, d;
    }(), x = function(d, i, t) {
      return d.add(i.years() * t, "y").add(i.months() * t, "M").add(i.days() * t, "d").add(i.hours() * t, "h").add(i.minutes() * t, "m").add(i.seconds() * t, "s").add(i.milliseconds() * t, "ms");
    };
    return function(d, i, t) {
      H = t, v = t().$utils(), t.duration = function(a, z) {
        var U = t.locale();
        return $(a, { $l: U }, z);
      }, t.isDuration = D;
      var m = i.prototype.add, c = i.prototype.subtract;
      i.prototype.add = function(a, z) {
        return D(a) ? x(this, a, 1) : m.bind(this)(a, z);
      }, i.prototype.subtract = function(a, z) {
        return D(a) ? x(this, a, -1) : c.bind(this)(a, z);
      };
    };
  });
})(st);
var ht = st.exports;
const dt = /* @__PURE__ */ B(ht);
var lt = { exports: {} };
(function(S, A) {
  (function(H, v) {
    S.exports = v(R);
  })(V, function(H) {
    function v(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var N = v(H), j = { name: "ja", weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(l) {
      return l + "日";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日(ddd) HH:mm" }, meridiem: function(l) {
      return l < 12 ? "午前" : "午後";
    }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } };
    return N.default.locale(j, null, !0), j;
  });
})(lt);
Q.extend(ot);
Q.extend(at);
Q.extend(ft);
Q.extend(dt);
function $t(S, A) {
  const H = Intl.DateTimeFormat(S).resolvedOptions();
  return Q(A).tz(H.timeZone).locale(H.locale);
}
function mt(S) {
  return S.isUTC() ? "UTC" : "$x" in S && typeof S.$x == "object" && S.$x != null && "$timezone" in S.$x && typeof S.$x.$timezone == "string" ? S.$x.$timezone : Q.tz.guess();
}
const vt = R.Dayjs;
export {
  vt as Dayjs,
  ft as advancedFormat,
  Q as default,
  dt as duration,
  $t as fromLocale,
  mt as getTimezoneName,
  at as timezone,
  ot as utc
};
