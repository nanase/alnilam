import { Ref } from 'vue';
export declare function definePeriodicCall(onCalled: () => Promise<number | undefined>, onError?: (error: any) => Promise<number | undefined>): void;
export interface StorageOptions {
    type: 'local' | 'session';
    readable: boolean;
    writable: boolean;
    immediate: boolean;
}
export declare function storage<T>(value: Ref<T>, key: string, options?: Partial<StorageOptions>): {
    remove: () => void;
    save: () => void;
    load: () => void;
};
//# sourceMappingURL=vue.d.ts.map