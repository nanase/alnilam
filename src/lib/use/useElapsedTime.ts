import { useIntervalFn } from '@vueuse/core';
import type { ConfigType, Dayjs } from 'dayjs';
import { type MaybeRefOrGetter, type Ref, ref, toValue, watch } from 'vue';
import dayjs from '@/lib/dayjs';

export function useElapsedTime(
  time: MaybeRefOrGetter<ConfigType> = dayjs(),
  updateInterval: MaybeRefOrGetter<number> = 1000,
  unit: Parameters<typeof Dayjs.prototype.diff>[1] = 's',
  float = false,
): Ref<number> {
  const elapsedTime = ref<number>(Number.NaN);

  function updateElapsedTime() {
    elapsedTime.value = dayjs().diff(toValue(time), unit, float);
  }

  useIntervalFn(updateElapsedTime, () => toValue(updateInterval));
  watch(() => toValue(time), updateElapsedTime, { immediate: true });

  return elapsedTime;
}
