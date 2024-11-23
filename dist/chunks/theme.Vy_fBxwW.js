import { getCurrentInstance as m, inject as f } from "vue";
function a() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (a.cache.has(e)) return a.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return a.cache.set(e, t), t;
}
a.cache = /* @__PURE__ */ new Map();
function u(e, t) {
  const s = m();
  if (!s)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return s;
}
function p() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = u(e).type;
  return a((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
const g = Symbol.for("vuetify:theme");
function d() {
  u("useTheme");
  const e = f(g, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
const l = "vuetify-color-scheme";
function v() {
  return d();
}
function n(e, t) {
  var s, i;
  if (t === "unspecified") {
    e.global.name.value = "";
    for (const o of document.querySelectorAll(".color-responsive"))
      if (o.classList.remove("color-responsive-dark", "color-responsive-light"), o instanceof HTMLObjectElement) {
        const r = (s = o.contentDocument) == null ? void 0 : s.documentElement;
        r && r.classList.remove("color-responsive-dark", "color-responsive-light");
      }
  } else {
    e.global.name.value = t;
    for (const o of document.querySelectorAll(".color-responsive"))
      if (t === "light" ? (o.classList.add("color-responsive-light"), o.classList.remove("color-responsive-dark")) : (o.classList.add("color-responsive-dark"), o.classList.remove("color-responsive-light")), o instanceof HTMLObjectElement) {
        const r = (i = o.contentDocument) == null ? void 0 : i.documentElement;
        if (!r)
          return;
        t === "light" ? (r.classList.add("color-responsive-light"), r.classList.remove("color-responsive-dark")) : (r.classList.add("color-responsive-dark"), r.classList.remove("color-responsive-light"));
      }
  }
}
function c() {
  var e, t;
  return (e = window.matchMedia) != null && e.call(window, "(prefers-color-scheme: light)").matches ? "light" : (t = window.matchMedia) != null && t.call(window, "(prefers-color-scheme: dark)").matches ? "dark" : "unspecified";
}
function k(e) {
  e.global.current.value.dark ? (c() === "light" ? localStorage.removeItem(l) : localStorage.setItem(l, "light"), n(e, "light")) : (c() === "dark" ? localStorage.removeItem(l) : localStorage.setItem(l, "dark"), n(e, "dark"));
}
function b(e) {
  const t = localStorage.getItem(l);
  t === "light" ? n(e, "light") : t === "dark" || c() === "dark" ? n(e, "dark") : n(e, "light");
}
export {
  l as V,
  n as a,
  c as b,
  p as g,
  b as r,
  k as t,
  v as u
};
