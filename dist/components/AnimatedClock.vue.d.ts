import { Dayjs } from '../lib/dayjs';
declare function __VLS_template(): {
    timezone?(_: {}): any;
    date?(_: {}): any;
    time?(_: {
        style: string;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<{
    time?: Dayjs;
    updateInterval?: number;
    stop?: boolean;
    stopAnimation?: boolean;
    hideDate?: boolean;
    hideTime?: boolean;
    hideTimezone?: boolean;
    hideSeconds?: boolean;
}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    time?: Dayjs;
    updateInterval?: number;
    stop?: boolean;
    stopAnimation?: boolean;
    hideDate?: boolean;
    hideTime?: boolean;
    hideTimezone?: boolean;
    hideSeconds?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;

type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
        $props: __VLS_PropsChildren<S>;
    };
};
type __VLS_PropsChildren<S> = {
    [K in keyof (boolean extends (JSX.ElementChildrenAttribute extends never ? true : false) ? never : JSX.ElementChildrenAttribute)]?: S;
};
//# sourceMappingURL=AnimatedClock.vue.d.ts.map