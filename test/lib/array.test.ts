import {
  empty,
  existsDuplicate,
  findBy,
  mergeArrayBy,
  sum,
  divide,
  sequence,
  count,
  findMinMax,
  generateForDepth,
  moveAbove,
  moveBelow,
} from '@/lib/array';

describe('findBy', () => {
  test('find object', () => {
    const array = [
      { id: 27, name: 'Ken' },
      { id: 32, name: 'John' },
    ];

    expect(findBy('id', 27, array)).toEqual({ id: 27, name: 'Ken' });
  });

  test('find object but key is any', () => {
    const obj: any = { hello: 'world' };
    const array = [
      { [obj]: 27, name: 'Ken' },
      { [obj]: 32, name: 'John' },
    ];

    expect(findBy(obj, 27, array)).toEqual({ [obj]: 27, name: 'Ken' });
  });

  test('find in mismatch object', () => {
    const array = [
      { id: undefined, name: 'Steve' },
      { id: 27, name: 'Ken' },
      { id: 32, name: 'John' },
    ];

    expect(findBy('id', 42, array)).toBeNull();
  });

  test('find in empty object', () => {
    const array: Record<string, number>[] = [];

    expect(findBy('id', 42, array)).toBeNull();
  });
});

describe('mergeArrayBy', () => {
  test('merge another array', () => {
    const array1 = [
      { id: 27, name: 'Ken' },
      { id: 32, name: 'John' },
    ];
    const array2 = [
      { id: 27, age: 33 },
      { id: 32, age: 42 },
    ];

    expect(mergeArrayBy('id', array1, array2)).toEqual([
      { id: 27, name: 'Ken', age: 33 },
      { id: 32, name: 'John', age: 42 },
    ]);
  });

  test('merge mismatch array', () => {
    const array1 = [
      { id: 27, name: 'Ken' },
      { id: 32, name: 'John' },
    ];
    const array2 = [
      { id: 270, age: 33 },
      { id: 320, age: 42 },
    ];

    expect(mergeArrayBy('id', array1, array2)).toEqual([]);
  });
});

describe('sum', () => {
  test('sum object array', () => {
    const array = [
      { id: 27, value: 14 },
      { id: 32, value: 32 },
      { id: 42, value: 25 },
    ];

    expect(sum(array, (e) => e.value)).toBe(71);
  });

  test('sum number array', () => {
    const array = [14, 32, 25];

    expect(sum(array)).toBe(71);
  });

  test('sum empty array', () => {
    const array: number[] = [];

    expect(sum(array)).toBe(0);
  });
});

describe('empty', () => {
  test('empty array', () => {
    expect(empty([])).toBe(true);
  });

  test('not empty array', () => {
    expect(empty([0])).toBe(false);
  });

  test('undefined', () => {
    expect(empty(undefined)).toBe(true);
  });

  test('null', () => {
    expect(empty(null)).toBe(true);
  });

  test('empty string', () => {
    expect(empty('')).toBe(true);
  });
});

describe('existsDuplicate', () => {
  test('duplicate elements', () => {
    expect(existsDuplicate([0, 1, 1, 2])).toBe(true);
  });

  test('unique elements', () => {
    expect(existsDuplicate([0, 1, 2, 3])).toBe(false);
  });

  test('empty array', () => {
    expect(existsDuplicate([])).toBe(false);
  });
});

describe('count', () => {
  test('count for conditions', () => {
    expect(count([0, 1, 2, 3], (v) => v % 2 === 0)).toBe(2);
  });

  test('count array length', () => {
    expect(count([0, 1, 2, 3])).toBe(4);
  });

  test('count empty array', () => {
    expect(count()).toBe(0);
  });
});

describe('sequence', () => {
  test('generate empty array', () => {
    expect(sequence(0)).toStrictEqual([]);
  });

  test('generate sequence array', () => {
    expect(sequence(5)).toStrictEqual([0, 1, 2, 3, 4]);
  });

  test('generate sequence array with start', () => {
    expect(sequence(-2, 2)).toStrictEqual([-2, -1, 0, 1]);
  });
});

describe('divide', () => {
  test('generate empty array', () => {
    expect(divide(0, 0)).toStrictEqual([]);
  });

  test('generate sequence array', () => {
    expect(divide(5, 5)).toStrictEqual([0, 1, 2, 3, 4]);
  });
});

describe('findMinMax', () => {
  test('find minimum and maximum value', () => {
    expect(findMinMax([1, 3, 0, 2])).toEqual({ max: 3, min: 0, maxIndex: 1, minIndex: 2 });
  });

  test('find minimum and maximum value for empty input', () => {
    expect(findMinMax([])).toEqual({ max: -Infinity, min: Infinity, maxIndex: -1, minIndex: -1 });
  });
});

describe('generateForDepth', () => {
  test('find minimum and maximum value', () => {
    expect([...generateForDepth([0, 1, 2], 2)]).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ]);
  });
});

describe('moveAbove', () => {
  test('call with an array and its element', () => {
    const array = [0, 1, 2, 3];
    moveAbove(array, 1);
    expect(array).toEqual([1, 0, 2, 3]);
  });

  test('call with an array and its first element', () => {
    const array = [0, 1, 2, 3];
    moveAbove(array, 0);
    expect(array).toEqual([0, 1, 2, 3]);
  });

  test('call with an array and its non-element value', () => {
    const array = [0, 1, 2, 3];
    moveAbove(array, 4);
    expect(array).toEqual([0, 1, 2, 3]);
  });

  test('call with an array and its element, but length 1', () => {
    const array = [0];
    moveAbove(array, 0);
    expect(array).toEqual([0]);
  });

  test('call with empty array', () => {
    const array: number[] = [];
    moveAbove(array, 0);
    expect(array).toEqual([]);
  });
});

describe('moveBelow', () => {
  test('call with an array and its element', () => {
    const array = [0, 1, 2, 3];
    moveBelow(array, 1);
    expect(array).toEqual([0, 2, 1, 3]);
  });

  test('call with an array and its last element', () => {
    const array = [0, 1, 2, 3];
    moveBelow(array, 3);
    expect(array).toEqual([0, 1, 2, 3]);
  });

  test('call with an array and its non-element value', () => {
    const array = [0, 1, 2, 3];
    moveBelow(array, 4);
    expect(array).toEqual([0, 1, 2, 3]);
  });

  test('call with an array and its element, but length 1', () => {
    const array = [0];
    moveBelow(array, 0);
    expect(array).toEqual([0]);
  });

  test('call with empty array', () => {
    const array: number[] = [];
    moveBelow(array, 0);
    expect(array).toEqual([]);
  });
});
