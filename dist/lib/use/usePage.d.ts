import { MaybeRefOrGetter } from '@vueuse/core';
import { Page, PageSection } from '../page';
declare global {
    interface Window {
        pageId?: string;
    }
}
export declare function usePage(pageId: MaybeRefOrGetter<string | undefined>, pageSections: MaybeRefOrGetter<readonly PageSection[]>): {
    pageId: import('vue').Ref<string | undefined, string | undefined>;
    section: import('vue').ComputedRef<PageSection | undefined>;
    page: import('vue').ComputedRef<Page | undefined>;
};
//# sourceMappingURL=usePage.d.ts.map