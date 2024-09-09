import { defineComponent as T, mergeDefaults as D, ref as y, computed as E, watch as I, openBlock as d, createElementBlock as c, renderSlot as a, createTextVNode as f, toDisplayString as u, unref as B, createCommentVNode as v, createElementVNode as p, normalizeStyle as g, Fragment as N, onMounted as P, onBeforeUnmount as Y, resolveComponent as r, createBlock as w, withCtx as l, createVNode as m, mergeProps as F, useSlots as H, withModifiers as L } from "vue";
import { getTimezoneName as O } from "../lib/dayjs.js";
import { a as U } from "../chunks/useIntervalFnWithPauser.CDwrKPK1.js";
import S from "dayjs";
import { useTheme as j, reapplyTheme as W, VuetifyColorSchemeName as $, applyColorScheme as q, toggleTheme as G } from "../lib/theme.js";
import '../assets/index.css';const J = { class: "animated-clock" }, K = {
  key: 0,
  class: "date"
}, Q = {
  key: 0,
  class: "timezone"
}, R = {
  key: 1,
  class: "time"
}, ne = /* @__PURE__ */ T({
  __name: "AnimatedClock",
  props: D({
    time: null,
    updateInterval: null,
    stop: { type: Boolean },
    stopAnimation: { type: Boolean },
    hideDate: { type: Boolean },
    hideTime: { type: Boolean },
    hideTimezone: { type: Boolean },
    hideSeconds: { type: Boolean }
  }, { time: S(), updateInterval: 200 }),
  setup(s) {
    const e = y(s.time), i = E(
      () => s.stopAnimation ? "" : `visibility:${e.value.millisecond() < 666 ? "visible" : "hidden"}`
    );
    return I(
      () => s.time,
      () => {
        e.value = s.time;
      }
    ), U(
      () => e.value = S(),
      () => s.stop,
      () => s.updateInterval
    ), (t, o) => (d(), c("div", J, [
      t.hideDate ? v("", !0) : (d(), c("div", K, [
        t.hideTimezone ? v("", !0) : (d(), c("div", Q, [
          a(t.$slots, "timezone", {}, () => [
            f(u(B(O)(e.value)), 1)
          ])
        ])),
        p("div", null, [
          a(t.$slots, "date", {}, () => [
            f(u(e.value.format("YYYY-MM-DD")), 1)
          ])
        ])
      ])),
      t.hideTime ? v("", !0) : (d(), c("span", R, [
        a(t.$slots, "time", {
          style: g(i.value)
        }, () => [
          p("span", null, u(e.value.format("HH")), 1),
          p("span", {
            style: g(i.value)
          }, ":", 4),
          p("span", null, u(e.value.format("mm")), 1),
          t.hideSeconds ? v("", !0) : (d(), c(N, { key: 0 }, [
            p("span", {
              style: g(i.value)
            }, ":", 4),
            p("span", null, u(e.value.format("ss")), 1)
          ], 64))
        ])
      ]))
    ]));
  }
}), X = /* @__PURE__ */ T({
  __name: "ThemeToggleButton",
  setup(s) {
    const e = j();
    function i(o) {
      const n = localStorage.getItem($);
      n === null ? q(e, o.matches ? "dark" : "light") : (n === "dark" && o.matches || n === "light" && !o.matches) && localStorage.removeItem($);
    }
    function t() {
      G(e);
    }
    return P(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", i), W(e);
    }), Y(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", i);
    }), (o, n) => {
      const h = r("v-btn"), _ = r("v-tooltip");
      return d(), w(_, {
        text: "テーマを切り替え",
        "aria-label": "テーマを切り替え"
      }, {
        activator: l(({ props: b }) => [
          m(h, F({ "data-test": "button" }, b, {
            icon: B(e).global.current.value.dark ? "mdi-weather-night" : "mdi-white-balance-sunny",
            onClick: t,
            "aria-label": "テーマを切り替え"
          }), null, 16, ["icon"])
        ]),
        _: 1
      });
    };
  }
}), ae = /* @__PURE__ */ T({
  __name: "AppBase",
  props: {
    toolbarTitle: null
  },
  setup(s, { expose: e }) {
    const i = y(), t = y();
    return e({
      showErrorSnackbar: function() {
        t.value = !0;
      },
      closeErrorSnackbar: function() {
        t.value = !1;
      }
    }), (o, n) => {
      const h = r("v-btn"), _ = r("v-snackbar"), b = r("v-app-bar-nav-icon"), C = r("v-toolbar-title"), A = r("v-app-bar"), M = r("v-container"), V = r("v-main"), z = r("v-app");
      return d(), w(z, null, {
        default: l(() => [
          a(o.$slots, "drawer", { opened: "drawerOpened" }),
          m(_, {
            modelValue: t.value,
            "onUpdate:modelValue": n[1] || (n[1] = (k) => t.value = k),
            timeout: "10000"
          }, {
            actions: l(() => [
              m(h, {
                color: "red-lighten-2",
                variant: "text",
                onClick: n[0] || (n[0] = (k) => t.value = !1)
              }, {
                default: l(() => n[4] || (n[4] = [
                  f("閉じる")
                ])),
                _: 1
              })
            ]),
            default: l(() => [
              a(o.$slots, "errorSnackbar", {}, () => [
                n[3] || (n[3] = f("データの読み込みができませんでした。しばらくしてから再読み込みしてください。"))
              ])
            ]),
            _: 3
          }, 8, ["modelValue"]),
          m(V, null, {
            default: l(() => [
              m(A, {
                flat: "",
                floating: "",
                density: "compact"
              }, {
                append: l(() => [
                  a(o.$slots, "toolbarPrepend"),
                  m(X),
                  a(o.$slots, "toolbarAppend")
                ]),
                default: l(() => [
                  a(o.$slots, "appbarPrepend"),
                  H().drawer ? (d(), w(b, {
                    key: 0,
                    variant: "text",
                    onClick: n[2] || (n[2] = L((k) => i.value = !i.value, ["stop"])),
                    "aria-label": "ナビゲーションを表示"
                  })) : v("", !0),
                  m(C, null, {
                    default: l(() => [
                      f(u(s.toolbarTitle), 1)
                    ]),
                    _: 1
                  }),
                  a(o.$slots, "appbarAppend")
                ]),
                _: 3
              }),
              a(o.$slots, "header"),
              m(M, null, {
                default: l(() => [
                  a(o.$slots, "default")
                ]),
                _: 3
              }),
              a(o.$slots, "footer")
            ]),
            _: 3
          })
        ]),
        _: 3
      });
    };
  }
});
export {
  ne as AnimatedClock,
  ae as AppBase,
  X as ThemeToggleButton
};
