import { defineComponent as B, ref as T, computed as N, watch as z, openBlock as m, createElementBlock as S, renderSlot as i, createTextVNode as v, toDisplayString as g, unref as p, createCommentVNode as _, createElementVNode as b, normalizeStyle as C, Fragment as R, mergeDefaults as E, onMounted as J, onBeforeUnmount as W, resolveComponent as r, createBlock as h, withCtx as n, createVNode as s, mergeProps as G, useModel as x, normalizeProps as K, guardReactiveProps as Q, mergeModels as F, withModifiers as D, nextTick as X } from "vue";
import { getTimezoneName as Z } from "../lib/dayjs.js";
import P from "dayjs";
import { u as ee, a as oe, b as te } from "../chunks/usePage.CKcnc269.js";
import { useDisplay as ne } from "vuetify";
import { useTheme as ae, reapplyTheme as le, VuetifyColorSchemeName as I, applyColorScheme as re, toggleTheme as se } from "../lib/theme.js";
import '../assets/index.css';const ie = { class: "animated-clock" }, ue = {
  key: 0,
  class: "date"
}, de = {
  key: 0,
  class: "timezone"
}, ce = {
  key: 1,
  class: "time"
}, $e = /* @__PURE__ */ B({
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
  setup(t) {
    const l = T(t.time), u = N(
      () => t.stopAnimation ? "" : `visibility:${l.value.millisecond() < 666 ? "visible" : "hidden"}`
    );
    return z(
      () => t.time,
      () => {
        l.value = t.time;
      }
    ), ee(
      () => {
        l.value = P();
      },
      () => t.stop,
      () => t.updateInterval
    ), (e, o) => (m(), S("div", ie, [
      e.hideDate ? _("", !0) : (m(), S("div", ue, [
        e.hideTimezone ? _("", !0) : (m(), S("div", de, [
          i(e.$slots, "timezone", {}, () => [
            v(g(p(Z)(l.value)), 1)
          ])
        ])),
        b("div", null, [
          i(e.$slots, "date", {}, () => [
            v(g(l.value.format("YYYY-MM-DD")), 1)
          ])
        ])
      ])),
      e.hideTime ? _("", !0) : (m(), S("span", ce, [
        i(e.$slots, "time", {
          style: C(u.value)
        }, () => [
          b("span", null, g(l.value.format("HH")), 1),
          b("span", {
            style: C(u.value)
          }, ":", 4),
          b("span", null, g(l.value.format("mm")), 1),
          e.hideSeconds ? _("", !0) : (m(), S(R, { key: 0 }, [
            b("span", {
              style: C(u.value)
            }, ":", 4),
            b("span", null, g(l.value.format("ss")), 1)
          ], 64))
        ])
      ]))
    ]));
  }
}), me = /* @__PURE__ */ B({
  __name: "ThemeToggleButton",
  setup(t) {
    const l = ae();
    function u(o) {
      const d = localStorage.getItem(I);
      d === null ? re(l, o.matches ? "dark" : "light") : (d === "dark" && o.matches || d === "light" && !o.matches) && localStorage.removeItem(I);
    }
    function e() {
      se(l);
    }
    return J(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", u), le(l);
    }), W(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", u);
    }), (o, d) => {
      const c = r("v-btn"), a = r("v-tooltip");
      return m(), h(a, {
        text: "テーマを切り替え",
        "aria-label": "テーマを切り替え"
      }, {
        activator: n(({ props: f }) => [
          s(c, G({ "data-test": "button" }, f, {
            icon: p(l).global.current.value.dark ? "mdi-weather-night" : "mdi-white-balance-sunny",
            onClick: e,
            "aria-label": "テーマを切り替え"
          }), null, 16, ["icon"])
        ]),
        _: 1
      });
    };
  }
}), Se = /* @__PURE__ */ B({
  __name: "AppBase",
  props: /* @__PURE__ */ F({
    toolbarTitle: null
  }, {
    errorSnackbarShown: { type: Boolean },
    errorSnackbarShownModifiers: {}
  }),
  emits: ["update:errorSnackbarShown"],
  setup(t, { expose: l }) {
    const u = x(t, "errorSnackbarShown");
    return l({
      /**
       * @deprecated Model `errorSnackbarShown` should be used instead of this function.
       */
      showErrorSnackbar: () => {
        u.value = !0;
      },
      /**
       * @deprecated Model `errorSnackbarShown` should be used instead of this function.
       */
      closeErrorSnackbar: () => {
        u.value = !1;
      }
    }), (e, o) => {
      const d = r("v-btn"), c = r("v-snackbar"), a = r("v-toolbar-title"), f = r("v-app-bar"), k = r("v-container"), y = r("v-main"), M = r("v-app");
      return m(), h(M, null, {
        default: n(() => [
          i(e.$slots, "mainPrepend"),
          s(c, {
            modelValue: u.value,
            "onUpdate:modelValue": o[1] || (o[1] = ($) => u.value = $),
            timeout: "10000"
          }, {
            actions: n(() => [
              s(d, {
                color: "red-lighten-2",
                variant: "text",
                onClick: o[0] || (o[0] = ($) => u.value = !1)
              }, {
                default: n(() => [...o[3] || (o[3] = [
                  v("閉じる", -1)
                ])]),
                _: 1
              })
            ]),
            default: n(() => [
              i(e.$slots, "errorSnackbar", {}, () => [
                o[2] || (o[2] = v("データの読み込みができませんでした。しばらくしてから再読み込みしてください。", -1))
              ])
            ]),
            _: 3
          }, 8, ["modelValue"]),
          s(y, null, {
            default: n(() => [
              s(f, K(Q(e.$attrs)), {
                append: n(() => [
                  i(e.$slots, "toolbarPrepend"),
                  s(me),
                  i(e.$slots, "toolbarAppend")
                ]),
                default: n(() => [
                  i(e.$slots, "appbarPrepend"),
                  s(a, null, {
                    default: n(() => [
                      v(g(t.toolbarTitle), 1)
                    ]),
                    _: 1
                  }),
                  i(e.$slots, "appbarAppend")
                ]),
                _: 3
              }, 16),
              i(e.$slots, "header"),
              s(k, null, {
                default: n(() => [
                  i(e.$slots, "default")
                ]),
                _: 3
              }),
              i(e.$slots, "footer")
            ]),
            _: 3
          }),
          i(e.$slots, "mainAppend")
        ]),
        _: 3
      });
    };
  }
}), O = (t, l) => {
  const u = t.__vccOpts || t;
  for (const [e, o] of l)
    u[e] = o;
  return u;
}, pe = {};
function ve(t, l) {
  const u = r("v-icon");
  return m(), h(u, { class: "shaking-icon" });
}
const fe = /* @__PURE__ */ O(pe, [["render", ve]]), be = /* @__PURE__ */ B({
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
  setup(t) {
    const l = x(t, "errorSnackbarShown"), { smAndDown: u, mdAndDown: e } = ne(), { page: o } = oe(t.pageId, t.pageSections), d = T();
    return (c, a) => {
      const f = r("v-list"), k = r("v-navigation-drawer"), y = r("v-col"), M = r("v-row"), $ = r("v-icon"), A = r("v-btn"), U = r("v-snackbar"), Y = r("v-app-bar-nav-icon"), L = r("v-toolbar-title"), V = r("v-app-bar"), j = r("v-container"), H = r("v-main"), q = r("v-app");
      return m(), h(q, null, {
        default: n(() => [
          c.$slots.drawerMenu ? (m(), h(k, {
            key: 0,
            modelValue: d.value,
            "onUpdate:modelValue": a[0] || (a[0] = (w) => d.value = w),
            floating: "",
            "aria-label": "ナビゲーション",
            width: 270,
            color: "v2DrawerBackground"
          }, {
            default: n(() => [
              s(f, {
                class: "px-0 pb-0 d-flex flex-column fill-height",
                role: "menu"
              }, {
                default: n(() => [
                  i(c.$slots, "drawerMenu", { currentPage: p(o) }, void 0, !0)
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 8, ["modelValue"])) : _("", !0),
          s(U, {
            class: "error-snackbar",
            modelValue: l.value,
            "onUpdate:modelValue": a[2] || (a[2] = (w) => l.value = w),
            timeout: "10000",
            color: "v2SnackbarBackground"
          }, {
            actions: n(() => [
              s(A, {
                color: "red-lighten-2",
                variant: "plain",
                onClick: a[1] || (a[1] = (w) => l.value = !1)
              }, {
                default: n(() => [
                  s($, null, {
                    default: n(() => [...a[6] || (a[6] = [
                      v("mdi-close", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            default: n(() => [
              i(c.$slots, "errorSnackbar", {}, () => [
                s(M, null, {
                  default: n(() => [
                    s(y, { cols: "1" }, {
                      default: n(() => [
                        s(fe, {
                          icon: "mdi-alert",
                          size: "medium",
                          color: "warning"
                        })
                      ]),
                      _: 1
                    }),
                    s(y, null, {
                      default: n(() => [...a[5] || (a[5] = [
                        v("データを取得できませんでした。", -1),
                        b("br", null, null, -1),
                        v("しばらくしてから再読み込みしてください。", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ], !0)
            ]),
            _: 3
          }, 8, ["modelValue"]),
          s(H, null, {
            default: n(() => [
              s(V, {
                class: "app-bar",
                flat: "",
                floating: "",
                color: "v2AppBarBackground",
                density: p(u) ? "compact" : "comfortable",
                "scroll-behavior": p(e) ? "hide" : void 0,
                "scroll-threshold": 48
              }, {
                append: n(() => [
                  i(c.$slots, "appbarAppend", {}, void 0, !0)
                ]),
                default: n(() => [
                  i(c.$slots, "appbarPrepend", {}, () => [
                    !d.value && (t.icon ?? p(o)?.icon) ? (m(), h(Y, {
                      key: 0,
                      transition: "slide-x-transition",
                      class: "mr-n3",
                      variant: "plain",
                      icon: t.icon ?? p(o)?.icon,
                      ripple: !1,
                      onClick: a[3] || (a[3] = D((w) => d.value = !d.value, ["stop"])),
                      "aria-label": "ナビゲーションを表示"
                    }, null, 8, ["icon"])) : _("", !0)
                  ], !0),
                  d.value ? _("", !0) : (m(), h(L, {
                    key: 0,
                    transition: "slide-x-transition",
                    class: "ml-5"
                  }, {
                    default: n(() => [
                      v(g(t.title ?? p(o)?.title), 1)
                    ]),
                    _: 1
                  }))
                ]),
                _: 3
              }, 8, ["density", "scroll-behavior"]),
              p(e) && c.$slots.drawerMenu ? (m(), h(V, {
                key: 0,
                transition: "slide-y-transition",
                class: "app-bar-sub",
                flat: "",
                floating: "",
                color: "v2AppBarBackground",
                density: "compact",
                height: "48"
              }, {
                default: n(() => [
                  s(A, {
                    variant: "plain",
                    density: "compact",
                    onClick: a[4] || (a[4] = D((w) => d.value = !d.value, ["stop"])),
                    "aria-label": "ナビゲーションを表示",
                    ripple: !1
                  }, {
                    default: n(() => [
                      s($, { size: "small" }, {
                        default: n(() => [...a[7] || (a[7] = [
                          v("mdi-menu", -1)
                        ])]),
                        _: 1
                      }),
                      a[8] || (a[8] = b("div", { class: "ml-3 text-subtitle-2 opacity-90" }, "Menu", -1))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : _("", !0),
              i(c.$slots, "header", {}, void 0, !0),
              s(j, { class: "pb-16 mb-16" }, {
                default: n(() => [
                  i(c.$slots, "default", {}, void 0, !0)
                ]),
                _: 3
              }),
              i(c.$slots, "footer", {}, void 0, !0)
            ]),
            _: 3
          }),
          i(c.$slots, "mainAppend", {}, void 0, !0)
        ]),
        _: 3
      });
    };
  }
}), Be = /* @__PURE__ */ O(be, [["__scopeId", "data-v-850db3e3"]]), Te = /* @__PURE__ */ B({
  __name: "MathJax",
  props: E({
    tag: null,
    node: { type: Boolean },
    block: { type: Boolean },
    overlook: { type: Boolean }
  }, { tag: "span" }),
  setup(t, { expose: l }) {
    const u = t.tag;
    "MathJax" in window || console.warn("window.MathJax does not exist. For typesetting, MathJax import is required.");
    const e = T(), o = T(), d = N(() => t.block ? "div" : "span");
    async function c() {
      o.value && (await X(), a(), await window.MathJax.typesetPromise([o.value]));
    }
    function a() {
      if (!(!e.value || !o.value))
        if (e.value.children.length === 0 && !t.node)
          t.block ? o.value.innerText = `$$ ${e.value.innerText} $$` : o.value.innerText = `\\( ${e.value.innerText} \\)`;
        else {
          for (; o.value.lastElementChild; )
            o.value.removeChild(o.value.lastElementChild);
          for (const k of e.value.childNodes)
            o.value.appendChild(k.cloneNode(!0));
        }
    }
    async function f() {
      t.overlook ? o.value && (window.MathJax.typesetClear([o.value]), a()) : await c();
    }
    return z(() => [t.node, t.block, t.overlook], f), J(f), te(e, f, { childList: !0, subtree: !0, characterData: !0 }), l({ typeset: c }), (k, y) => (m(), h(p(u), null, {
      default: n(() => [
        b("span", {
          ref_key: "raw",
          ref: e,
          class: "mathjax-raw"
        }, [
          i(k.$slots, "default")
        ], 512),
        s(p(d), {
          ref_key: "formula",
          ref: o
        }, null, 512)
      ]),
      _: 3
    }));
  }
});
export {
  $e as AnimatedClock,
  Se as AppBase,
  Be as AppBaseV2,
  Te as MathJax,
  fe as ShakingIcon,
  me as ThemeToggleButton
};
