function o(e) {
  return e.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
}
const n = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));/gi;
function a(e) {
  return e.replace(n, (u, t) => {
    const r = t.toLowerCase();
    return r === "amp" ? "&" : r === "colon" ? ":" : r === "apos" ? "'" : r === "quot" ? '"' : r === "lt" ? "<" : r === "gt" ? ">" : r.charAt(0) === "#" ? r.charAt(1) === "x" ? String.fromCharCode(parseInt(r.substring(2), 16)) : String.fromCharCode(+r.substring(1)) : `&${t};`;
  });
}
export {
  o as escapeRegex,
  a as unescapeHtml
};
