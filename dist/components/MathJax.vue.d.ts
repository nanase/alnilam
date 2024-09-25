declare global {
    interface Window {
        MathJax: {
            typesetPromise: (nodes?: Iterable<Node>) => Promise<void>;
            typesetClear: (nodes?: Iterable<Node>) => Promise<void>;
        };
    }
}
declare function typeset(): Promise<void>;
declare function __VLS_template(): {
    slots: {
        default?(_: {}): any;
    };
    refs: {
        raw: HTMLSpanElement;
        formula: unknown;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    tag?: string;
    node?: boolean;
    block?: boolean;
    overlook?: boolean;
}, {
    typeset: typeof typeset;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    tag?: string;
    node?: boolean;
    block?: boolean;
    overlook?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
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
//# sourceMappingURL=MathJax.vue.d.ts.map