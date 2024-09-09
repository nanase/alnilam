/**
 * @vitest-environment happy-dom
 */
import { useIntervalFetch } from '@/lib/use/useIntervalFetch';
import { type MockInstance } from 'vitest';
import { wait, nextTwoTick } from '../utils';

describe('useIntervalFetch', () => {
  let fetchSpy: MockInstance<any>;
  beforeEach(() => {
    fetchSpy = vi.spyOn(global, 'fetch').mockImplementation(async () => new Response('hello', { status: 200 }));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should call fetch repeatedly', async () => {
    const { statusCode, data } = useIntervalFetch('https://example.com', 100);

    await nextTwoTick();
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(data.value).toBe('hello');
    expect(statusCode.value).toBe(200);

    await wait(100);
    expect(fetchSpy).toHaveBeenCalledTimes(2);
    expect(data.value).toBe('hello');
    expect(statusCode.value).toBe(200);
  });

  it('should return valid fetchedAt after fetch', async () => {
    const { fetchedAt } = useIntervalFetch('https://example.com', 1000);

    expect(fetchedAt.value.isValid()).toBeFalsy();
    await nextTwoTick();
    expect(fetchedAt.value.isValid()).toBeTruthy();
  });
});
