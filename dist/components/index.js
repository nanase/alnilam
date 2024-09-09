import { defineComponent as k, mergeDefaults as M, ref as S, computed as z, watch as D, openBlock as m, createElementBlock as c, renderSlot as n, createTextVNode as v, toDisplayString as u, unref as B, createCommentVNode as h, createElementVNode as p, normalizeStyle as g, Fragment as E, onMounted as I, onBeforeUnmount as N, resolveComponent as r, createBlock as w, withCtx as l, createVNode as i, mergeProps as P } from "vue";
import { getTimezoneName as Y } from "../lib/dayjs.js";
import T from "dayjs";
import { u as F } from "../chunks/useIntervalFnWithPauser.DQJ-weBt.js";
import { useTheme as H, reapplyTheme as L, VuetifyColorSchemeName as $, applyColorScheme as U, toggleTheme as j } from "../lib/theme.js";
import '../assets/index.css';const W = { class: "animated-clock" }, q = {
  key: 0,
  class: "date"
}, G = {
  key: 0,
  class: "timezone"
}, J = {
  key: 1,
  class: "time"
}, x = /* @__PURE__ */ k({
  __name: "AnimatedClock",
  props: M({
    time: null,
    updateInterval: null,
    stop: { type: Boolean },
    stopAnimation: { type: Boolean },
    hideDate: { type: Boolean },
    hideTime: { type: Boolean },
    hideTimezone: { type: Boolean },
    hideSeconds: { type: Boolean }
  }, { time: T(), updateInterval: 200 }),
  setup(s) {
    const t = S(s.time), a = z(
      () => s.stopAnimation ? "" : `visibility:${t.value.millisecond() < 666 ? "visible" : "hidden"}`
    );
    return D(
      () => s.time,
      () => {
        t.value = s.time;
      }
    ), F(
      () => t.value = T(),
      () => s.stop,
      () => s.updateInterval
    ), (e, o) => (m(), c("div", W, [
      e.hideDate ? h("", !0) : (m(), c("div", q, [
        e.hideTimezone ? h("", !0) : (m(), c("div", G, [
          n(e.$slots, "timezone", {}, () => [
            v(u(B(Y)(t.value)), 1)
          ])
        ])),
        p("div", null, [
          n(e.$slots, "date", {}, () => [
            v(u(t.value.format("YYYY-MM-DD")), 1)
          ])
        ])
      ])),
      e.hideTime ? h("", !0) : (m(), c("span", J, [
        n(e.$slots, "time", {
          style: g(a.value)
        }, () => [
          p("span", null, u(t.value.format("HH")), 1),
          p("span", {
            style: g(a.value)
          }, ":", 4),
          p("span", null, u(t.value.format("mm")), 1),
          e.hideSeconds ? h("", !0) : (m(), c(E, { key: 0 }, [
            p("span", {
              style: g(a.value)
            }, ":", 4),
            p("span", null, u(t.value.format("ss")), 1)
          ], 64))
        ])
      ]))
    ]));
  }
}), K = /* @__PURE__ */ k({
  __name: "ThemeToggleButton",
  setup(s) {
    const t = H();
    function a(o) {
      const d = localStorage.getItem($);
      d === null ? U(t, o.matches ? "dark" : "light") : (d === "dark" && o.matches || d === "light" && !o.matches) && localStorage.removeItem($);
    }
    function e() {
      j(t);
    }
    return I(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", a), L(t);
    }), N(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", a);
    }), (o, d) => {
      const f = r("v-btn"), _ = r("v-tooltip");
      return m(), w(_, {
        text: "テーマを切り替え",
        "aria-label": "テーマを切り替え"
      }, {
        activator: l(({ props: b }) => [
          i(f, P({ "data-test": "button" }, b, {
            icon: B(t).global.current.value.dark ? "mdi-weather-night" : "mdi-white-balance-sunny",
            onClick: e,
            "aria-label": "テーマを切り替え"
          }), null, 16, ["icon"])
        ]),
        _: 1
      });
    };
  }
}), ee = /* @__PURE__ */ k({
  __name: "AppBase",
  props: {
    toolbarTitle: null
  },
  setup(s, { expose: t }) {
    const a = S();
    return t({
      showErrorSnackbar: function() {
        a.value = !0;
      },
      closeErrorSnackbar: function() {
        a.value = !1;
      }
    }), (e, o) => {
      const d = r("v-btn"), f = r("v-snackbar"), _ = r("v-toolbar-title"), b = r("v-app-bar"), C = r("v-container"), A = r("v-main"), V = r("v-app");
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
              i(b, {
                flat: "",
                floating: "",
                density: "compact"
              }, {
                append: l(() => [
                  n(e.$slots, "toolbarPrepend"),
                  i(K),
                  n(e.$slots, "toolbarAppend")
                ]),
                default: l(() => [
                  n(e.$slots, "appbarPrepend"),
                  i(_, null, {
                    default: l(() => [
                      v(u(s.toolbarTitle), 1)
                    ]),
                    _: 1
                  }),
                  n(e.$slots, "appbarAppend")
                ]),
                _: 3
              }),
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
  x as AnimatedClock,
  ee as AppBase,
  K as ThemeToggleButton
};
