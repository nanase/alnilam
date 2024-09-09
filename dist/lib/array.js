function o(n, i, e) {
  for (const t of e)
    if (!(typeof t[n] > "u") && t[n] === i)
      return t;
  return null;
}
function c(n, i, e) {
  return i.map((t) => {
    const l = o(n, t[n], i), u = o(n, t[n], e);
    return l == null || u == null ? null : { ...l, ...u };
  }).filter((t) => t !== null);
}
function r(n, i) {
  return i == null ? n.reduce((e, t) => e + Number(t), 0) : n.reduce((e, t) => e + i(t), 0);
}
function s(n) {
  return n == null || n.length === 0;
}
function x(n) {
  return n.some((i, e) => n.indexOf(i) !== e);
}
function d(n, i) {
  if (!n)
    return 0;
  if (!i)
    return n.length;
  let e = 0, t = 0;
  for (const l of n)
    i(l, t, n) && e++, t++;
  return e;
}
function m(n, i) {
  if (typeof i > "u") {
    const e = Array(n);
    let t = 0;
    for (; t < n; )
      e[t] = t++;
    return e;
  } else {
    const e = Array(i - n);
    let t = 0, l = n;
    for (; l < i; )
      e[t++] = l++;
    return e;
  }
}
function p(n, i) {
  const e = Array(i);
  let t = 0;
  for (; t < i; )
    e[t] = n / i * t++;
  return e;
}
function h(n) {
  let i = -1 / 0, e = 1 / 0, t = -1, l = -1, u = 0;
  for (const f of n)
    f > i && (i = f, t = u), f < e && (e = f, l = u), u++;
  return { max: i, min: e, maxIndex: t, minIndex: l };
}
function* b(n, i) {
  const e = n.length, t = Array(i).fill(0);
  for (; ; ) {
    yield t.map((u) => n[u]);
    let l = i - 1;
    for (; l >= 0 && (t[l]++, !(t[l] < e)); )
      t[l] = 0, l--;
    if (l < 0)
      break;
  }
}
function g(n, i) {
  const e = n.indexOf(i);
  e > 0 && (n.splice(e, 1), n.splice(e - 1, 0, i));
}
function w(n, i) {
  const e = n.indexOf(i);
  e !== -1 && e < n.length - 1 && (n.splice(e, 1), n.splice(e + 1, 0, i));
}
export {
  d as count,
  p as divide,
  s as empty,
  x as existsDuplicate,
  o as findBy,
  h as findMinMax,
  b as generateForDepth,
  c as mergeArrayBy,
  g as moveAbove,
  w as moveBelow,
  m as sequence,
  r as sum
};
