import { useTheme as c } from "vuetify";
const t = "vuetify-color-scheme";
function a() {
  return c();
}
function s(e, l) {
  if (l === "unspecified") {
    e.global.name.value = "";
    for (const o of document.querySelectorAll(".color-responsive"))
      if (o.classList.remove("color-responsive-dark", "color-responsive-light"), o instanceof HTMLObjectElement) {
        const r = o.contentDocument?.documentElement;
        r && r.classList.remove("color-responsive-dark", "color-responsive-light");
      }
  } else {
    e.global.name.value = l;
    for (const o of document.querySelectorAll(".color-responsive"))
      if (l === "light" ? (o.classList.add("color-responsive-light"), o.classList.remove("color-responsive-dark")) : (o.classList.add("color-responsive-dark"), o.classList.remove("color-responsive-light")), o instanceof HTMLObjectElement) {
        const r = o.contentDocument?.documentElement;
        if (!r)
          return;
        l === "light" ? (r.classList.add("color-responsive-light"), r.classList.remove("color-responsive-dark")) : (r.classList.add("color-responsive-dark"), r.classList.remove("color-responsive-light"));
      }
  }
}
function i() {
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "unspecified";
}
function m(e) {
  e.global.current.value.dark ? (i() === "light" ? localStorage.removeItem(t) : localStorage.setItem(t, "light"), s(e, "light")) : (i() === "dark" ? localStorage.removeItem(t) : localStorage.setItem(t, "dark"), s(e, "dark"));
}
function d(e) {
  const l = localStorage.getItem(t);
  l === "light" ? s(e, "light") : l === "dark" || i() === "dark" ? s(e, "dark") : s(e, "light");
}
export {
  t as VuetifyColorSchemeName,
  s as applyColorScheme,
  i as getPrefersColorScheme,
  d as reapplyTheme,
  m as toggleTheme,
  a as useTheme
};
