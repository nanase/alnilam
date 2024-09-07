/**
 * @vitest-environment happy-dom
 */
import { ref } from 'vue';
import { mount } from '@vue/test-utils';
import IntervalFnWithPauserTest from './IntervalFnWithPauserTest.vue';
import { wait } from '../utils';

describe('useIntervalFnWithPauser', () => {
  test('call useIntervalFnWithPauser', async () => {
    let callCount = 0;
    const pauser = ref<boolean>(false);
    mount(IntervalFnWithPauserTest, {
      props: {
        cb: () => {
          callCount++;
        },
        pauser,
        interval: 25,
      },
    });

    expect(callCount).toBe(0);
    await wait(30);
    expect(callCount).toBe(1);

    pauser.value = true; // internal timer paused
    await wait(30);
    expect(callCount).toBe(1);
  });

  test('call useIntervalFnWithPauser with immediate set to false', async () => {
    let callCount = 0;
    const pauser = ref<boolean>(false);
    mount(IntervalFnWithPauserTest, {
      props: {
        cb: () => {
          callCount++;
        },
        pauser,
        interval: 25,
        options: { immediate: false }, // internal timer paused
      },
    });

    expect(callCount).toBe(0);
    await wait(30);
    expect(callCount).toBe(0);

    pauser.value = true; // internal timer paused (not affected)
    await wait(30);
    expect(callCount).toBe(0);

    pauser.value = false; // internal timer resumed
    await wait(30);
    expect(callCount).toBe(1);
  });
});
