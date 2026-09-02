import { ConfigType, Dayjs } from 'dayjs';
import { MaybeRefOrGetter, Ref } from 'vue';
export declare function useElapsedTime(time?: MaybeRefOrGetter<ConfigType>, updateInterval?: MaybeRefOrGetter<number>, unit?: Parameters<typeof Dayjs.prototype.diff>[1], float?: boolean): Ref<number>;
//# sourceMappingURL=useElapsedTime.d.ts.map