import { defineComponent as g, onMounted as C, onBeforeUnmount as y, resolveComponent as n, openBlock as v, createBlock as _, withCtx as t, createVNode as r, mergeProps as B, unref as V, ref as b, renderSlot as a, createTextVNode as u, useSlots as M, withModifiers as A, createCommentVNode as E, toDisplayString as N } from "vue";
import { useTheme as P, reapplyTheme as I, VuetifyColorSchemeName as h, applyColorScheme as L, toggleTheme as O } from "../lib/theme.js";
const U = /* @__PURE__ */ g({
  __name: "ThemeToggleButton",
  setup(f) {
    const s = P();
    function p(o) {
      const e = localStorage.getItem(h);
      e === null ? L(s, o.matches ? "dark" : "light") : (e === "dark" && o.matches || e === "light" && !o.matches) && localStorage.removeItem(h);
    }
    function l() {
      O(s);
    }
    return C(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", p), I(s);
    }), y(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", p);
    }), (o, e) => {
      const i = n("v-btn"), c = n("v-tooltip");
      return v(), _(c, {
        text: "テーマを切り替え",
        "aria-label": "テーマを切り替え"
      }, {
        activator: t(({ props: m }) => [
          r(i, B({ "data-test": "button" }, m, {
            icon: V(s).global.current.value.dark ? "mdi-weather-night" : "mdi-white-balance-sunny",
            onClick: l,
            "aria-label": "テーマを切り替え"
          }), null, 16, ["icon"])
        ]),
        _: 1
      });
    };
  }
}), q = /* @__PURE__ */ g({
  __name: "AppBase",
  props: {
    toolbarTitle: null
  },
  setup(f, { expose: s }) {
    const p = b(), l = b();
    return s({
      showErrorSnackbar: function() {
        l.value = !0;
      },
      closeErrorSnackbar: function() {
        l.value = !1;
      }
    }), (o, e) => {
      const i = n("v-btn"), c = n("v-snackbar"), m = n("v-app-bar-nav-icon"), k = n("v-toolbar-title"), w = n("v-app-bar"), S = n("v-container"), T = n("v-main"), $ = n("v-app");
      return v(), _($, null, {
        default: t(() => [
          a(o.$slots, "drawer", { opened: "drawerOpened" }),
          r(c, {
            modelValue: l.value,
            "onUpdate:modelValue": e[1] || (e[1] = (d) => l.value = d),
            timeout: "10000"
          }, {
            actions: t(() => [
              r(i, {
                color: "red-lighten-2",
                variant: "text",
                onClick: e[0] || (e[0] = (d) => l.value = !1)
              }, {
                default: t(() => e[4] || (e[4] = [
                  u("閉じる")
                ])),
                _: 1
              })
            ]),
            default: t(() => [
              a(o.$slots, "errorSnackbar", {}, () => [
                e[3] || (e[3] = u("データの読み込みができませんでした。しばらくしてから再読み込みしてください。"))
              ])
            ]),
            _: 3
          }, 8, ["modelValue"]),
          r(T, null, {
            default: t(() => [
              r(w, {
                flat: "",
                floating: "",
                density: "compact"
              }, {
                append: t(() => [
                  a(o.$slots, "toolbarPrepend"),
                  r(U),
                  a(o.$slots, "toolbarAppend")
                ]),
                default: t(() => [
                  a(o.$slots, "appbarPrepend"),
                  M().drawer ? (v(), _(m, {
                    key: 0,
                    variant: "text",
                    onClick: e[2] || (e[2] = A((d) => p.value = !p.value, ["stop"])),
                    "aria-label": "ナビゲーションを表示"
                  })) : E("", !0),
                  r(k, null, {
                    default: t(() => [
                      u(N(f.toolbarTitle), 1)
                    ]),
                    _: 1
                  }),
                  a(o.$slots, "appbarAppend")
                ]),
                _: 3
              }),
              a(o.$slots, "header"),
              r(S, null, {
                default: t(() => [
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
  q as AppBase,
  U as ThemeToggleButton
};
