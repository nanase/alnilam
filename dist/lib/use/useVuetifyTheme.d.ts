export interface UseVuetifyThemeOptions {
    immediate?: boolean;
}
export declare function useVuetifyTheme(options?: UseVuetifyThemeOptions): {
    readonly theme: import('vuetify').ThemeInstance;
    readonly reapply: () => void;
    readonly toggle: () => void;
    readonly isDark: import('vue').WritableComputedRef<boolean, boolean>;
};
//# sourceMappingURL=useVuetifyTheme.d.ts.map