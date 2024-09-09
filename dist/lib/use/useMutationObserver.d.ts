import { ShallowRef } from 'vue';
export declare function useMutationObserver(target: Readonly<ShallowRef<HTMLElement | null | undefined>> | string, cb: MutationCallback, options?: MutationObserverInit): {
    pause: () => void;
    resume: () => void;
    targetRef: Readonly<ShallowRef<HTMLElement | null | undefined>>;
};
//# sourceMappingURL=useMutationObserver.d.ts.map