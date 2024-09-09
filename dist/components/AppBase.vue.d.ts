declare function __VLS_template(): {
    slots: {
        drawer?(_: {
            opened: boolean | undefined;
        }): any;
        errorSnackbar?(_: {}): any;
        appbarPrepend?(_: {}): any;
        appbarAppend?(_: {}): any;
        toolbarPrepend?(_: {}): any;
        toolbarAppend?(_: {}): any;
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<{
    toolbarTitle?: string;
}, {
    showErrorSnackbar: () => void;
    closeErrorSnackbar: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
    toolbarTitle?: string;
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
//# sourceMappingURL=AppBase.vue.d.ts.map