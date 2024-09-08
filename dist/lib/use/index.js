import { computed as a } from "vue";
import { u as c } from "../../useIntervalFnWithPauser-cB_8Of1A.js";
function p(r, e = {}) {
  return a({
    get: () => JSON.stringify(r.value, e.replacer, e.space),
    set: (t) => {
      r.value = JSON.parse(t, e.reviver);
    }
  });
}
export {
  p as computedJSON,
  c as useIntervalFnWithPauser
};
