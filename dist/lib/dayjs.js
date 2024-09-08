var V = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function B(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
var K = { exports: {} }, tt;
function et() {
  return tt || (tt = 1, function(_, A) {
    (function(H, v) {
      _.exports = v();
    })(V, function() {
      var H = 1e3, v = 6e4, N = 36e5, W = "millisecond", l = "second", g = "minute", p = "hour", T = "day", j = "week", O = "month", y = "quarter", D = "year", m = "date", s = "Invalid Date", M = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, S = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, k = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(u) {
        var r = ["th", "st", "nd", "rd"], e = u % 100;
        return "[" + u + (r[(e - 20) % 10] || r[e] || r[0]) + "]";
      } }, Y = function(u, r, e) {
        var o = String(u);
        return !o || o.length >= r ? u : "" + Array(r + 1 - o.length).join(e) + u;
      }, C = { s: Y, z: function(u) {
        var r = -u.utcOffset(), e = Math.abs(r), o = Math.floor(e / 60), n = e % 60;
        return (r <= 0 ? "+" : "-") + Y(o, 2, "0") + ":" + Y(n, 2, "0");
      }, m: function u(r, e) {
        if (r.date() < e.date()) return -u(e, r);
        var o = 12 * (e.year() - r.year()) + (e.month() - r.month()), n = r.clone().add(o, O), f = e - n < 0, h = r.clone().add(o + (f ? -1 : 1), O);
        return +(-(o + (e - n) / (f ? n - h : h - n)) || 0);
      }, a: function(u) {
        return u < 0 ? Math.ceil(u) || 0 : Math.floor(u);
      }, p: function(u) {
        return { M: O, y: D, w: j, d: T, D: m, h: p, m: g, s: l, ms: W, Q: y }[u] || String(u || "").toLowerCase().replace(/s$/, "");
      }, u: function(u) {
        return u === void 0;
      } }, x = "en", d = {};
      d[x] = k;
      var i = "$isDayjsObject", t = function(u) {
        return u instanceof z || !(!u || !u[i]);
      }, $ = function u(r, e, o) {
        var n;
        if (!r) return x;
        if (typeof r == "string") {
          var f = r.toLowerCase();
          d[f] && (n = f), e && (d[f] = e, n = f);
          var h = r.split("-");
          if (!n && h.length > 1) return u(h[0]);
        } else {
          var w = r.name;
          d[w] = r, n = w;
        }
        return !o && n && (x = n), n || !o && x;
      }, c = function(u, r) {
        if (t(u)) return u.clone();
        var e = typeof r == "object" ? r : {};
        return e.date = u, e.args = arguments, new z(e);
      }, a = C;
      a.l = $, a.i = t, a.w = function(u, r) {
        return c(u, { locale: r.$L, utc: r.$u, x: r.$x, $offset: r.$offset });
      };
      var z = function() {
        function u(e) {
          this.$L = $(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[i] = !0;
        }
        var r = u.prototype;
        return r.parse = function(e) {
          this.$d = function(o) {
            var n = o.date, f = o.utc;
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
        }, r.isSame = function(e, o) {
          var n = c(e);
          return this.startOf(o) <= n && n <= this.endOf(o);
        }, r.isAfter = function(e, o) {
          return c(e) < this.startOf(o);
        }, r.isBefore = function(e, o) {
          return this.endOf(o) < c(e);
        }, r.$g = function(e, o, n) {
          return a.u(e) ? this[o] : this.set(n, e);
        }, r.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, r.valueOf = function() {
          return this.$d.getTime();
        }, r.startOf = function(e, o) {
          var n = this, f = !!a.u(o) || o, h = a.p(e), w = function(P, I) {
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
            case j:
              var E = this.$locale().weekStart || 0, Q = (L < E ? L + 7 : L) - E;
              return w(f ? Z - Q : Z + (6 - Q), F);
            case T:
            case m:
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
        }, r.$set = function(e, o) {
          var n, f = a.p(e), h = "set" + (this.$u ? "UTC" : ""), w = (n = {}, n[T] = h + "Date", n[m] = h + "Date", n[O] = h + "Month", n[D] = h + "FullYear", n[p] = h + "Hours", n[g] = h + "Minutes", n[l] = h + "Seconds", n[W] = h + "Milliseconds", n)[f], b = f === T ? this.$D + (o - this.$W) : o;
          if (f === O || f === D) {
            var L = this.clone().set(m, 1);
            L.$d[w](b), L.init(), this.$d = L.set(m, Math.min(this.$D, L.daysInMonth())).$d;
          } else w && this.$d[w](b);
          return this.init(), this;
        }, r.set = function(e, o) {
          return this.clone().$set(e, o);
        }, r.get = function(e) {
          return this[a.p(e)]();
        }, r.add = function(e, o) {
          var n, f = this;
          e = Number(e);
          var h = a.p(o), w = function(F) {
            var Z = c(f);
            return a.w(Z.date(Z.date() + Math.round(F * e)), f);
          };
          if (h === O) return this.set(O, this.$M + e);
          if (h === D) return this.set(D, this.$y + e);
          if (h === T) return w(1);
          if (h === j) return w(7);
          var b = (n = {}, n[g] = v, n[p] = N, n[l] = H, n)[h] || 1, L = this.$d.getTime() + e * b;
          return a.w(L, this);
        }, r.subtract = function(e, o) {
          return this.add(-1 * e, o);
        }, r.format = function(e) {
          var o = this, n = this.$locale();
          if (!this.isValid()) return n.invalidDate || s;
          var f = e || "YYYY-MM-DDTHH:mm:ssZ", h = a.z(this), w = this.$H, b = this.$m, L = this.$M, F = n.weekdays, Z = n.months, J = n.meridiem, E = function(I, G, X, R) {
            return I && (I[G] || I(o, f)) || X[G].slice(0, R);
          }, Q = function(I) {
            return a.s(w % 12 || 12, I, "0");
          }, P = J || function(I, G, X) {
            var R = I < 12 ? "AM" : "PM";
            return X ? R.toLowerCase() : R;
          };
          return f.replace(S, function(I, G) {
            return G || function(X) {
              switch (X) {
                case "YY":
                  return String(o.$y).slice(-2);
                case "YYYY":
                  return a.s(o.$y, 4, "0");
                case "M":
                  return L + 1;
                case "MM":
                  return a.s(L + 1, 2, "0");
                case "MMM":
                  return E(n.monthsShort, L, Z, 3);
                case "MMMM":
                  return E(Z, L);
                case "D":
                  return o.$D;
                case "DD":
                  return a.s(o.$D, 2, "0");
                case "d":
                  return String(o.$W);
                case "dd":
                  return E(n.weekdaysMin, o.$W, F, 2);
                case "ddd":
                  return E(n.weekdaysShort, o.$W, F, 3);
                case "dddd":
                  return F[o.$W];
                case "H":
                  return String(w);
                case "HH":
                  return a.s(w, 2, "0");
                case "h":
                  return Q(1);
                case "hh":
                  return Q(2);
                case "a":
                  return P(w, b, !0);
                case "A":
                  return P(w, b, !1);
                case "m":
                  return String(b);
                case "mm":
                  return a.s(b, 2, "0");
                case "s":
                  return String(o.$s);
                case "ss":
                  return a.s(o.$s, 2, "0");
                case "SSS":
                  return a.s(o.$ms, 3, "0");
                case "Z":
                  return h;
              }
              return null;
            }(I) || h.replace(":", "");
          });
        }, r.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, r.diff = function(e, o, n) {
          var f, h = this, w = a.p(o), b = c(e), L = (b.utcOffset() - this.utcOffset()) * v, F = this - b, Z = function() {
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
            case j:
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
        }, r.locale = function(e, o) {
          if (!e) return this.$L;
          var n = this.clone(), f = $(e, o, !0);
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
        }, u;
      }(), U = z.prototype;
      return c.prototype = U, [["$ms", W], ["$s", l], ["$m", g], ["$H", p], ["$W", T], ["$M", O], ["$y", D], ["$D", m]].forEach(function(u) {
        U[u[1]] = function(r) {
          return this.$g(r, u[0], u[1]);
        };
      }), c.extend = function(u, r) {
        return u.$i || (u(r, z, c), u.$i = !0), c;
      }, c.locale = $, c.isDayjs = t, c.unix = function(u) {
        return c(1e3 * u);
      }, c.en = d[x], c.Ls = d, c.p = {}, c;
    });
  }(K)), K.exports;
}
var nt = et();
const q = /* @__PURE__ */ B(nt);
var rt = { exports: {} };
(function(_, A) {
  (function(H, v) {
    _.exports = v();
  })(V, function() {
    var H = "minute", v = /[+-]\d\d(?::?\d\d)?/g, N = /([+-]|\d\d)/g;
    return function(W, l, g) {
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
      var j = p.init;
      p.init = function() {
        if (this.$u) {
          var s = this.$d;
          this.$y = s.getUTCFullYear(), this.$M = s.getUTCMonth(), this.$D = s.getUTCDate(), this.$W = s.getUTCDay(), this.$H = s.getUTCHours(), this.$m = s.getUTCMinutes(), this.$s = s.getUTCSeconds(), this.$ms = s.getUTCMilliseconds();
        } else j.call(this);
      };
      var O = p.utcOffset;
      p.utcOffset = function(s, M) {
        var S = this.$utils().u;
        if (S(s)) return this.$u ? 0 : S(this.$offset) ? O.call(this) : this.$offset;
        if (typeof s == "string" && (s = function(x) {
          x === void 0 && (x = "");
          var d = x.match(v);
          if (!d) return null;
          var i = ("" + d[0]).match(N) || ["-", 0, 0], t = i[0], $ = 60 * +i[1] + +i[2];
          return $ === 0 ? 0 : t === "+" ? $ : -$;
        }(s), s === null)) return this;
        var k = Math.abs(s) <= 16 ? 60 * s : s, Y = this;
        if (M) return Y.$offset = k, Y.$u = s === 0, Y;
        if (s !== 0) {
          var C = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (Y = this.local().add(k + C, H)).$offset = k, Y.$x.$localOffset = C;
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
      var m = p.diff;
      p.diff = function(s, M, S) {
        if (s && this.$u === s.$u) return m.call(this, s, M, S);
        var k = this.local(), Y = g(s).local();
        return m.call(k, Y, M, S);
      };
    };
  });
})(rt);
var ot = rt.exports;
const at = /* @__PURE__ */ B(ot);
var st = { exports: {} };
(function(_, A) {
  (function(H, v) {
    _.exports = v();
  })(V, function() {
    var H = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, v = {};
    return function(N, W, l) {
      var g, p = function(y, D, m) {
        m === void 0 && (m = {});
        var s = new Date(y), M = function(S, k) {
          k === void 0 && (k = {});
          var Y = k.timeZoneName || "short", C = S + "|" + Y, x = v[C];
          return x || (x = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: S, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: Y }), v[C] = x), x;
        }(D, m);
        return M.formatToParts(s);
      }, T = function(y, D) {
        for (var m = p(y, D), s = [], M = 0; M < m.length; M += 1) {
          var S = m[M], k = S.type, Y = S.value, C = H[k];
          C >= 0 && (s[C] = parseInt(Y, 10));
        }
        var x = s[3], d = x === 24 ? 0 : x, i = s[0] + "-" + s[1] + "-" + s[2] + " " + d + ":" + s[4] + ":" + s[5] + ":000", t = +y;
        return (l.utc(i).valueOf() - (t -= t % 1e3)) / 6e4;
      }, j = W.prototype;
      j.tz = function(y, D) {
        y === void 0 && (y = g);
        var m, s = this.utcOffset(), M = this.toDate(), S = M.toLocaleString("en-US", { timeZone: y }), k = Math.round((M - new Date(S)) / 1e3 / 60), Y = 15 * -Math.round(M.getTimezoneOffset() / 15) - k;
        if (!Number(Y)) m = this.utcOffset(0, D);
        else if (m = l(S, { locale: this.$L }).$set("millisecond", this.$ms).utcOffset(Y, !0), D) {
          var C = m.utcOffset();
          m = m.add(s - C, "minute");
        }
        return m.$x.$timezone = y, m;
      }, j.offsetName = function(y) {
        var D = this.$x.$timezone || l.tz.guess(), m = p(this.valueOf(), D, { timeZoneName: y }).find(function(s) {
          return s.type.toLowerCase() === "timezonename";
        });
        return m && m.value;
      };
      var O = j.startOf;
      j.startOf = function(y, D) {
        if (!this.$x || !this.$x.$timezone) return O.call(this, y, D);
        var m = l(this.format("YYYY-MM-DD HH:mm:ss:SSS"), { locale: this.$L });
        return O.call(m, y, D).tz(this.$x.$timezone, !0);
      }, l.tz = function(y, D, m) {
        var s = m && D, M = m || D || g, S = T(+l(), M);
        if (typeof y != "string") return l(y).tz(M);
        var k = function(d, i, t) {
          var $ = d - 60 * i * 1e3, c = T($, t);
          if (i === c) return [$, i];
          var a = T($ -= 60 * (c - i) * 1e3, t);
          return c === a ? [$, c] : [d - 60 * Math.min(c, a) * 1e3, Math.max(c, a)];
        }(l.utc(y, s).valueOf(), S, M), Y = k[0], C = k[1], x = l(Y).utcOffset(C);
        return x.$x.$timezone = M, x;
      }, l.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, l.tz.setDefault = function(y) {
        g = y;
      };
    };
  });
})(st);
var ct = st.exports;
const ft = /* @__PURE__ */ B(ct);
var it = { exports: {} };
(function(_, A) {
  (function(H, v) {
    _.exports = v();
  })(V, function() {
    return function(H, v) {
      var N = v.prototype, W = N.format;
      N.format = function(l) {
        var g = this, p = this.$locale();
        if (!this.isValid()) return W.bind(this)(l);
        var T = this.$utils(), j = (l || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(O) {
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
        return W.bind(this)(j);
      };
    };
  });
})(it);
var ht = it.exports;
const dt = /* @__PURE__ */ B(ht);
var ut = { exports: {} };
(function(_, A) {
  (function(H, v) {
    _.exports = v();
  })(V, function() {
    var H, v, N = 1e3, W = 6e4, l = 36e5, g = 864e5, p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, T = 31536e6, j = 2628e6, O = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, y = { years: T, months: j, days: g, hours: l, minutes: W, seconds: N, milliseconds: 1, weeks: 6048e5 }, D = function(d) {
      return d instanceof C;
    }, m = function(d, i, t) {
      return new C(d, t, i.$l);
    }, s = function(d) {
      return v.p(d) + "s";
    }, M = function(d) {
      return d < 0;
    }, S = function(d) {
      return M(d) ? Math.ceil(d) : Math.floor(d);
    }, k = function(d) {
      return Math.abs(d);
    }, Y = function(d, i) {
      return d ? M(d) ? { negative: !0, format: "" + k(d) + i } : { negative: !1, format: "" + d + i } : { negative: !1, format: "" };
    }, C = function() {
      function d(t, $, c) {
        var a = this;
        if (this.$d = {}, this.$l = c, t === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), $) return m(t * y[s($)], this);
        if (typeof t == "number") return this.$ms = t, this.parseFromMilliseconds(), this;
        if (typeof t == "object") return Object.keys(t).forEach(function(u) {
          a.$d[s(u)] = t[u];
        }), this.calMilliseconds(), this;
        if (typeof t == "string") {
          var z = t.match(O);
          if (z) {
            var U = z.slice(2).map(function(u) {
              return u != null ? Number(u) : 0;
            });
            return this.$d.years = U[0], this.$d.months = U[1], this.$d.weeks = U[2], this.$d.days = U[3], this.$d.hours = U[4], this.$d.minutes = U[5], this.$d.seconds = U[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var i = d.prototype;
      return i.calMilliseconds = function() {
        var t = this;
        this.$ms = Object.keys(this.$d).reduce(function($, c) {
          return $ + (t.$d[c] || 0) * y[c];
        }, 0);
      }, i.parseFromMilliseconds = function() {
        var t = this.$ms;
        this.$d.years = S(t / T), t %= T, this.$d.months = S(t / j), t %= j, this.$d.days = S(t / g), t %= g, this.$d.hours = S(t / l), t %= l, this.$d.minutes = S(t / W), t %= W, this.$d.seconds = S(t / N), t %= N, this.$d.milliseconds = t;
      }, i.toISOString = function() {
        var t = Y(this.$d.years, "Y"), $ = Y(this.$d.months, "M"), c = +this.$d.days || 0;
        this.$d.weeks && (c += 7 * this.$d.weeks);
        var a = Y(c, "D"), z = Y(this.$d.hours, "H"), U = Y(this.$d.minutes, "M"), u = this.$d.seconds || 0;
        this.$d.milliseconds && (u += this.$d.milliseconds / 1e3, u = Math.round(1e3 * u) / 1e3);
        var r = Y(u, "S"), e = t.negative || $.negative || a.negative || z.negative || U.negative || r.negative, o = z.format || U.format || r.format ? "T" : "", n = (e ? "-" : "") + "P" + t.format + $.format + a.format + o + z.format + U.format + r.format;
        return n === "P" || n === "-P" ? "P0D" : n;
      }, i.toJSON = function() {
        return this.toISOString();
      }, i.format = function(t) {
        var $ = t || "YYYY-MM-DDTHH:mm:ss", c = { Y: this.$d.years, YY: v.s(this.$d.years, 2, "0"), YYYY: v.s(this.$d.years, 4, "0"), M: this.$d.months, MM: v.s(this.$d.months, 2, "0"), D: this.$d.days, DD: v.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: v.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: v.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: v.s(this.$d.seconds, 2, "0"), SSS: v.s(this.$d.milliseconds, 3, "0") };
        return $.replace(p, function(a, z) {
          return z || String(c[a]);
        });
      }, i.as = function(t) {
        return this.$ms / y[s(t)];
      }, i.get = function(t) {
        var $ = this.$ms, c = s(t);
        return c === "milliseconds" ? $ %= 1e3 : $ = c === "weeks" ? S($ / y[c]) : this.$d[c], $ || 0;
      }, i.add = function(t, $, c) {
        var a;
        return a = $ ? t * y[s($)] : D(t) ? t.$ms : m(t, this).$ms, m(this.$ms + a * (c ? -1 : 1), this);
      }, i.subtract = function(t, $) {
        return this.add(t, $, !0);
      }, i.locale = function(t) {
        var $ = this.clone();
        return $.$l = t, $;
      }, i.clone = function() {
        return m(this.$ms, this);
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
        return m(a, { $l: U }, z);
      }, t.isDuration = D;
      var $ = i.prototype.add, c = i.prototype.subtract;
      i.prototype.add = function(a, z) {
        return D(a) ? x(this, a, 1) : $.bind(this)(a, z);
      }, i.prototype.subtract = function(a, z) {
        return D(a) ? x(this, a, -1) : c.bind(this)(a, z);
      };
    };
  });
})(ut);
var lt = ut.exports;
const mt = /* @__PURE__ */ B(lt);
var $t = { exports: {} };
(function(_, A) {
  (function(H, v) {
    _.exports = v(et());
  })(V, function(H) {
    function v(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var N = v(H), W = { name: "ja", weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(l) {
      return l + "日";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日(ddd) HH:mm" }, meridiem: function(l) {
      return l < 12 ? "午前" : "午後";
    }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } };
    return N.default.locale(W, null, !0), W;
  });
})($t);
q.extend(at);
q.extend(ft);
q.extend(dt);
q.extend(mt);
function vt(_, A) {
  const H = Intl.DateTimeFormat(_).resolvedOptions();
  return q(A).tz(H.timeZone).locale(H.locale);
}
function gt(_) {
  return _.isUTC() ? "UTC" : "$x" in _ && typeof _.$x == "object" && _.$x != null && "$timezone" in _.$x && typeof _.$x.$timezone == "string" ? _.$x.$timezone : q.tz.guess();
}
const pt = nt.Dayjs;
export {
  pt as Dayjs,
  dt as advancedFormat,
  q as default,
  mt as duration,
  vt as fromLocale,
  gt as getTimezoneName,
  ft as timezone,
  at as utc
};
