import { inject as W, computed as T, defineComponent as B, mergeDefaults as E, ref as M, watch as J, openBlock as m, createElementBlock as $, renderSlot as u, createTextVNode as f, toDisplayString as y, unref as v, createCommentVNode as g, createElementVNode as h, normalizeStyle as V, Fragment as G, onMounted as x, onBeforeUnmount as K, resolveComponent as i, createBlock as k, withCtx as o, createVNode as s, mergeProps as Q, mergeModels as F, useModel as j, normalizeProps as X, guardReactiveProps as Z, withModifiers as N, nextTick as ee } from "vue";
import { getTimezoneName as te } from "../lib/dayjs.js";
import P from "dayjs";
import { u as ne, a as oe, b as ae } from "../chunks/usePage.CqiVlbjN.js";
import { g as le, u as re, r as ie, V as z, a as se, t as ue } from "../chunks/theme.Vy_fBxwW.js";
import '../assets/index.css';const de = Symbol.for("vuetify:display");
function ce() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : le();
  const l = W(de);
  if (!l) throw new Error("Could not find Vuetify display injection");
  const t = T(() => {
    if (e.mobile != null) return e.mobile;
    if (!e.mobileBreakpoint) return l.mobile.value;
    const d = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : l.thresholds.value[e.mobileBreakpoint];
    return l.width.value < d;
  }), n = T(() => a ? {
    [`${a}--mobile`]: t.value
  } : {});
  return {
    ...l,
    displayClasses: n,
    mobile: t
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
}, Me = /* @__PURE__ */ B({
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
  }, { time: () => P(), updateInterval: 200 }),
  setup(e) {
    const a = M(e.time), l = T(
      () => e.stopAnimation ? "" : `visibility:${a.value.millisecond() < 666 ? "visible" : "hidden"}`
    );
    return J(
      () => e.time,
      () => {
        a.value = e.time;
      }
    ), ne(
      () => {
        a.value = P();
      },
      () => e.stop,
      () => e.updateInterval
    ), (t, n) => (m(), $("div", me, [
      t.hideDate ? g("", !0) : (m(), $("div", pe, [
        t.hideTimezone ? g("", !0) : (m(), $("div", ve, [
          u(t.$slots, "timezone", {}, () => [
            f(y(v(te)(a.value)), 1)
          ])
        ])),
        h("div", null, [
          u(t.$slots, "date", {}, () => [
            f(y(a.value.format("YYYY-MM-DD")), 1)
          ])
        ])
      ])),
      t.hideTime ? g("", !0) : (m(), $("span", fe, [
        u(t.$slots, "time", {
          style: V(l.value)
        }, () => [
          h("span", null, y(a.value.format("HH")), 1),
          h("span", {
            style: V(l.value)
          }, ":", 4),
          h("span", null, y(a.value.format("mm")), 1),
          t.hideSeconds ? g("", !0) : (m(), $(G, { key: 0 }, [
            h("span", {
              style: V(l.value)
            }, ":", 4),
            h("span", null, y(a.value.format("ss")), 1)
          ], 64))
        ])
      ]))
    ]));
  }
}), be = /* @__PURE__ */ B({
  __name: "ThemeToggleButton",
  setup(e) {
    const a = re();
    function l(n) {
      const d = localStorage.getItem(z);
      d === null ? se(a, n.matches ? "dark" : "light") : (d === "dark" && n.matches || d === "light" && !n.matches) && localStorage.removeItem(z);
    }
    function t() {
      ue(a);
    }
    return x(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", l), ie(a);
    }), K(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", l);
    }), (n, d) => {
      const c = i("v-btn"), r = i("v-tooltip");
      return m(), k(r, {
        text: "テーマを切り替え",
        "aria-label": "テーマを切り替え"
      }, {
        activator: o(({ props: b }) => [
          s(c, Q({ "data-test": "button" }, b, {
            icon: v(a).global.current.value.dark ? "mdi-weather-night" : "mdi-white-balance-sunny",
            onClick: t,
            "aria-label": "テーマを切り替え"
          }), null, 16, ["icon"])
        ]),
        _: 1
      });
    };
  }
}), Ce = /* @__PURE__ */ B({
  __name: "AppBase",
  props: /* @__PURE__ */ F({
    toolbarTitle: null
  }, {
    errorSnackbarShown: { type: Boolean },
    errorSnackbarShownModifiers: {}
  }),
  emits: ["update:errorSnackbarShown"],
  setup(e, { expose: a }) {
    const l = j(e, "errorSnackbarShown");
    return a({
      /**
       * @deprecated Model `errorSnackbarShown` should be used instead of this function.
       */
      showErrorSnackbar: () => {
        l.value = !0;
      },
      /**
       * @deprecated Model `errorSnackbarShown` should be used instead of this function.
       */
      closeErrorSnackbar: () => {
        l.value = !1;
      }
    }), (t, n) => {
      const d = i("v-btn"), c = i("v-snackbar"), r = i("v-toolbar-title"), b = i("v-app-bar"), _ = i("v-container"), w = i("v-main"), C = i("v-app");
      return m(), k(C, null, {
        default: o(() => [
          u(t.$slots, "mainPrepend"),
          s(c, {
            modelValue: l.value,
            "onUpdate:modelValue": n[1] || (n[1] = (S) => l.value = S),
            timeout: "10000"
          }, {
            actions: o(() => [
              s(d, {
                color: "red-lighten-2",
                variant: "text",
                onClick: n[0] || (n[0] = (S) => l.value = !1)
              }, {
                default: o(() => n[3] || (n[3] = [
                  f("閉じる")
                ])),
                _: 1
              })
            ]),
            default: o(() => [
              u(t.$slots, "errorSnackbar", {}, () => [
                n[2] || (n[2] = f("データの読み込みができませんでした。しばらくしてから再読み込みしてください。"))
              ])
            ]),
            _: 3
          }, 8, ["modelValue"]),
          s(w, null, {
            default: o(() => [
              s(b, X(Z(t.$attrs)), {
                append: o(() => [
                  u(t.$slots, "toolbarPrepend"),
                  s(be),
                  u(t.$slots, "toolbarAppend")
                ]),
                default: o(() => [
                  u(t.$slots, "appbarPrepend"),
                  s(r, null, {
                    default: o(() => [
                      f(y(e.toolbarTitle), 1)
                    ]),
                    _: 1
                  }),
                  u(t.$slots, "appbarAppend")
                ]),
                _: 3
              }, 16),
              u(t.$slots, "header"),
              s(_, null, {
                default: o(() => [
                  u(t.$slots, "default")
                ]),
                _: 3
              }),
              u(t.$slots, "footer")
            ]),
            _: 3
          }),
          u(t.$slots, "mainAppend")
        ]),
        _: 3
      });
    };
  }
}), O = (e, a) => {
  const l = e.__vccOpts || e;
  for (const [t, n] of a)
    l[t] = n;
  return l;
}, he = {};
function ke(e, a) {
  const l = i("v-icon");
  return m(), k(l, { class: "shaking-icon" });
}
const ge = /* @__PURE__ */ O(he, [["render", ke]]), _e = /* @__PURE__ */ B({
  __name: "AppBaseV2",
  props: /* @__PURE__ */ F({
    pageId: null,
    pageSections: null,
    title: null,
    icon: null
  }, {
    errorSnackbarShown: { type: Boolean },
    errorSnackbarShownModifiers: {}
  }),
  emits: ["update:errorSnackbarShown"],
  setup(e) {
    const a = j(e, "errorSnackbarShown"), { smAndDown: l, mdAndDown: t } = ce(), { page: n } = oe(e.pageId, e.pageSections), d = M();
    return (c, r) => {
      const b = i("v-list"), _ = i("v-navigation-drawer"), w = i("v-col"), C = i("v-row"), S = i("v-icon"), A = i("v-btn"), U = i("v-snackbar"), Y = i("v-app-bar-nav-icon"), L = i("v-toolbar-title"), D = i("v-app-bar"), H = i("v-container"), q = i("v-main"), R = i("v-app");
      return m(), k(R, null, {
        default: o(() => [
          c.$slots.drawerMenu ? (m(), k(_, {
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
          s(U, {
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
                  s(S, null, {
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
                s(C, null, {
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
          s(q, null, {
            default: o(() => [
              s(D, {
                class: "app-bar",
                flat: "",
                floating: "",
                color: "v2AppBarBackground",
                density: v(l) ? "compact" : "comfortable",
                "scroll-behavior": v(t) ? "hide" : void 0,
                "scroll-threshold": 48
              }, {
                append: o(() => [
                  u(c.$slots, "appbarAppend", {}, void 0, !0)
                ]),
                default: o(() => [
                  u(c.$slots, "appbarPrepend", {}, () => {
                    var p, I;
                    return [
                      !d.value && (e.icon ?? ((p = v(n)) == null ? void 0 : p.icon)) ? (m(), k(Y, {
                        key: 0,
                        transition: "slide-x-transition",
                        class: "mr-n3",
                        variant: "plain",
                        icon: e.icon ?? ((I = v(n)) == null ? void 0 : I.icon),
                        ripple: !1,
                        onClick: r[3] || (r[3] = N((ye) => d.value = !d.value, ["stop"])),
                        "aria-label": "ナビゲーションを表示"
                      }, null, 8, ["icon"])) : g("", !0)
                    ];
                  }, !0),
                  d.value ? g("", !0) : (m(), k(L, {
                    key: 0,
                    transition: "slide-x-transition",
                    class: "ml-5"
                  }, {
                    default: o(() => {
                      var p;
                      return [
                        f(y(e.title ?? ((p = v(n)) == null ? void 0 : p.title)), 1)
                      ];
                    }),
                    _: 1
                  }))
                ]),
                _: 3
              }, 8, ["density", "scroll-behavior"]),
              v(t) && c.$slots.drawerMenu ? (m(), k(D, {
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
                      s(S, { size: "small" }, {
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
              s(H, { class: "pb-16 mb-16" }, {
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
}), Ve = /* @__PURE__ */ O(_e, [["__scopeId", "data-v-60503008"]]), Ae = /* @__PURE__ */ B({
  __name: "MathJax",
  props: E({
    tag: null,
    node: { type: Boolean },
    block: { type: Boolean },
    overlook: { type: Boolean }
  }, { tag: "span" }),
  setup(e, { expose: a }) {
    const l = e.tag;
    "MathJax" in window || console.warn("window.MathJax does not exist. For typesetting, MathJax import is required.");
    const t = M(), n = M(), d = T(() => e.block ? "div" : "span");
    async function c() {
      n.value && (await ee(), r(), await window.MathJax.typesetPromise([n.value]));
    }
    function r() {
      if (!(!t.value || !n.value))
        if (t.value.children.length === 0 && !e.node)
          e.block ? n.value.innerText = `$$ ${t.value.innerText} $$` : n.value.innerText = `\\( ${t.value.innerText} \\)`;
        else {
          for (; n.value.lastElementChild; )
            n.value.removeChild(n.value.lastElementChild);
          for (const _ of t.value.childNodes)
            n.value.appendChild(_.cloneNode(!0));
        }
    }
    async function b() {
      e.overlook ? n.value && (window.MathJax.typesetClear([n.value]), r()) : await c();
    }
    return J(() => [e.node, e.block, e.overlook], b), x(b), ae(t, b, { childList: !0, subtree: !0, characterData: !0 }), a({ typeset: c }), (_, w) => (m(), k(v(l), null, {
      default: o(() => [
        h("span", {
          ref_key: "raw",
          ref: t,
          class: "mathjax-raw"
        }, [
          u(_.$slots, "default")
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
  Me as AnimatedClock,
  Ce as AppBase,
  Ve as AppBaseV2,
  Ae as MathJax,
  ge as ShakingIcon,
  be as ThemeToggleButton
};
