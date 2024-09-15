import { type Ref, ref, watch } from 'vue';
import {
  useFetch,
  useIntervalFn,
  type MaybeRefOrGetter,
  type UseFetchOptions,
  type UseFetchReturn,
  type UseIntervalFnOptions,
  type Pausable,
} from '@vueuse/core';
import dayjs, { Dayjs } from 'dayjs';

export type UseIntervalFetchReturn<T> = { fetchedAt: Readonly<Ref<Dayjs>> } & UseFetchReturn<T> & Pausable;

export function useIntervalFetch<T>(
  url: MaybeRefOrGetter<string>,
  interval: MaybeRefOrGetter<number>,
  options?: UseIntervalFnOptions & UseFetchOptions,
): UseIntervalFetchReturn<T> {
  const fetchedAt = ref<Dayjs>(dayjs(null));
  const fetchReturn = useFetch<T>(url, {}, options);
  const pausable = useIntervalFn(
    async () => {
      await fetchReturn.execute();
    },
    interval,
    options,
  );

  watch(
    () => fetchReturn.isFinished.value,
    () => {
      if (fetchReturn.data != null) {
        fetchedAt.value = dayjs();
      }
    },
  );

  return {
    fetchedAt: fetchedAt as Readonly<Ref<Dayjs>>,
    ...fetchReturn,
    ...pausable,
  } as const;
}
