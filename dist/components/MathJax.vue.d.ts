type __VLS_Props = {
    tag?: string;
    node?: boolean;
    block?: boolean;
    overlook?: boolean;
};
declare global {
    interface Window {
        MathJax: {
            typesetPromise: (nodes?: Iterable<Node>) => Promise<void>;
            typesetClear: (nodes?: Iterable<Node>) => Promise<void>;
        };
    }
}
declare function typeset(): Promise<void>;
type __VLS_PublicProps = __VLS_PropsChildren<__VLS_Slots> & __VLS_Props;
declare var __VLS_8: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_PublicProps, {
    typeset: typeof typeset;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
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
//# sourceMappingURL=MathJax.vue.d.ts.map