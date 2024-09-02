import { withCommas } from '@/lib/number';

describe('withCommas', () => {
  test('with number', () => {
    expect(withCommas(1)).toEqual('1');
    expect(withCommas(1000)).toEqual('1,000');
    expect(withCommas(1000000)).toEqual('1,000,000');
    expect(withCommas(0.001)).toEqual('0.001');
  });

  test('with empty', () => {
    expect(withCommas()).toEqual('');
  });
});
