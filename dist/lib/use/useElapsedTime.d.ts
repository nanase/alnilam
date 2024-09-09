import { Ref } from 'vue';
import { Dayjs, ConfigType } from 'dayjs';
import { MaybeRefOrGetter } from '@vueuse/core';
export declare function useElapsedTime(time?: MaybeRefOrGetter<ConfigType>, updateInterval?: MaybeRefOrGetter<number>, unit?: Parameters<typeof Dayjs.prototype.diff>[1], float?: boolean): Ref<number>;
//# sourceMappingURL=useElapsedTime.d.ts.map