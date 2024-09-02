import { Rules } from '@/lib/inputRule';

describe('required', () => {
  test('with string', () => {
    expect(Rules.required('abc')).toBeTruthy();
  });

  test('with empty string', () => {
    expect(Rules.required('')).toBeTypeOf('string');
  });
});

describe('value', () => {
  test('with valid value', () => {
    expect(Rules.value('1')).toBeTruthy();
    expect(Rules.value('1.23k')).toBeTruthy();
    expect(Rules.value('-0.05G')).toBeTruthy();
  });

  test('with invalid value', () => {
    expect(Rules.value('')).toBeTypeOf('string');
    expect(Rules.value('abc')).toBeTypeOf('string');
  });
});

describe('notZero', () => {
  test('with not zero', () => {
    expect(Rules.notZero('1')).toBeTruthy();
    expect(Rules.notZero('1.23')).toBeTruthy();
    expect(Rules.notZero('-0.05')).toBeTruthy();
  });

  test('with zero', () => {
    expect(Rules.notZero('0')).toBeTypeOf('string');
    expect(Rules.notZero('0.0')).toBeTypeOf('string');
    expect(Rules.notZero('-0.0')).toBeTypeOf('string');
  });
});

describe('notNegative', () => {
  test('with positive value', () => {
    expect(Rules.notNegative('1')).toBeTruthy();
    expect(Rules.notNegative('1.23k')).toBeTruthy();
  });

  test('with negative value', () => {
    expect(Rules.notNegative('-0.05G')).toBeTypeOf('string');
    expect(Rules.notNegative('')).toBeTypeOf('string');
    expect(Rules.notNegative('abc')).toBeTypeOf('string');
  });
});
