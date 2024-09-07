import { SIValue as i } from "./siPrefix.js";
const o = {
  required: (e) => !!e || "値を入力してください",
  value: (e) => Number.isFinite(i.parse(e).fraction) || "不正な値です",
  notZero: (e) => Number(e) !== 0 || "値を 0 にはできません",
  notNegative: (e) => {
    const r = i.parse(e);
    return Number.isFinite(r.fraction) && r.fraction >= 0 || "負値にはできません";
  }
};
export {
  o as Rules
};
