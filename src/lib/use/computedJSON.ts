import { computed, type Ref, type WritableComputedRef } from 'vue';

export interface ComputedJSONOptions {
  replacer?: Parameters<typeof JSON.stringify>[1];
  space?: Parameters<typeof JSON.stringify>[2];
  reviver?: Parameters<typeof JSON.parse>[1];
}

export function computedJSON<T>(
  source: Ref<T>,
  options: ComputedJSONOptions = {},
): WritableComputedRef<string, string> {
  return computed<string>({
    get: (): string => JSON.stringify(source.value, options.replacer, options.space),
    set: (value: string) => {
      source.value = JSON.parse(value, options.reviver);
    },
  });
}
