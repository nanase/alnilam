/**
 * @vitest-environment happy-dom
 */
import { wait } from '../utils';
import { useElapsedTime } from '@/lib/use';

describe('useElapsedTime', () => {
  test('useElapsedTime', async () => {
    const elapsedTime = useElapsedTime(undefined, 50, 'ms');
    expect(elapsedTime.value).toBeLessThanOrEqual(50);

    await wait(300);
    expect(elapsedTime.value).toBeGreaterThanOrEqual(250);
  });
});
