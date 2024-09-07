import { computed, Ref, WritableComputedRef } from 'vue';

export interface ComputedJSONOptions {
  replacer?: Parameters<typeof JSON.stringify>[1];
  space?: Parameters<typeof JSON.stringify>[2];
  reviver?: Parameters<typeof JSON.parse>[1];
}

export function computedJSON<T>(source: Ref<T>, options: ComputedJSONOptions = {}): WritableComputedRef<string, T> {
  return computed<string>({
    get: () => JSON.stringify(source.value, options.replacer, options.space),
    set: (value: string) => {
      try {
        source.value = JSON.parse(value, options.reviver);
      } catch {
        console.error('failed to import');
      }
    },
  });
}
