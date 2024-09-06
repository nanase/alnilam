import { useTheme as useVuetifyTheme } from 'vuetify';
export declare const VuetifyColorSchemeName = "vuetify-color-scheme";
export type PrefersColorScheme = 'unspecified' | 'light' | 'dark';
export type ThemeInstance = ReturnType<typeof useVuetifyTheme>;
export declare function useTheme(): ThemeInstance;
export declare function applyColorScheme(theme: ThemeInstance, scheme: PrefersColorScheme): void;
export declare function getPrefersColorScheme(): PrefersColorScheme;
export declare function toggleTheme(theme: ThemeInstance): void;
export declare function reapplyTheme(theme: ThemeInstance): void;
//# sourceMappingURL=theme.d.ts.map