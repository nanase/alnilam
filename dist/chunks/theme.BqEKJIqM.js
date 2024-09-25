import { getCurrentInstance as u, inject as f } from "vue";
function l() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (l.cache.has(e)) return l.cache.get(e);
  const r = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return l.cache.set(e, r), r;
}
l.cache = /* @__PURE__ */ new Map();
function i(e, r) {
  const o = u();
  if (!o)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return o;
}
function h() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const r = i(e).type;
  return l((r == null ? void 0 : r.aliasName) || (r == null ? void 0 : r.name));
}
const m = Symbol.for("vuetify:theme");
function g() {
  i("useTheme");
  const e = f(m, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
const a = "vuetify-color-scheme";
function p() {
  return g();
}
function s(e, r) {
  r === "unspecified" ? (e.global.name.value = "", document.querySelectorAll(".color-responsive").forEach((o) => {
    var n;
    if (o.classList.remove("color-responsive-dark", "color-responsive-light"), o instanceof HTMLObjectElement) {
      const t = (n = o.contentDocument) == null ? void 0 : n.documentElement;
      t && t.classList.remove("color-responsive-dark", "color-responsive-light");
    }
  })) : (e.global.name.value = r, document.querySelectorAll(".color-responsive").forEach((o) => {
    var n;
    if (r === "light" ? (o.classList.add("color-responsive-light"), o.classList.remove("color-responsive-dark")) : (o.classList.add("color-responsive-dark"), o.classList.remove("color-responsive-light")), o instanceof HTMLObjectElement) {
      const t = (n = o.contentDocument) == null ? void 0 : n.documentElement;
      if (!t)
        return;
      r === "light" ? (t.classList.add("color-responsive-light"), t.classList.remove("color-responsive-dark")) : (t.classList.add("color-responsive-dark"), t.classList.remove("color-responsive-light"));
    }
  }));
}
function c() {
  var e, r;
  return (e = window.matchMedia) != null && e.call(window, "(prefers-color-scheme: light)").matches ? "light" : (r = window.matchMedia) != null && r.call(window, "(prefers-color-scheme: dark)").matches ? "dark" : "unspecified";
}
function v(e) {
  e.global.current.value.dark ? (c() === "light" ? localStorage.removeItem(a) : localStorage.setItem(a, "light"), s(e, "light")) : (c() === "dark" ? localStorage.removeItem(a) : localStorage.setItem(a, "dark"), s(e, "dark"));
}
function k(e) {
  const r = localStorage.getItem(a);
  r === "light" ? s(e, "light") : r === "dark" || c() === "dark" ? s(e, "dark") : s(e, "light");
}
export {
  a as V,
  s as a,
  c as b,
  h as g,
  k as r,
  v as t,
  p as u
};
