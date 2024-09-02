import { WorkerManager } from '@/lib/worker';

interface TestParameter {
  type: 'resolve' | 'reject';
  data: object;
}

class TestWorker implements Worker {
  onmessage: ((this: Worker, ev: MessageEvent) => any) | null = null;
  onmessageerror: ((this: Worker, ev: MessageEvent) => any) | null = null;
  onerror: ((this: AbstractWorker, ev: ErrorEvent) => any) | null = null;

  postMessage(message: any, transfer: Transferable[]): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
  postMessage(message: TestParameter, _options?: unknown): void {
    if (message.type === 'resolve') {
      this.onmessage?.(new MessageEvent<object>('test', { data: message.data }));
    } else {
      this.onmessageerror?.(new MessageEvent('errorTest', { data: message.data }));
    }
  }

  terminate(): void {}

  addEventListener<K extends keyof WorkerEventMap>(
    type: K,
    listener: (this: Worker, ev: WorkerEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(_type: unknown, _listener: unknown, _options?: unknown): void {}

  removeEventListener<K extends keyof WorkerEventMap>(
    type: K,
    listener: (this: Worker, ev: WorkerEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(_type: unknown, _listener: unknown, _options?: unknown): void {}

  dispatchEvent(_event: Event): boolean {
    return true;
  }
}

describe('invoke', () => {
  test('successful invoke', async () => {
    const workerManager = new WorkerManager<TestParameter, object>(TestWorker);
    const data = { foo: 'bar' };
    await expect(workerManager.invoke({ type: 'resolve', data })).resolves.toStrictEqual(data);
  });

  test('failure invoke', async () => {
    const workerManager = new WorkerManager<TestParameter, object>(TestWorker);
    const data = { foo: 'bar' };
    await expect(workerManager.invoke({ type: 'reject', data })).rejects.toThrowError();
  });
});

describe('worker', () => {
  test('get worker instance', () => {
    const workerManager = new WorkerManager(TestWorker);
    expect(workerManager.worker).toBeInstanceOf(TestWorker);
  });
});
