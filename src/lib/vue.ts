import { onMounted, onBeforeUnmount, Ref, watch } from 'vue';

export function definePeriodicCall(
  onCalled: () => Promise<number | undefined>,
  onError?: (error: any) => Promise<number | undefined>,
): void {
  let intervalObj: ReturnType<typeof setTimeout>;
  let waitTime: number | undefined;

  const callee = async function () {
    try {
      waitTime = await onCalled();

      if (typeof waitTime !== 'undefined') {
        intervalObj = setTimeout(callee, waitTime * 1000);
      }
    } catch (ex) {
      if (onError) {
        waitTime = await onError(ex);

        if (typeof waitTime !== 'undefined') {
          intervalObj = setTimeout(callee, waitTime * 1000);
        }
      }
    }
  };

  onMounted(async () => {
    await callee();
  });

  onBeforeUnmount(() => {
    clearTimeout(intervalObj);
  });
}

export interface StorageOptions {
  type: 'local' | 'session';
  readable: boolean;
  writable: boolean;
}

export function storage<T>(value: Ref<T>, key: string, options?: Partial<StorageOptions>) {
  const storage = (options?.type ?? 'local') === 'local' ? localStorage : sessionStorage;

  const save = () => {
    if (typeof value.value !== 'undefined') {
      storage.setItem(key, JSON.stringify(value.value));
    }
  };
  const load = () => {
    const data = storage.getItem(key);

    if (data != null) {
      value.value = JSON.parse(data);
    }
  };

  if (options?.readable ?? true) {
    load();
  }

  if (options?.writable ?? true) {
    watch(() => value.value, save, {
      immediate: options?.readable ?? true,
    });
  }

  return {
    remove: () => {
      storage.removeItem(key);
    },
    save,
    load,
  };
}
