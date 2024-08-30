import { deepAssign, RawObject, ternary } from '@/lib/object';

describe('deepAssign', () => {
  test('assign empty object to empty object', () => {
    expect(deepAssign({}, {})).toStrictEqual({});
  });

  test('assign object to empty object', () => {
    expect(deepAssign({}, { a: 1, b: 2 })).toStrictEqual({ a: 1, b: 2 });
  });

  test('assign empty object to object', () => {
    expect(deepAssign({ a: 1, b: 2 }, {})).toStrictEqual({ a: 1, b: 2 });
  });

  test('assign raw object to object', () => {
    expect(deepAssign({ a: 1, b: 2 }, { b: new RawObject({ c: 3 }) })).toStrictEqual({ a: 1, b: { c: 3 } });
  });

  test('assign function to object', () => {
    const func = () => {};
    expect(deepAssign({ a: 1, b: 2 }, { b: new RawObject(func) })).toStrictEqual({ a: 1, b: func });
  });

  test('assign object to nested object', () => {
    expect(deepAssign({ a: 1, b: { c: 2 } }, { b: { c: 3 } })).toStrictEqual({ a: 1, b: { c: 3 } });
  });

  test('assign null object to object', () => {
    expect(deepAssign({ a: 1, b: 2 }, { b: null })).toStrictEqual({ a: 1, b: null });
  });
});

describe('ternary', () => {
  test('when condition is truthy', () => {
    expect(ternary(true, 0, 1, 2)).toBe(0);
  });

  test('when condition is falsy', () => {
    expect(ternary(false, 0, 1, 2)).toBe(1);
  });

  test('when condition is nullish', () => {
    expect(ternary(undefined, 0, 1, 2)).toBe(2);
    expect(ternary(null, 0, 1, 2)).toBe(2);
  });
});
