import { type ShallowRef, useTemplateRef, watch } from 'vue';

export function useMutationObserver(
  target: Readonly<ShallowRef<HTMLElement | null | undefined>> | string,
  cb: MutationCallback,
  options?: MutationObserverInit,
) {
  const targetRef = typeof target === 'string' ? useTemplateRef<HTMLElement>(target) : target;
  const observer = new MutationObserver(cb);

  function resume() {
    if (targetRef.value) {
      observer.observe(targetRef.value, options);
    }
  }

  function pause() {
    observer.disconnect();
  }

  watch(
    () => targetRef.value,
    () => (targetRef.value ? resume() : pause()),
    { immediate: true },
  );

  return { pause, resume, targetRef };
}
