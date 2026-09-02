type __VLS_Props = {
    toolbarTitle?: string;
};
type __VLS_ModelProps = {
    'errorSnackbarShown'?: boolean;
};
type __VLS_PublicProps = __VLS_PropsChildren<__VLS_Slots> & __VLS_Props & __VLS_ModelProps;
declare var __VLS_8: {}, __VLS_16: {}, __VLS_39: {}, __VLS_47: {}, __VLS_50: {}, __VLS_57: {}, __VLS_59: {}, __VLS_67: {}, __VLS_69: {}, __VLS_71: {};
type __VLS_Slots = {} & {
    mainPrepend?: (props: typeof __VLS_8) => any;
} & {
    errorSnackbar?: (props: typeof __VLS_16) => any;
} & {
    appbarPrepend?: (props: typeof __VLS_39) => any;
} & {
    appbarAppend?: (props: typeof __VLS_47) => any;
} & {
    toolbarPrepend?: (props: typeof __VLS_50) => any;
} & {
    toolbarAppend?: (props: typeof __VLS_57) => any;
} & {
    header?: (props: typeof __VLS_59) => any;
} & {
    default?: (props: typeof __VLS_67) => any;
} & {
    footer?: (props: typeof __VLS_69) => any;
} & {
    mainAppend?: (props: typeof __VLS_71) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_PublicProps, {
    /**
     * @deprecated Model `errorSnackbarShown` should be used instead of this function.
     */
    showErrorSnackbar: () => void;
    /**
     * @deprecated Model `errorSnackbarShown` should be used instead of this function.
     */
    closeErrorSnackbar: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:errorSnackbarShown": (value: boolean | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:errorSnackbarShown"?: ((value: boolean | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
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
//# sourceMappingURL=AppBase.vue.d.ts.map