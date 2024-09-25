import { inject as q, computed as C, defineComponent as T, mergeDefaults as E, ref as B, watch as J, openBlock as m, createElementBlock as S, renderSlot as u, createTextVNode as f, toDisplayString as y, unref as v, createCommentVNode as g, createElementVNode as h, normalizeStyle as V, Fragment as R, onMounted as x, onBeforeUnmount as W, resolveComponent as i, createBlock as _, withCtx as o, createVNode as s, mergeProps as G, normalizeProps as K, guardReactiveProps as Q, mergeModels as X, useModel as Z, withModifiers as N, nextTick as ee } from "vue";
import { getTimezoneName as te } from "../lib/dayjs.js";
import P from "dayjs";
import { u as ne, a as oe, b as ae } from "../chunks/usePage.YF9ZHX8m.js";
import { g as le, u as re, r as ie, V as z, a as se, t as ue } from "../chunks/theme.BqEKJIqM.js";
import '../assets/index.css';const de = Symbol.for("vuetify:display");
function ce() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : le();
  const l = q(de);
  if (!l) throw new Error("Could not find Vuetify display injection");
  const e = C(() => {
    if (t.mobile != null) return t.mobile;
    if (!t.mobileBreakpoint) return l.mobile.value;
    const d = typeof t.mobileBreakpoint == "number" ? t.mobileBreakpoint : l.thresholds.value[t.mobileBreakpoint];
    return l.width.value < d;
  }), n = C(() => a ? {
    [`${a}--mobile`]: e.value
  } : {});
  return {
    ...l,
    displayClasses: n,
    mobile: e
  };
}
const me = { class: "animated-clock" }, pe = {
  key: 0,
  class: "date"
}, ve = {
  key: 0,
  class: "timezone"
}, fe = {
  key: 1,
  class: "time"
}, Ce = /* @__PURE__ */ T({
  __name: "AnimatedClock",
  props: E({
    time: null,
    updateInterval: null,
    stop: { type: Boolean },
    stopAnimation: { type: Boolean },
    hideDate: { type: Boolean },
    hideTime: { type: Boolean },
    hideTimezone: { type: Boolean },
    hideSeconds: { type: Boolean }
  }, { time: P(), updateInterval: 200 }),
  setup(t) {
    const a = B(t.time), l = C(
      () => t.stopAnimation ? "" : `visibility:${a.value.millisecond() < 666 ? "visible" : "hidden"}`
    );
    return J(
      () => t.time,
      () => {
        a.value = t.time;
      }
    ), ne(
      () => a.value = P(),
      () => t.stop,
      () => t.updateInterval
    ), (e, n) => (m(), S("div", me, [
      e.hideDate ? g("", !0) : (m(), S("div", pe, [
        e.hideTimezone ? g("", !0) : (m(), S("div", ve, [
          u(e.$slots, "timezone", {}, () => [
            f(y(v(te)(a.value)), 1)
          ])
        ])),
        h("div", null, [
          u(e.$slots, "date", {}, () => [
            f(y(a.value.format("YYYY-MM-DD")), 1)
          ])
        ])
      ])),
      e.hideTime ? g("", !0) : (m(), S("span", fe, [
        u(e.$slots, "time", {
          style: V(l.value)
        }, () => [
          h("span", null, y(a.value.format("HH")), 1),
          h("span", {
            style: V(l.value)
          }, ":", 4),
          h("span", null, y(a.value.format("mm")), 1),
          e.hideSeconds ? g("", !0) : (m(), S(R, { key: 0 }, [
            h("span", {
              style: V(l.value)
            }, ":", 4),
            h("span", null, y(a.value.format("ss")), 1)
          ], 64))
        ])
      ]))
    ]));
  }
}), be = /* @__PURE__ */ T({
  __name: "ThemeToggleButton",
  setup(t) {
    const a = re();
    function l(n) {
      const d = localStorage.getItem(z);
      d === null ? se(a, n.matches ? "dark" : "light") : (d === "dark" && n.matches || d === "light" && !n.matches) && localStorage.removeItem(z);
    }
    function e() {
      ue(a);
    }
    return x(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", l), ie(a);
    }), W(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", l);
    }), (n, d) => {
      const c = i("v-btn"), r = i("v-tooltip");
      return m(), _(r, {
        text: "テーマを切り替え",
        "aria-label": "テーマを切り替え"
      }, {
        activator: o(({ props: b }) => [
          s(c, G({ "data-test": "button" }, b, {
            icon: v(a).global.current.value.dark ? "mdi-weather-night" : "mdi-white-balance-sunny",
            onClick: e,
            "aria-label": "テーマを切り替え"
          }), null, 16, ["icon"])
        ]),
        _: 1
      });
    };
  }
}), Me = /* @__PURE__ */ T({
  __name: "AppBase",
  props: {
    toolbarTitle: null
  },
  setup(t, { expose: a }) {
    const l = B();
    return a({
      showErrorSnackbar: function() {
        l.value = !0;
      },
      closeErrorSnackbar: function() {
        l.value = !1;
      }
    }), (e, n) => {
      const d = i("v-btn"), c = i("v-snackbar"), r = i("v-toolbar-title"), b = i("v-app-bar"), k = i("v-container"), w = i("v-main"), M = i("v-app");
      return m(), _(M, null, {
        default: o(() => [
          u(e.$slots, "mainPrepend"),
          s(c, {
            modelValue: l.value,
            "onUpdate:modelValue": n[1] || (n[1] = ($) => l.value = $),
            timeout: "10000"
          }, {
            actions: o(() => [
              s(d, {
                color: "red-lighten-2",
                variant: "text",
                onClick: n[0] || (n[0] = ($) => l.value = !1)
              }, {
                default: o(() => n[3] || (n[3] = [
                  f("閉じる")
                ])),
                _: 1
              })
            ]),
            default: o(() => [
              u(e.$slots, "errorSnackbar", {}, () => [
                n[2] || (n[2] = f("データの読み込みができませんでした。しばらくしてから再読み込みしてください。"))
              ])
            ]),
            _: 3
          }, 8, ["modelValue"]),
          s(w, null, {
            default: o(() => [
              s(b, K(Q(e.$attrs)), {
                append: o(() => [
                  u(e.$slots, "toolbarPrepend"),
                  s(be),
                  u(e.$slots, "toolbarAppend")
                ]),
                default: o(() => [
                  u(e.$slots, "appbarPrepend"),
                  s(r, null, {
                    default: o(() => [
                      f(y(t.toolbarTitle), 1)
                    ]),
                    _: 1
                  }),
                  u(e.$slots, "appbarAppend")
                ]),
                _: 3
              }, 16),
              u(e.$slots, "header"),
              s(k, null, {
                default: o(() => [
                  u(e.$slots, "default")
                ]),
                _: 3
              }),
              u(e.$slots, "footer")
            ]),
            _: 3
          }),
          u(e.$slots, "mainAppend")
        ]),
        _: 3
      });
    };
  }
}), F = (t, a) => {
  const l = t.__vccOpts || t;
  for (const [e, n] of a)
    l[e] = n;
  return l;
}, he = {};
function _e(t, a) {
  const l = i("v-icon");
  return m(), _(l, { class: "shaking-icon" });
}
const ge = /* @__PURE__ */ F(he, [["render", _e]]), ke = /* @__PURE__ */ T({
  __name: "AppBaseV2",
  props: /* @__PURE__ */ X({
    pageId: null,
    pageSections: null,
    title: null,
    icon: null
  }, {
    errorSnackbarShown: { type: Boolean },
    errorSnackbarShownModifiers: {}
  }),
  emits: ["update:errorSnackbarShown"],
  setup(t) {
    const a = Z(t, "errorSnackbarShown"), { smAndDown: l, mdAndDown: e } = ce(), { page: n } = oe(t.pageId, t.pageSections), d = B();
    return (c, r) => {
      const b = i("v-list"), k = i("v-navigation-drawer"), w = i("v-col"), M = i("v-row"), $ = i("v-icon"), A = i("v-btn"), j = i("v-snackbar"), O = i("v-app-bar-nav-icon"), U = i("v-toolbar-title"), D = i("v-app-bar"), Y = i("v-container"), L = i("v-main"), H = i("v-app");
      return m(), _(H, null, {
        default: o(() => [
          c.$slots.drawerMenu ? (m(), _(k, {
            key: 0,
            modelValue: d.value,
            "onUpdate:modelValue": r[0] || (r[0] = (p) => d.value = p),
            floating: "",
            "aria-label": "ナビゲーション",
            width: 270,
            color: "v2DrawerBackground"
          }, {
            default: o(() => [
              s(b, {
                class: "px-0 pb-0 d-flex flex-column fill-height",
                role: "menu"
              }, {
                default: o(() => [
                  u(c.$slots, "drawerMenu", { currentPage: v(n) }, void 0, !0)
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 8, ["modelValue"])) : g("", !0),
          s(j, {
            class: "error-snackbar",
            modelValue: a.value,
            "onUpdate:modelValue": r[2] || (r[2] = (p) => a.value = p),
            timeout: "10000",
            color: "v2SnackbarBackground"
          }, {
            actions: o(() => [
              s(A, {
                color: "red-lighten-2",
                variant: "plain",
                onClick: r[1] || (r[1] = (p) => a.value = !1)
              }, {
                default: o(() => [
                  s($, null, {
                    default: o(() => r[6] || (r[6] = [
                      f("mdi-close")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            default: o(() => [
              u(c.$slots, "errorSnackbar", {}, () => [
                s(M, null, {
                  default: o(() => [
                    s(w, { cols: "1" }, {
                      default: o(() => [
                        s(ge, {
                          icon: "mdi-alert",
                          size: "medium",
                          color: "warning"
                        })
                      ]),
                      _: 1
                    }),
                    s(w, null, {
                      default: o(() => r[5] || (r[5] = [
                        f("データを取得できませんでした。"),
                        h("br", null, null, -1),
                        f("しばらくしてから再読み込みしてください。")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], !0)
            ]),
            _: 3
          }, 8, ["modelValue"]),
          s(L, null, {
            default: o(() => [
              s(D, {
                class: "app-bar",
                flat: "",
                floating: "",
                color: "v2AppBarBackground",
                density: v(l) ? "compact" : "comfortable",
                "scroll-behavior": v(e) ? "hide" : void 0,
                "scroll-threshold": 48
              }, {
                append: o(() => [
                  u(c.$slots, "appbarAppend", {}, void 0, !0)
                ]),
                default: o(() => [
                  u(c.$slots, "appbarPrepend", {}, () => {
                    var p, I;
                    return [
                      !d.value && (t.icon ?? ((p = v(n)) == null ? void 0 : p.icon)) ? (m(), _(O, {
                        key: 0,
                        transition: "slide-x-transition",
                        class: "mr-n3",
                        variant: "plain",
                        icon: t.icon ?? ((I = v(n)) == null ? void 0 : I.icon),
                        ripple: !1,
                        onClick: r[3] || (r[3] = N((ye) => d.value = !d.value, ["stop"])),
                        "aria-label": "ナビゲーションを表示"
                      }, null, 8, ["icon"])) : g("", !0)
                    ];
                  }, !0),
                  d.value ? g("", !0) : (m(), _(U, {
                    key: 0,
                    transition: "slide-x-transition",
                    class: "ml-5"
                  }, {
                    default: o(() => {
                      var p;
                      return [
                        f(y(t.title ?? ((p = v(n)) == null ? void 0 : p.title)), 1)
                      ];
                    }),
                    _: 1
                  }))
                ]),
                _: 3
              }, 8, ["density", "scroll-behavior"]),
              v(e) ? (m(), _(D, {
                key: 0,
                transition: "slide-y-transition",
                class: "app-bar-sub",
                flat: "",
                floating: "",
                color: "v2AppBarBackground",
                density: "compact",
                height: "48"
              }, {
                default: o(() => [
                  s(A, {
                    variant: "plain",
                    density: "compact",
                    onClick: r[4] || (r[4] = N((p) => d.value = !d.value, ["stop"])),
                    "aria-label": "ナビゲーションを表示",
                    ripple: !1
                  }, {
                    default: o(() => [
                      s($, { size: "small" }, {
                        default: o(() => r[7] || (r[7] = [
                          f("mdi-menu")
                        ])),
                        _: 1
                      }),
                      r[8] || (r[8] = h("div", { class: "ml-3 text-subtitle-2 opacity-90" }, "Menu", -1))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : g("", !0),
              u(c.$slots, "header", {}, void 0, !0),
              s(Y, { class: "pb-16 mb-16" }, {
                default: o(() => [
                  u(c.$slots, "default", {}, void 0, !0)
                ]),
                _: 3
              }),
              u(c.$slots, "footer", {}, void 0, !0)
            ]),
            _: 3
          }),
          u(c.$slots, "mainAppend", {}, void 0, !0)
        ]),
        _: 3
      });
    };
  }
}), Ve = /* @__PURE__ */ F(ke, [["__scopeId", "data-v-43a54272"]]), Ae = /* @__PURE__ */ T({
  __name: "MathJax",
  props: E({
    tag: null,
    node: { type: Boolean },
    block: { type: Boolean },
    overlook: { type: Boolean }
  }, { tag: "span" }),
  setup(t, { expose: a }) {
    const l = t.tag;
    "MathJax" in window || console.warn("window.MathJax does not exist. For typesetting, MathJax import is required.");
    const e = B(), n = B(), d = C(() => t.block ? "div" : "span");
    async function c() {
      n.value && (await ee(), r(), await window.MathJax.typesetPromise([n.value]));
    }
    function r() {
      if (!(!e.value || !n.value))
        if (e.value.children.length === 0 && !t.node)
          t.block ? n.value.innerText = `$$ ${e.value.innerText} $$` : n.value.innerText = `\\( ${e.value.innerText} \\)`;
        else {
          for (; n.value.lastElementChild; )
            n.value.removeChild(n.value.lastElementChild);
          for (const k of e.value.childNodes)
            n.value.appendChild(k.cloneNode(!0));
        }
    }
    async function b() {
      t.overlook ? n.value && (window.MathJax.typesetClear([n.value]), r()) : await c();
    }
    return J(() => [t.node, t.block, t.overlook], b), x(b), ae(e, b, { childList: !0, subtree: !0, characterData: !0 }), a({ typeset: c }), (k, w) => (m(), _(v(l), null, {
      default: o(() => [
        h("span", {
          ref_key: "raw",
          ref: e,
          class: "mathjax-raw"
        }, [
          u(k.$slots, "default")
        ], 512),
        s(v(d), {
          ref_key: "formula",
          ref: n
        }, null, 512)
      ]),
      _: 3
    }));
  }
});
export {
  Ce as AnimatedClock,
  Me as AppBase,
  Ve as AppBaseV2,
  Ae as MathJax,
  ge as ShakingIcon,
  be as ThemeToggleButton
};
