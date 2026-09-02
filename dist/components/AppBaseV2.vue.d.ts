import { PageSection } from '../lib/page';
type __VLS_Props = {
    pageId?: string;
    pageSections: readonly PageSection[];
    title?: string;
    icon?: string;
};
type __VLS_ModelProps = {
    'errorSnackbarShown'?: boolean;
};
type __VLS_PublicProps = __VLS_PropsChildren<__VLS_Slots> & __VLS_Props & __VLS_ModelProps;
declare var __VLS_20: {
    currentPage: import('../lib/page').Page | undefined;
}, __VLS_28: {}, __VLS_80: {}, __VLS_96: {}, __VLS_118: {}, __VLS_126: {}, __VLS_128: {}, __VLS_130: {};
type __VLS_Slots = {} & {
    drawerMenu?: (props: typeof __VLS_20) => any;
} & {
    errorSnackbar?: (props: typeof __VLS_28) => any;
} & {
    appbarPrepend?: (props: typeof __VLS_80) => any;
} & {
    appbarAppend?: (props: typeof __VLS_96) => any;
} & {
    header?: (props: typeof __VLS_118) => any;
} & {
    default?: (props: typeof __VLS_126) => any;
} & {
    footer?: (props: typeof __VLS_128) => any;
} & {
    mainAppend?: (props: typeof __VLS_130) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
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
//# sourceMappingURL=AppBaseV2.vue.d.ts.map