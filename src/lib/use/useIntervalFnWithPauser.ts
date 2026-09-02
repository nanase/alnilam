import { useIntervalFn } from '@vueuse/core';
import { type MaybeRefOrGetter, toValue, watch } from 'vue';

export function useIntervalFnWithPauser(
  cb: Parameters<typeof useIntervalFn>[0],
  pauser: MaybeRefOrGetter<boolean>,
  interval?: Parameters<typeof useIntervalFn>[1],
  options?: Parameters<typeof useIntervalFn>[2],
): ReturnType<typeof useIntervalFn> {
  const pausable = useIntervalFn(cb, interval, options);

  watch(
    () => toValue(pauser),
    () => (toValue(pauser) ? pausable.pause() : pausable.resume()),
    { immediate: options?.immediate ?? true },
  );

  return pausable;
}
