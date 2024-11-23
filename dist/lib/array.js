function o(n, e, t) {
  for (const i of t)
    if (!(typeof i[n] > "u") && i[n] === e)
      return i;
  return null;
}
function c(n, e, t) {
  return e.map((i) => {
    const u = o(n, i[n], e), l = o(n, i[n], t);
    return u == null || l == null ? null : { ...u, ...l };
  }).filter((i) => i !== null);
}
function r(n, e) {
  return e == null ? n.reduce((t, i) => t + Number(i), 0) : n.reduce((t, i) => t + e(i), 0);
}
function s(n) {
  return n == null || n.length === 0;
}
function m(n) {
  return n.some((e, t) => n.indexOf(e) !== t);
}
function x(n, e) {
  if (!n)
    return 0;
  if (!e)
    return n.length;
  let t = 0, i = 0;
  for (const u of n)
    e(u, i, n) && t++, i++;
  return t;
}
function d(n, e) {
  if (typeof e > "u") {
    const l = Array(n);
    let f = 0;
    for (; f < n; )
      l[f] = f++;
    return l;
  }
  const t = Array(e - n);
  let i = 0, u = n;
  for (; u < e; )
    t[i++] = u++;
  return t;
}
function p(n, e) {
  const t = Array(e);
  let i = 0;
  for (; i < e; )
    t[i] = n / e * i++;
  return t;
}
function I(n) {
  let e = Number.NEGATIVE_INFINITY, t = Number.POSITIVE_INFINITY, i = -1, u = -1, l = 0;
  for (const f of n)
    f > e && (e = f, i = l), f < t && (t = f, u = l), l++;
  return { max: e, min: t, maxIndex: i, minIndex: u };
}
function* h(n, e) {
  const t = n.length, i = Array(e).fill(0);
  for (; ; ) {
    yield i.map((l) => n[l]);
    let u = e - 1;
    for (; u >= 0 && (i[u]++, !(i[u] < t)); )
      i[u] = 0, u--;
    if (u < 0)
      break;
  }
}
function b(n, e) {
  const t = n.indexOf(e);
  t > 0 && (n.splice(t, 1), n.splice(t - 1, 0, e));
}
function N(n, e) {
  const t = n.indexOf(e);
  t !== -1 && t < n.length - 1 && (n.splice(t, 1), n.splice(t + 1, 0, e));
}
export {
  x as count,
  p as divide,
  s as empty,
  m as existsDuplicate,
  o as findBy,
  I as findMinMax,
  h as generateForDepth,
  c as mergeArrayBy,
  b as moveAbove,
  N as moveBelow,
  d as sequence,
  r as sum
};
