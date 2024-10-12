class l {
  constructor(n) {
    this.obj = n;
  }
}
function o(e, n) {
  if (typeof e < "u" && e != null)
    for (const f of Object.keys(n))
      n[f] instanceof l ? e[f] = n[f].obj : n[f] === null ? e[f] = null : !Array.isArray(n[f]) && typeof n[f] == "object" ? e[f] = o(e[f], n[f]) : e[f] = n[f];
  return e;
}
function s(e, n, f, t) {
  return typeof e > "u" || e == null ? t : e ? n : f;
}
function c(e, ...n) {
  const f = {};
  return (Array.isArray(n[0]) ? n[0] : n).forEach((i) => {
    f[i] = e[i];
  }), f;
}
function u(e, ...n) {
  const f = { ...e };
  return (Array.isArray(n[0]) ? n[0] : n).forEach((i) => {
    delete f[i];
  }), f;
}
export {
  l as RawObject,
  o as deepAssign,
  u as omit,
  c as pick,
  s as ternary
};
