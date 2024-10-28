export function findBy<K extends PropertyKey, T extends Record<K, unknown>, ValueType>(
  key: K,
  value: ValueType,
  array: Array<T>,
): T | null {
  for (const element of array) {
    if (typeof element[key] === 'undefined') continue;
    if (element[key] === value) return element;
  }
  return null;
}

export function mergeArrayBy<K extends PropertyKey, T1 extends Record<K, unknown>, T2 extends Record<K, unknown>>(
  key: K,
  array1: T1[],
  array2: T2[],
): Array<T1 & T2> {
  return array1
    .map((element) => {
      const obj1 = findBy(key, element[key], array1);
      const obj2 = findBy(key, element[key], array2);

      if (obj1 == null || obj2 == null) return null;

      return { ...obj1, ...obj2 };
    })
    .filter((e): e is NonNullable<typeof e> => e !== null);
}

export function sum(array: number[]): number;
export function sum<T>(array: T[], key?: (element: T) => number): number;
export function sum<T>(array: T[], key?: (element: T) => number): number {
  if (key == null) {
    return array.reduce((prev, element) => prev + Number(element), 0);
  }

  return array.reduce((prev, element) => prev + key(element), 0);
}

export function empty<T>(array: string | T[] | undefined | null): boolean {
  return array == null || array.length === 0;
}

export function existsDuplicate<T>(array: T[]): boolean {
  return array.some((element, index) => array.indexOf(element) !== index);
}

export function count<T>(array?: T[], condition?: (element: T, index: number, array: T[]) => boolean): number {
  if (!array) {
    return 0;
  }

  if (!condition) {
    return array.length;
  }

  let c = 0;
  let index = 0;

  for (const element of array) {
    if (condition(element, index, array)) {
      c++;
    }

    index++;
  }

  return c;
}

export function sequence(start: number, end?: number): number[] {
  if (typeof end === 'undefined') {
    const array = Array(start);
    let i = 0;

    while (i < start) {
      array[i] = i++;
    }

    return array;
  }

  const array = Array(end - start);
  let i = 0;
  let j = start;

  while (j < end) {
    array[i++] = j++;
  }

  return array;
}

export function divide(value: number, divider: number): number[] {
  const array = Array(divider);
  let i = 0;

  while (i < divider) {
    array[i] = (value / divider) * i++;
  }

  return array;
}

export function findMinMax(array: Iterable<number>): { max: number; min: number; maxIndex: number; minIndex: number } {
  let max = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;
  let maxIndex = -1;
  let minIndex = -1;
  let i = 0;

  for (const value of array) {
    if (value > max) {
      max = value;
      maxIndex = i;
    }

    if (value < min) {
      min = value;
      minIndex = i;
    }

    i++;
  }

  return { max, min, maxIndex, minIndex };
}

export function* generateForDepth<T>(array: Array<T>, depth: number): Iterable<Array<T>> {
  const n = array.length;
  const indices = Array(depth).fill(0);

  while (true) {
    yield indices.map((i) => array[i]);

    let i = depth - 1;

    while (i >= 0) {
      indices[i]++;

      if (indices[i] < n) {
        break;
      }

      indices[i] = 0;
      i--;
    }

    if (i < 0) {
      break;
    }
  }
}

export function moveAbove<T>(array: T[], element: T): void {
  const index = array.indexOf(element);

  if (index > 0) {
    array.splice(index, 1);
    array.splice(index - 1, 0, element);
  }
}

export function moveBelow<T>(array: T[], element: T): void {
  const index = array.indexOf(element);

  if (index !== -1 && index < array.length - 1) {
    array.splice(index, 1);
    array.splice(index + 1, 0, element);
  }
}
