import { PageSection } from '../lib/page';
declare let __VLS_typeProps: {
    pageId?: string;
    pageSections: readonly PageSection[];
    title?: string;
    icon?: string;
};
type __VLS_PublicProps = {
    'errorSnackbarShown'?: boolean;
} & typeof __VLS_typeProps;
declare function __VLS_template(): {
    slots: {
        drawerMenu?(_: {
            currentPage: import('../lib/page').Page | undefined;
        }): any;
        errorSnackbar?(_: {}): any;
        appbarPrepend?(_: {}): any;
        appbarAppend?(_: {}): any;
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
        mainAppend?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
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
//# sourceMappingURL=AppBaseV2.vue.d.ts.map