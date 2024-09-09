/**
 * @vitest-environment happy-dom
 */
import { nextTick, shallowRef, render, h, type ShallowRef } from 'vue';
import { nextTwoTick } from '../utils';
import { useMutationObserver } from '@/lib/use';

describe('useMutationObserver', () => {
  test('use', async () => {
    let counter = 0;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const divRef = shallowRef<HTMLElement>(div);

    useMutationObserver(
      divRef,
      () => {
        counter++;
      },
      { childList: true, subtree: true, characterData: true },
    );

    expect(counter).toBe(0);
    div.innerText = 'foo';
    await nextTwoTick();
    expect(counter).toBe(1);
  });

  test('use with pause and resume', async () => {
    let counter = 0;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const divRef = shallowRef<HTMLElement>(div);

    const { pause, resume } = useMutationObserver(
      divRef,
      () => {
        counter++;
      },
      { childList: true, subtree: true, characterData: true },
    );

    expect(counter).toBe(0);
    pause();
    div.innerText = 'foo';
    await nextTwoTick();
    expect(counter).toBe(0);

    resume();
    div.innerText = 'bar';
    await nextTwoTick();
    expect(counter).toBe(1);
  });

  test('use with nullable target', async () => {
    let counter = 0;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const divRef = shallowRef<HTMLElement>();

    useMutationObserver(
      divRef,
      () => {
        counter++;
      },
      { childList: true, subtree: true, characterData: true },
    );

    expect(counter).toBe(0);

    divRef.value = div;
    await nextTick();
    div.innerText = 'foo';
    await nextTwoTick();
    expect(counter).toBe(1);
  });

  test('use with template key', async () => {
    let counter = 0;
    const key = 'refKey';
    let keyRef: Readonly<ShallowRef<HTMLElement | null | undefined>>;

    const Comp = {
      setup() {
        keyRef = useMutationObserver(
          key,
          () => {
            counter++;
          },
          { childList: true, subtree: true, characterData: true },
        ).targetRef;
      },
      render: () => h('div', { ref: key }),
    };

    render(h(Comp), document.body);
    expect(counter).toBe(0);

    await nextTick();
    keyRef!.value!.innerText = 'foo';
    await nextTwoTick();
    expect(counter).toBe(1);
  });
});
