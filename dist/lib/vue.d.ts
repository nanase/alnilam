import { Ref } from 'vue';
export declare function definePeriodicCall(onCalled: () => Promise<number | void>, onError?: (error: any) => Promise<number | void>): void;
export interface StorageOptions {
    type: 'local' | 'session';
    readable: boolean;
    writable: boolean;
}
export declare function storage<T>(value: Ref<T>, key: string, options?: Partial<StorageOptions>): {
    remove: () => void;
    save: () => void;
    load: () => void;
};
//# sourceMappingURL=vue.d.ts.map