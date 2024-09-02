/**
 * @vitest-environment happy-dom
 */
import { storage } from '@/lib/vue';
import { ref, nextTick } from 'vue';
import { mount } from '@vue/test-utils';
import PeriodicCallTest from './PeriodicCallTest.vue';

describe('definePeriodicCall', () => {
  test('call periodically', async () => {
    let callCount = 0;
    const wrapper = mount(PeriodicCallTest, {
      props: {
        onCalled: () => {
          callCount++;
          return 0.05;
        },
      },
    });

    await nextTick();
    expect(callCount).toBe(1);
    await new Promise((resolve) => setTimeout(resolve, 75));
    expect(callCount).toBe(2);
    wrapper.unmount();
    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(callCount).toBe(2);
  });

  test('stop call after unmounted', async () => {
    let callCount = 0;
    const wrapper = mount(PeriodicCallTest, {
      props: {
        onCalled: () => {
          callCount++;
          return 0.05;
        },
      },
    });

    wrapper.unmount();
    await nextTick();
    await new Promise((resolve) => setTimeout(resolve, 25));
    expect(callCount).toBe(1);
  });

  test('call error handler', async () => {
    let callCount = 0;
    let errorCount = 0;
    mount(PeriodicCallTest, {
      props: {
        onCalled: () => {
          callCount++;

          if (errorCount === 0) {
            throw new Error();
          }
        },
        onError: () => {
          errorCount++;
          return 0.05;
        },
      },
    });

    await nextTick();
    expect(callCount).toBe(1);
    expect(errorCount).toBe(1);
    await new Promise((resolve) => setTimeout(resolve, 75));

    expect(callCount).toBe(2);
    expect(errorCount).toBe(1);
  });
});

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  test('when storage is not used', () => {
    const text = ref<string>('foo');
    storage(text, 'text');
    expect(text.value).toEqual('foo');
    expect(localStorage.getItem('text')).toEqual(JSON.stringify('foo'));
  });

  test('when storage is used', () => {
    localStorage.setItem('text', JSON.stringify('bar'));
    const text = ref<string>('foo');
    storage(text, 'text');
    expect(text.value).toEqual('bar');
    expect(localStorage.getItem('text')).toEqual(JSON.stringify('bar'));
  });

  test('watching change', async () => {
    const text = ref<string>('foo');
    storage(text, 'text');
    text.value = 'bar';
    await nextTick();

    expect(localStorage.getItem('text')).toEqual(JSON.stringify('bar'));
  });

  test('suppress watching change', () => {
    const text = ref<string>('foo');
    const { save } = storage(text, 'text', { writable: false });
    text.value = 'bar';

    expect(localStorage.getItem('text')).toBeNull();

    save();
    expect(localStorage.getItem('text')).toEqual(JSON.stringify('bar'));
  });

  test('suppress auto load', async () => {
    localStorage.setItem('text', JSON.stringify('bar'));
    const text = ref<string>('foo');
    const { load } = storage(text, 'text', { readable: false });

    expect(text.value).toEqual('foo');

    load();
    expect(text.value).toEqual('bar');
  });

  test('suppress initial set', async () => {
    const text = ref<string>('foo');
    storage(text, 'text', { readable: false });

    expect(localStorage.getItem('text')).toBeNull();

    text.value = 'bar';
    await nextTick();
    expect(localStorage.getItem('text')).toEqual(JSON.stringify('bar'));
  });

  test('remove from storage', () => {
    const text = ref<string>('foo');
    const { remove } = storage(text, 'text');
    remove();
    expect(localStorage.getItem('text')).toBeNull();
  });

  test('save to session storage', () => {
    const text = ref<string>('foo');
    storage(text, 'text', { type: 'session' });

    expect(localStorage.getItem('text')).toBeNull();
    expect(sessionStorage.getItem('text')).toEqual(JSON.stringify('foo'));
  });
});
