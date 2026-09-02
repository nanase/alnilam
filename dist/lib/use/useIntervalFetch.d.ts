import { Pausable, UseFetchOptions, UseFetchReturn, UseIntervalFnOptions } from '@vueuse/core';
import { Dayjs } from 'dayjs';
import { MaybeRefOrGetter, Ref } from 'vue';
export type UseIntervalFetchReturn<T> = {
    fetchedAt: Readonly<Ref<Dayjs>>;
} & UseFetchReturn<T> & Pausable;
export declare function useIntervalFetch<T>(url: MaybeRefOrGetter<string>, interval: MaybeRefOrGetter<number>, options?: UseIntervalFnOptions & UseFetchOptions): UseIntervalFetchReturn<T>;
//# sourceMappingURL=useIntervalFetch.d.ts.map