/**
 * @vitest-environment happy-dom
 */

import { useElapsedTime } from '@/lib/use';
import { wait } from '../utils';

describe('useElapsedTime', () => {
  test('useElapsedTime', async () => {
    const elapsedTime = useElapsedTime(undefined, 50, 'ms');
    expect(elapsedTime.value).toBeLessThanOrEqual(50);

    await wait(300);
    expect(elapsedTime.value).toBeGreaterThanOrEqual(250);
  });
});
