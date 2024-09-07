function f(n, t, i) {
  for (const e of i)
    if (!(typeof e[n] > "u") && e[n] === t)
      return e;
  return null;
}
function o(n, t, i) {
  return t.map((e) => {
    const u = f(n, e[n], t), l = f(n, e[n], i);
    return u == null || l == null ? null : { ...u, ...l };
  }).filter((e) => e !== null);
}
function c(n, t) {
  return t == null ? n.reduce((i, e) => i + Number(e), 0) : n.reduce((i, e) => i + t(e), 0);
}
function s(n) {
  return n == null || n.length === 0;
}
function m(n) {
  return n.some((t, i) => n.indexOf(t) !== i);
}
function x(n, t) {
  if (!n)
    return 0;
  if (!t)
    return n.length;
  let i = 0, e = 0;
  for (const u of n)
    t(u, e, n) && i++, e++;
  return i;
}
function d(n, t) {
  if (typeof t > "u") {
    const i = Array(n);
    let e = 0;
    for (; e < n; )
      i[e] = e++;
    return i;
  } else {
    const i = Array(t - n);
    let e = 0, u = n;
    for (; u < t; )
      i[e++] = u++;
    return i;
  }
}
function h(n, t) {
  const i = Array(t);
  let e = 0;
  for (; e < t; )
    i[e] = n / t * e++;
  return i;
}
function p(n) {
  let t = -1 / 0, i = 1 / 0, e = -1, u = -1, l = 0;
  for (const r of n)
    r > t && (t = r, e = l), r < i && (i = r, u = l), l++;
  return { max: t, min: i, maxIndex: e, minIndex: u };
}
function* b(n, t) {
  const i = n.length, e = Array(t).fill(0);
  for (; ; ) {
    yield e.map((l) => n[l]);
    let u = t - 1;
    for (; u >= 0 && (e[u]++, !(e[u] < i)); )
      e[u] = 0, u--;
    if (u < 0)
      break;
  }
}
export {
  x as count,
  h as divide,
  s as empty,
  m as existsDuplicate,
  f as findBy,
  p as findMinMax,
  b as generateForDepth,
  o as mergeArrayBy,
  d as sequence,
  c as sum
};
