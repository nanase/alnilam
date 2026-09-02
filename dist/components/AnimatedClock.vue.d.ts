import { Dayjs } from '../lib/dayjs';
type __VLS_Props = {
    time?: Dayjs;
    updateInterval?: number;
    stop?: boolean;
    stopAnimation?: boolean;
    hideDate?: boolean;
    hideTime?: boolean;
    hideTimezone?: boolean;
    hideSeconds?: boolean;
};
type __VLS_PublicProps = __VLS_PropsChildren<__VLS_Slots> & __VLS_Props;
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {
    style: string;
};
type __VLS_Slots = {} & {
    timezone?: (props: typeof __VLS_1) => any;
} & {
    date?: (props: typeof __VLS_3) => any;
} & {
    time?: (props: typeof __VLS_5) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_PropsChildren<S> = {
    [K in keyof (boolean extends (JSX.ElementChildrenAttribute extends never ? true : false) ? never : JSX.ElementChildrenAttribute)]?: S;
};
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=AnimatedClock.vue.d.ts.map