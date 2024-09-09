import { defineComponent as w, mergeDefaults as D, ref as y, computed as E, watch as I, openBlock as d, createElementBlock as c, renderSlot as a, createTextVNode as f, toDisplayString as u, unref as B, createCommentVNode as v, createElementVNode as p, normalizeStyle as g, Fragment as N, onMounted as P, onBeforeUnmount as Y, resolveComponent as s, createBlock as T, withCtx as r, createVNode as m, mergeProps as F, useSlots as H, withModifiers as L } from "vue";
import { getTimezoneName as U } from "../lib/dayjs.js";
import S from "dayjs";
import { u as j } from "../chunks/useIntervalFnWithPauser.DQJ-weBt.js";
import { useTheme as O, reapplyTheme as W, VuetifyColorSchemeName as $, applyColorScheme as q, toggleTheme as G } from "../lib/theme.js";
import '../assets/index.css';const J = { class: "animated-clock" }, K = {
  key: 0,
  class: "date"
}, Q = {
  key: 0,
  class: "timezone"
}, R = {
  key: 1,
  class: "time"
}, ne = /* @__PURE__ */ w({
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
  setup(i) {
    const e = y(i.time), l = E(
      () => i.stopAnimation ? "" : `visibility:${e.value.millisecond() < 666 ? "visible" : "hidden"}`
    );
    return I(
      () => i.time,
      () => {
        e.value = i.time;
      }
    ), j(
      () => e.value = S(),
      () => i.stop,
      () => i.updateInterval
    ), (t, o) => (d(), c("div", J, [
      t.hideDate ? v("", !0) : (d(), c("div", K, [
        t.hideTimezone ? v("", !0) : (d(), c("div", Q, [
          a(t.$slots, "timezone", {}, () => [
            f(u(B(U)(e.value)), 1)
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
          style: g(l.value)
        }, () => [
          p("span", null, u(e.value.format("HH")), 1),
          p("span", {
            style: g(l.value)
          }, ":", 4),
          p("span", null, u(e.value.format("mm")), 1),
          t.hideSeconds ? v("", !0) : (d(), c(N, { key: 0 }, [
            p("span", {
              style: g(l.value)
            }, ":", 4),
            p("span", null, u(e.value.format("ss")), 1)
          ], 64))
        ])
      ]))
    ]));
  }
}), X = /* @__PURE__ */ w({
  __name: "ThemeToggleButton",
  setup(i) {
    const e = O();
    function l(o) {
      const n = localStorage.getItem($);
      n === null ? q(e, o.matches ? "dark" : "light") : (n === "dark" && o.matches || n === "light" && !o.matches) && localStorage.removeItem($);
    }
    function t() {
      G(e);
    }
    return P(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", l), W(e);
    }), Y(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", l);
    }), (o, n) => {
      const h = s("v-btn"), _ = s("v-tooltip");
      return d(), T(_, {
        text: "テーマを切り替え",
        "aria-label": "テーマを切り替え"
      }, {
        activator: r(({ props: b }) => [
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
}), ae = /* @__PURE__ */ w({
  __name: "AppBase",
  props: {
    toolbarTitle: null
  },
  setup(i, { expose: e }) {
    const l = y(), t = y();
    return e({
      showErrorSnackbar: function() {
        t.value = !0;
      },
      closeErrorSnackbar: function() {
        t.value = !1;
      }
    }), (o, n) => {
      const h = s("v-btn"), _ = s("v-snackbar"), b = s("v-app-bar-nav-icon"), C = s("v-toolbar-title"), A = s("v-app-bar"), M = s("v-container"), V = s("v-main"), z = s("v-app");
      return d(), T(z, null, {
        default: r(() => [
          a(o.$slots, "drawer", { opened: l.value }),
          m(_, {
            modelValue: t.value,
            "onUpdate:modelValue": n[1] || (n[1] = (k) => t.value = k),
            timeout: "10000"
          }, {
            actions: r(() => [
              m(h, {
                color: "red-lighten-2",
                variant: "text",
                onClick: n[0] || (n[0] = (k) => t.value = !1)
              }, {
                default: r(() => n[4] || (n[4] = [
                  f("閉じる")
                ])),
                _: 1
              })
            ]),
            default: r(() => [
              a(o.$slots, "errorSnackbar", {}, () => [
                n[3] || (n[3] = f("データの読み込みができませんでした。しばらくしてから再読み込みしてください。"))
              ])
            ]),
            _: 3
          }, 8, ["modelValue"]),
          m(V, null, {
            default: r(() => [
              m(A, {
                flat: "",
                floating: "",
                density: "compact"
              }, {
                append: r(() => [
                  a(o.$slots, "toolbarPrepend"),
                  m(X),
                  a(o.$slots, "toolbarAppend")
                ]),
                default: r(() => [
                  a(o.$slots, "appbarPrepend"),
                  H().drawer ? (d(), T(b, {
                    key: 0,
                    variant: "text",
                    onClick: n[2] || (n[2] = L((k) => l.value = !l.value, ["stop"])),
                    "aria-label": "ナビゲーションを表示"
                  })) : v("", !0),
                  m(C, null, {
                    default: r(() => [
                      f(u(i.toolbarTitle), 1)
                    ]),
                    _: 1
                  }),
                  a(o.$slots, "appbarAppend")
                ]),
                _: 3
              }),
              a(o.$slots, "header"),
              m(M, null, {
                default: r(() => [
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
