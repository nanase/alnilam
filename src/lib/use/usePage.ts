import { computed, type MaybeRefOrGetter, ref, toRef, toValue } from 'vue';
import type { Page, PageSection } from '../page';

declare global {
  interface Window {
    pageId?: string;
  }
}

export function usePage(
  pageId: MaybeRefOrGetter<string | undefined>,
  pageSections: MaybeRefOrGetter<readonly PageSection[]>,
) {
  const pageIdRef = pageId ? toRef(pageId) : ref<string | undefined>(window.pageId);

  const section = computed<PageSection | undefined>(() =>
    toValue(pageSections).find((section) => section.pages.some((page) => page.id === pageIdRef.value)),
  );
  const page = computed<Page | undefined>(() => section.value?.pages.find((page) => page.id === pageIdRef.value));

  return {
    pageId: pageIdRef,
    section,
    page,
  };
}
