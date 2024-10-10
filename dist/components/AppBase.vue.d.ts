declare let __VLS_typeProps: {
    toolbarTitle?: string;
};
type __VLS_PublicProps = {
    'errorSnackbarShown'?: boolean;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: {
        mainPrepend?(_: {}): any;
        errorSnackbar?(_: {}): any;
        appbarPrepend?(_: {}): any;
        appbarAppend?(_: {}): any;
        toolbarPrepend?(_: {}): any;
        toolbarAppend?(_: {}): any;
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
        mainAppend?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {
    /**
     * @deprecated Model `errorSnackbarShown` should be used instead of this function.
     */
    showErrorSnackbar: () => void;
    /**
     * @deprecated Model `errorSnackbarShown` should be used instead of this function.
     */
    closeErrorSnackbar: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:errorSnackbarShown": (errorSnackbarShown: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:errorSnackbarShown"?: ((errorSnackbarShown: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
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