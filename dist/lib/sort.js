function u(n, e, r) {
  return n !== n && e !== e ? 0 : n !== n ? 1 : e !== e ? -1 : n == null && e == null ? 0 : n == null ? 1 : e == null ? -1 : n < e ? r === "descending" ? 1 : -1 : n > e ? r === "descending" ? -1 : 1 : 0;
}
export {
  u as compareWithNull
};
