function i(n, r, e) {
  const u = typeof n == "number" && Number.isNaN(n), t = typeof r == "number" && Number.isNaN(r);
  return u && t ? 0 : u ? 1 : t ? -1 : n == null && r == null ? 0 : n == null ? 1 : r == null ? -1 : n < r ? e === "descending" ? 1 : -1 : n > r ? e === "descending" ? -1 : 1 : 0;
}
export {
  i as compareWithNull
};
