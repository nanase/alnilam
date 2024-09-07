import { defineComponent as h, onMounted as s, onBeforeUnmount as d, resolveComponent as a, openBlock as p, createBlock as g, withCtx as u, createVNode as f, mergeProps as _, unref as w } from "vue";
import { useTheme as k, reapplyTheme as v, VuetifyColorSchemeName as c, applyColorScheme as T, toggleTheme as C } from "../lib/theme.js";
const M = /* @__PURE__ */ h({
  __name: "ThemeToggleButton",
  setup(b) {
    const e = k();
    function n(o) {
      const t = localStorage.getItem(c);
      t === null ? T(e, o.matches ? "dark" : "light") : (t === "dark" && o.matches || t === "light" && !o.matches) && localStorage.removeItem(c);
    }
    function r() {
      C(e);
    }
    return s(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", n), v(e);
    }), d(() => {
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", n);
    }), (o, t) => {
      const m = a("v-btn"), i = a("v-tooltip");
      return p(), g(i, {
        text: "テーマを切り替え",
        "aria-label": "テーマを切り替え"
      }, {
        activator: u(({ props: l }) => [
          f(m, _({ "data-test": "button" }, l, {
            icon: w(e).global.current.value.dark ? "mdi-weather-night" : "mdi-white-balance-sunny",
            onClick: r,
            "aria-label": "テーマを切り替え"
          }), null, 16, ["icon"])
        ]),
        _: 1
      });
    };
  }
});
export {
  M as ThemeToggleButton
};
