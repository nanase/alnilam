import { getCurrentInstance as c, inject as a } from "vue";
function u(e, r) {
  const o = c();
  if (!o)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return o;
}
const f = Symbol.for("vuetify:theme");
function m() {
  u("useTheme");
  const e = a(f, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
const i = "vuetify-color-scheme";
function g() {
  return m();
}
function s(e, r) {
  r === "unspecified" ? (e.global.name.value = "", document.querySelectorAll(".color-responsive").forEach((o) => {
    var l;
    if (o.classList.remove("color-responsive-dark", "color-responsive-light"), o instanceof HTMLObjectElement) {
      const t = (l = o.contentDocument) == null ? void 0 : l.documentElement;
      t && t.classList.remove("color-responsive-dark", "color-responsive-light");
    }
  })) : (e.global.name.value = r, document.querySelectorAll(".color-responsive").forEach((o) => {
    var l;
    if (r === "light" ? (o.classList.add("color-responsive-light"), o.classList.remove("color-responsive-dark")) : (o.classList.add("color-responsive-dark"), o.classList.remove("color-responsive-light")), o instanceof HTMLObjectElement) {
      const t = (l = o.contentDocument) == null ? void 0 : l.documentElement;
      if (!t)
        return;
      r === "light" ? (t.classList.add("color-responsive-light"), t.classList.remove("color-responsive-dark")) : (t.classList.add("color-responsive-dark"), t.classList.remove("color-responsive-light"));
    }
  }));
}
function n() {
  var e, r;
  return (e = window.matchMedia) != null && e.call(window, "(prefers-color-scheme: light)").matches ? "light" : (r = window.matchMedia) != null && r.call(window, "(prefers-color-scheme: dark)").matches ? "dark" : "unspecified";
}
function h(e) {
  e.global.current.value.dark ? (n() === "light" ? localStorage.removeItem(i) : localStorage.setItem(i, "light"), s(e, "light")) : (n() === "dark" ? localStorage.removeItem(i) : localStorage.setItem(i, "dark"), s(e, "dark"));
}
function v(e) {
  const r = localStorage.getItem(i);
  r === "light" ? s(e, "light") : r === "dark" || n() === "dark" ? s(e, "dark") : s(e, "light");
}
export {
  i as VuetifyColorSchemeName,
  s as applyColorScheme,
  n as getPrefersColorScheme,
  v as reapplyTheme,
  h as toggleTheme,
  g as useTheme
};
