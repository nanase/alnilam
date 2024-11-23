class i {
  constructor(n) {
    this.obj = n;
  }
}
function l(e, n) {
  if (typeof e < "u" && e != null)
    for (const f of Object.keys(n))
      n[f] instanceof i ? e[f] = n[f].obj : n[f] === null ? e[f] = null : !Array.isArray(n[f]) && typeof n[f] == "object" ? e[f] = l(e[f], n[f]) : e[f] = n[f];
  return e;
}
function s(e, n, f, o) {
  return typeof e > "u" || e == null ? o : e ? n : f;
}
function c(e, ...n) {
  const f = {}, o = Array.isArray(n[0]) ? n[0] : n;
  for (const t of o)
    f[t] = e[t];
  return f;
}
function u(e, ...n) {
  const f = { ...e }, o = Array.isArray(n[0]) ? n[0] : n;
  for (const t of o)
    delete f[t];
  return f;
}
export {
  i as RawObject,
  l as deepAssign,
  u as omit,
  c as pick,
  s as ternary
};
