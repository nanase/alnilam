import { Ref, WritableComputedRef } from 'vue';
export interface ComputedJSONOptions {
    replacer?: Parameters<typeof JSON.stringify>[1];
    space?: Parameters<typeof JSON.stringify>[2];
    reviver?: Parameters<typeof JSON.parse>[1];
}
export declare function computedJSON<T>(source: Ref<T>, options?: ComputedJSONOptions): WritableComputedRef<string, string>;
//# sourceMappingURL=computedJSON.d.ts.map