import { type Ref, ref, watch } from 'vue';
import dayjs from '@/lib/dayjs';
import { Dayjs, type ConfigType } from 'dayjs';
import { toValue, useIntervalFn, type MaybeRefOrGetter } from '@vueuse/core';

export function useElapsedTime(
  time: MaybeRefOrGetter<ConfigType> = dayjs(),
  updateInterval: MaybeRefOrGetter<number> = 1000,
  unit: Parameters<typeof Dayjs.prototype.diff>[1] = 's',
  float: boolean = false,
): Ref<number> {
  const elapsedTime = ref<number>(Number.NaN);

  function updateElapsedTime() {
    elapsedTime.value = dayjs().diff(toValue(time), unit, float);
  }

  useIntervalFn(updateElapsedTime, () => toValue(updateInterval));
  watch(() => toValue(time), updateElapsedTime, { immediate: true });

  return elapsedTime;
}
