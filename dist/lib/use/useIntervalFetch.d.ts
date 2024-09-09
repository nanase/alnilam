import { Ref } from 'vue';
import { MaybeRefOrGetter, UseFetchOptions, UseFetchReturn, UseIntervalFnOptions, Pausable } from '@vueuse/core';
import { Dayjs } from 'dayjs';
export type UseIntervalFetchReturn<T> = {
    fetchedAt: Readonly<Ref<Dayjs>>;
} & UseFetchReturn<T> & Pausable;
export declare function useIntervalFetch<T>(url: MaybeRefOrGetter<string>, interval: MaybeRefOrGetter<number>, options?: UseIntervalFnOptions & UseFetchOptions): UseIntervalFetchReturn<T>;
//# sourceMappingURL=useIntervalFetch.d.ts.map