import { compareWithNull } from '@/lib/sort';

describe('compareWithNull', () => {
  const array = [3, null, 1, Number.NaN, 2, Number.NaN, 1, null, 0];

  test('sort with null by ascending', () => {
    expect(array.sort(compareWithNull)).toEqual([0, 1, 1, 2, 3, null, null, Number.NaN, Number.NaN]);
  });

  test('sort with null by descending', () => {
    expect(array.sort((a, b) => compareWithNull(a, b, 'descending'))).toEqual([
      3,
      2,
      1,
      1,
      0,
      null,
      null,
      Number.NaN,
      Number.NaN,
    ]);
  });

  test('compare by ascending', () => {
    expect(compareWithNull(1, 2, 'ascending')).toEqual(-1);
    expect(compareWithNull(2, 1, 'ascending')).toEqual(1);
  });

  test('compare by descending', () => {
    expect(compareWithNull(1, 2, 'descending')).toEqual(1);
    expect(compareWithNull(2, 1, 'descending')).toEqual(-1);
  });
});
