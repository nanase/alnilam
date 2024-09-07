function t(r) {
  return r == null ? "" : r.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export {
  t as withCommas
};
