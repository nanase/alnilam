import { defineComponent as k, mergeDefaults as z, ref as S, computed as M, watch as P, openBlock as m, createElementBlock as c, renderSlot as n, createTextVNode as v, toDisplayString as u, unref as B, createCommentVNode as h, createElementVNode as p, normalizeStyle as g, Fragment as D, onMounted as E, onBeforeUnmount as I, resolveComponent as s, createBlock as w, withCtx as l, createVNode as i, mergeProps as N, normalizeProps as Y, guardReactiveProps as F } from "vue";
import { getTimezoneName as H } from "../lib/dayjs.js";
import T from "dayjs";
import { u as L } from "../chunks/useIntervalFnWithPauser.DQJ-weBt.js";
import { useTheme as U, reapplyTheme as j, VuetifyColorSchemeName as $, applyColorScheme as R, toggleTheme as W } from "../lib/theme.js";
import '../assets/index.css';const q = { class: "animated-clock" }, G = {
  key: 0,
  class: "date"
}, J = {
  key: 0,
  class: "timezone"
}, K = {
  key: 1,
  class: "time"
}, te = /* @__PURE__ */ k({
  __name: "AnimatedClock",
  props: z({
    time: null,
    updateInterval: null,
    stop: { type: Boolean },
    stopAnimation: { type: Boolean },
    hideDate: { type: Boolean },
    hideTime: { type: Boolean },
    hideTimezone: { type: Boolean },
    hideSeconds: { type: Boolean }
  }, { time: T(), updateInterval: 200 }),
  setup(r) {
    const t = S(r.time), a = M(
      () => r.stopAnimation ? "" : `visibility:${t.value.millisecond() < 666 ? "visible" : "hidden"}`
    );
    return P(
      () => r.time,
      () => {
        t.value = r.time;
      }
    ), L(
      () => t.value = T(),
      () => r.stop,
      () => r.updateInterval
    ), (e, o) => (m(), c("div", q, [
      e.hideDate ? h("", !0) : (m(), c("div", G, [
        e.hideTimezone ? h("", !0) : (m(), c("div", J, [
          n(e.$slots, "timezone", {}, () => [
            v(u(B(H)(t.value)), 1)
          ])
        ])),
        p("div", null, [
          n(e.$slots, "date", {}, () => [
            v(u(t.value.format("YYYY-MM-DD")), 1)
          ])
        ])
      ])),
      e.hideTime ? h("", !0) : (m(), c("span", K, [
        n(e.$slots, "time", {
          style: g(a.value)
        }, () => [
          p("span", null, u(t.value.format("HH")), 1),
          p("span", {
            style: g(a.value)
          }, ":", 4),
          p("span", null, u(t.value.format("mm")), 1),
          e.hideSeconds ? h("", !0) : (m(), c(D, { key: 0 }, [
            p("span", {
              style: g(a.value)
            }, ":", 4),
            p("span", null, u(t.value.format("ss")), 1)
          ], 64))
        ])
      ]))
    ]));
  }
}), O = /* @__PURE__ */ k({
  __name: "ThemeToggleButton",
  setup(r) {
    const t = U();
    function a(o) {
      const d = localStorage.getItem($);
      d === null ? R(t, o.matches ? "dark" : "light") : (d === "dark" && o.matches || d === "light" && !o.matches) && localStorage.removeItem($);
    }
    function e() {
      W(t);
    }
    return E(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", a), j(t);
    }), I(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", a);
    }), (o, d) => {
      const f = s("v-btn"), _ = s("v-tooltip");
      return m(), w(_, {
        text: "テーマを切り替え",
        "aria-label": "テーマを切り替え"
      }, {
        activator: l(({ props: b }) => [
          i(f, N({ "data-test": "button" }, b, {
            icon: B(t).global.current.value.dark ? "mdi-weather-night" : "mdi-white-balance-sunny",
            onClick: e,
            "aria-label": "テーマを切り替え"
          }), null, 16, ["icon"])
        ]),
        _: 1
      });
    };
  }
}), oe = /* @__PURE__ */ k({
  __name: "AppBase",
  props: {
    toolbarTitle: null
  },
  setup(r, { expose: t }) {
    const a = S();
    return t({
      showErrorSnackbar: function() {
        a.value = !0;
      },
      closeErrorSnackbar: function() {
        a.value = !1;
      }
    }), (e, o) => {
      const d = s("v-btn"), f = s("v-snackbar"), _ = s("v-toolbar-title"), b = s("v-app-bar"), C = s("v-container"), A = s("v-main"), V = s("v-app");
      return m(), w(V, null, {
        default: l(() => [
          n(e.$slots, "mainPrepend"),
          i(f, {
            modelValue: a.value,
            "onUpdate:modelValue": o[1] || (o[1] = (y) => a.value = y),
            timeout: "10000"
          }, {
            actions: l(() => [
              i(d, {
                color: "red-lighten-2",
                variant: "text",
                onClick: o[0] || (o[0] = (y) => a.value = !1)
              }, {
                default: l(() => o[3] || (o[3] = [
                  v("閉じる")
                ])),
                _: 1
              })
            ]),
            default: l(() => [
              n(e.$slots, "errorSnackbar", {}, () => [
                o[2] || (o[2] = v("データの読み込みができませんでした。しばらくしてから再読み込みしてください。"))
              ])
            ]),
            _: 3
          }, 8, ["modelValue"]),
          i(A, null, {
            default: l(() => [
              i(b, Y(F(e.$attrs)), {
                append: l(() => [
                  n(e.$slots, "toolbarPrepend"),
                  i(O),
                  n(e.$slots, "toolbarAppend")
                ]),
                default: l(() => [
                  n(e.$slots, "appbarPrepend"),
                  i(_, null, {
                    default: l(() => [
                      v(u(r.toolbarTitle), 1)
                    ]),
                    _: 1
                  }),
                  n(e.$slots, "appbarAppend")
                ]),
                _: 3
              }, 16),
              n(e.$slots, "header"),
              i(C, null, {
                default: l(() => [
                  n(e.$slots, "default")
                ]),
                _: 3
              }),
              n(e.$slots, "footer")
            ]),
            _: 3
          }),
          n(e.$slots, "mainAppend")
        ]),
        _: 3
      });
    };
  }
});
export {
  te as AnimatedClock,
  oe as AppBase,
  O as ThemeToggleButton
};
