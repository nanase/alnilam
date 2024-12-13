import { type SIPrefixSymbol, SIValue } from '@/lib/siPrefix';

describe('actualValue', () => {
  test('Get actual value', () => {
    expect(new SIValue(1, SIValue.getPrefix('k')).actualValue).toBe(1e3);
    expect(new SIValue(5, SIValue.getPrefix('M')).actualValue).toBe(5e6);
    expect(new SIValue(0.5, SIValue.getPrefix('G')).actualValue).toBe(0.5e9);

    expect(new SIValue(-1, SIValue.getPrefix('k')).actualValue).toBe(-1e3);
    expect(new SIValue(-5, SIValue.getPrefix('M')).actualValue).toBe(-5e6);
    expect(new SIValue(-0.5, SIValue.getPrefix('G')).actualValue).toBe(-0.5e9);
  });
});

describe('toString', () => {
  test('Convert to string', () => {
    expect(new SIValue(1, SIValue.getPrefix('k')).toString()).toEqual('1k');
    expect(new SIValue(5, SIValue.getPrefix('M')).toString()).toEqual('5M');
    expect(new SIValue(0.5, SIValue.getPrefix('G')).toString()).toEqual('0.5G');

    expect(new SIValue(-1, SIValue.getPrefix('k')).toString()).toEqual('-1k');
    expect(new SIValue(-5, SIValue.getPrefix('M')).toString()).toEqual('-5M');
    expect(new SIValue(-0.5, SIValue.getPrefix('G')).toString()).toEqual('-0.5G');
  });
});

describe('toSimpleString', () => {
  test('Convert to simple string', () => {
    expect(new SIValue(1.000001, SIValue.getPrefix('k')).toSimpleString(1)).toEqual('1k');
    expect(new SIValue(5.000001, SIValue.getPrefix('M')).toSimpleString(2)).toEqual('5M');
    expect(new SIValue(0.5000001, SIValue.getPrefix('G')).toSimpleString(3)).toEqual('0.5G');

    expect(new SIValue(-1.000001, SIValue.getPrefix('k')).toSimpleString(1)).toEqual('-1k');
    expect(new SIValue(-5.000001, SIValue.getPrefix('M')).toSimpleString(2)).toEqual('-5M');
    expect(new SIValue(-0.5000001, SIValue.getPrefix('G')).toSimpleString(3)).toEqual('-0.5G');
  });
});

describe('toFixed', () => {
  test('Convert to string with a parameter of fraction digits', () => {
    expect(new SIValue(1, SIValue.getPrefix('k')).toFixed(1)).toEqual('1.0k');
    expect(new SIValue(5, SIValue.getPrefix('M')).toFixed(2)).toEqual('5.00M');
    expect(new SIValue(0.5, SIValue.getPrefix('G')).toFixed(3)).toEqual('0.500G');

    expect(new SIValue(-1, SIValue.getPrefix('k')).toFixed(1)).toEqual('-1.0k');
    expect(new SIValue(-5, SIValue.getPrefix('M')).toFixed(2)).toEqual('-5.00M');
    expect(new SIValue(-0.5, SIValue.getPrefix('G')).toFixed(3)).toEqual('-0.500G');
  });

  test('Convert to string without a parameter of fraction digits', () => {
    expect(new SIValue(1, SIValue.getPrefix('k')).toFixed()).toEqual('1k');
  });
});

describe('getPrefixSymbols', () => {
  test('Get prefix symbols', () => {
    expect(SIValue.getPrefixSymbols()).toEqual([
      'Q',
      'R',
      'Y',
      'Z',
      'E',
      'P',
      'T',
      'G',
      'M',
      'k',
      '',
      'm',
      'μ',
      'u',
      'n',
      'p',
      'f',
      'a',
      'z',
      'y',
      'r',
      'q',
    ]);
  });

  test('Get all prefix symbols', () => {
    expect(SIValue.getPrefixSymbols(true)).toEqual([
      'Q',
      'R',
      'Y',
      'Z',
      'E',
      'P',
      'T',
      'G',
      'M',
      'k',
      'h',
      'da',
      '',
      'd',
      'c',
      'm',
      'μ',
      'u',
      'n',
      'p',
      'f',
      'a',
      'z',
      'y',
      'r',
      'q',
    ]);
  });
});

describe('test', () => {
  test('Test a valid string contains SIValue', () => {
    expect(SIValue.test('1.0k')).toBeTruthy();
  });

  test('Test an invalid string', () => {
    expect(SIValue.test('')).toBeFalsy();
    expect(SIValue.test(undefined)).toBeFalsy();
    expect(SIValue.test('1.5A')).toBeFalsy();
  });
});

describe('parse', () => {
  test('Parse a valid string contains SIValue', () => {
    expect(SIValue.parse('1.0k')).toStrictEqual(new SIValue(1, SIValue.getPrefix('k')));
  });

  test('Parse an invalid string', () => {
    expect(SIValue.parse('')).toStrictEqual(new SIValue(Number.NaN, SIValue.getPrefix('')));
    expect(SIValue.parse(undefined)).toStrictEqual(new SIValue(Number.NaN, SIValue.getPrefix('')));
    expect(SIValue.parse('1.5A')).toStrictEqual(new SIValue(Number.NaN, SIValue.getPrefix('')));
  });
});

describe('fit', () => {
  test('Fit a large SI prefix', () => {
    expect(SIValue.fit(1e6, ['k', ''])).toStrictEqual(new SIValue(1e3, SIValue.getPrefix('k')));
    expect(SIValue.fit(1e6, ['M', 'k', ''])).toStrictEqual(new SIValue(1, SIValue.getPrefix('M')));
    expect(SIValue.fit(1e6, ['G', 'M', 'k', ''])).toStrictEqual(new SIValue(1, SIValue.getPrefix('M')));

    expect(SIValue.fit(5e6, ['k', ''])).toStrictEqual(new SIValue(5e3, SIValue.getPrefix('k')));
    expect(SIValue.fit(5e6, ['M', 'k', ''])).toStrictEqual(new SIValue(5, SIValue.getPrefix('M')));
    expect(SIValue.fit(5e6, ['G', 'M', 'k', ''])).toStrictEqual(new SIValue(5, SIValue.getPrefix('M')));
  });

  test('Fit a small SI prefix', () => {
    expect(SIValue.fit(1e-9, ['', 'm', 'μ'])).toStrictEqual(new SIValue(1e-3, SIValue.getPrefix('μ')));
    expect(SIValue.fit(1e-9, ['', 'm', 'μ', 'n'])).toStrictEqual(new SIValue(1, SIValue.getPrefix('n')));
    expect(SIValue.fit(1e-9, ['', 'm', 'μ', 'n', 'p'])).toStrictEqual(new SIValue(1, SIValue.getPrefix('n')));

    expect(SIValue.fit(5e-9, ['', 'm', 'μ'])).toStrictEqual(new SIValue(5e-3, SIValue.getPrefix('μ')));
    expect(SIValue.fit(5e-9, ['', 'm', 'μ', 'n'])).toStrictEqual(new SIValue(5, SIValue.getPrefix('n')));
    expect(SIValue.fit(5e-9, ['', 'm', 'μ', 'n', 'p'])).toStrictEqual(new SIValue(5, SIValue.getPrefix('n')));
  });

  test('Fit a base SI prefix', () => {
    expect(SIValue.fit(0, ['G', 'M', 'k', ''])).toStrictEqual(new SIValue(0, SIValue.getPrefix('')));
    expect(SIValue.fit(0, ['G', 'M', 'k'])).toStrictEqual(new SIValue(0, SIValue.getPrefix('')));

    expect(SIValue.fit(0, ['', 'm', 'μ', 'n', 'p'])).toStrictEqual(new SIValue(0, SIValue.getPrefix('')));
    expect(SIValue.fit(0, ['m', 'μ', 'n', 'p'])).toStrictEqual(new SIValue(0, SIValue.getPrefix('')));
  });

  test('Fit with an infinite value', () => {
    expect(SIValue.fit(Number.POSITIVE_INFINITY, [])).toStrictEqual(
      new SIValue(Number.POSITIVE_INFINITY, SIValue.getPrefix('')),
    );
    expect(SIValue.fit(Number.POSITIVE_INFINITY, ['k', ''])).toStrictEqual(
      new SIValue(Number.POSITIVE_INFINITY, SIValue.getPrefix('k')),
    );
    expect(SIValue.fit(Number.NEGATIVE_INFINITY, ['M', 'k', ''])).toStrictEqual(
      new SIValue(Number.NEGATIVE_INFINITY, SIValue.getPrefix('M')),
    );
    expect(SIValue.fit(Number.NaN, ['G', 'M', 'k', ''])).toStrictEqual(new SIValue(Number.NaN, SIValue.getPrefix('G')));
  });

  test('Fit with a negative value', () => {
    expect(SIValue.fit(-1e6, ['k', ''])).toStrictEqual(new SIValue(-1e3, SIValue.getPrefix('k')));
    expect(SIValue.fit(-1e6, ['M', 'k', ''])).toStrictEqual(new SIValue(-1, SIValue.getPrefix('M')));
    expect(SIValue.fit(-1e6, ['G', 'M', 'k', ''])).toStrictEqual(new SIValue(-1, SIValue.getPrefix('M')));
  });
});

describe('fitBy', () => {
  test('Fit a large SI prefix', () => {
    expect(SIValue.fitBy(1e6, 'k')).toStrictEqual(new SIValue(1e3, SIValue.getPrefix('k')));
    expect(SIValue.fitBy(1e6, 'M')).toStrictEqual(new SIValue(1, SIValue.getPrefix('M')));
    expect(SIValue.fitBy(1e6, 'G')).toStrictEqual(new SIValue(1e-3, SIValue.getPrefix('G')));

    expect(SIValue.fitBy(5e6, 'k')).toStrictEqual(new SIValue(5e3, SIValue.getPrefix('k')));
    expect(SIValue.fitBy(5e6, 'M')).toStrictEqual(new SIValue(5, SIValue.getPrefix('M')));
    expect(SIValue.fitBy(5e6, 'G')).toStrictEqual(new SIValue(5e-3, SIValue.getPrefix('G')));
  });

  test('Fit a small SI prefix', () => {
    expect(SIValue.fitBy(1e-9, 'μ')).toStrictEqual(new SIValue(1e-3, SIValue.getPrefix('μ')));
    expect(SIValue.fitBy(1e-9, 'n')).toStrictEqual(new SIValue(1, SIValue.getPrefix('n')));
    expect(SIValue.fitBy(1e-9, 'p')).toEqual({ fraction: expect.closeTo(1e3), prefix: SIValue.getPrefix('p') });

    expect(SIValue.fitBy(5e-9, 'μ')).toStrictEqual(new SIValue(5e-3, SIValue.getPrefix('μ')));
    expect(SIValue.fitBy(5e-9, 'n')).toStrictEqual(new SIValue(5, SIValue.getPrefix('n')));
    expect(SIValue.fitBy(5e-9, 'p')).toStrictEqual(new SIValue(5e3, SIValue.getPrefix('p')));
  });

  test('Fit a base SI prefix', () => {
    expect(SIValue.fitBy(0, 'm')).toStrictEqual(new SIValue(0, SIValue.getPrefix('m')));
    expect(SIValue.fitBy(0, '')).toStrictEqual(new SIValue(0, SIValue.getPrefix('')));
    expect(SIValue.fitBy(0, 'k')).toStrictEqual(new SIValue(0, SIValue.getPrefix('k')));
  });

  test('Fit with an infinite value', () => {
    expect(SIValue.fitBy(Number.POSITIVE_INFINITY, 'm')).toStrictEqual(
      new SIValue(Number.POSITIVE_INFINITY, SIValue.getPrefix('m')),
    );
    expect(SIValue.fitBy(Number.NEGATIVE_INFINITY, '')).toStrictEqual(
      new SIValue(Number.NEGATIVE_INFINITY, SIValue.getPrefix('')),
    );
    expect(SIValue.fitBy(Number.NaN, 'k')).toStrictEqual(new SIValue(Number.NaN, SIValue.getPrefix('k')));
  });

  test('Fit with a negative value', () => {
    expect(SIValue.fitBy(-1e6, 'k')).toStrictEqual(new SIValue(-1e3, SIValue.getPrefix('k')));
    expect(SIValue.fitBy(-1e6, 'M')).toStrictEqual(new SIValue(-1, SIValue.getPrefix('M')));
    expect(SIValue.fitBy(-1e6, 'G')).toStrictEqual(new SIValue(-1e-3, SIValue.getPrefix('G')));
  });
});

describe('getPrefix', () => {
  test('Get existing prefix', () => {
    expect(SIValue.getPrefix('k')).toEqual({ symbol: 'k', exponent: 3 });
    expect(SIValue.getPrefix('M')).toEqual({ symbol: 'M', exponent: 6 });
    expect(SIValue.getPrefix('G')).toEqual({ symbol: 'G', exponent: 9 });

    expect(SIValue.getPrefix('m')).toEqual({ symbol: 'm', exponent: -3 });
    expect(SIValue.getPrefix('μ')).toEqual({ symbol: 'μ', exponent: -6 });
    expect(SIValue.getPrefix('n')).toEqual({ symbol: 'n', exponent: -9 });
  });

  test('Get empty prefix', () => {
    expect(SIValue.getPrefix('')).toEqual({ symbol: '', exponent: 0 });
  });

  test('Error occurs with non-existent prefix', () => {
    expect(() => {
      SIValue.getPrefix('s' as SIPrefixSymbol);
    }).toThrow();
  });
});

describe('successor', () => {
  test('Get next prefix', () => {
    expect(SIValue.successor('k')).toEqual('M');
    expect(SIValue.successor('M')).toEqual('G');
    expect(SIValue.successor('G')).toEqual('T');

    expect(SIValue.successor('Q')).toEqual('Q');

    expect(SIValue.successor('m')).toEqual('');
    expect(SIValue.successor('μ')).toEqual('m');
    expect(SIValue.successor('n')).toEqual('μ');
  });

  test('Get next prefix for all prefixes', () => {
    expect(SIValue.successor('k', true)).toEqual('M');
    expect(SIValue.successor('M', true)).toEqual('G');
    expect(SIValue.successor('G', true)).toEqual('T');

    expect(SIValue.successor('m', true)).toEqual('c');
    expect(SIValue.successor('μ', true)).toEqual('m');
    expect(SIValue.successor('n', true)).toEqual('μ');
  });
});

describe('predecessor', () => {
  test('Get previous prefix', () => {
    expect(SIValue.predecessor('k')).toEqual('');
    expect(SIValue.predecessor('M')).toEqual('k');
    expect(SIValue.predecessor('G')).toEqual('M');

    expect(SIValue.predecessor('m')).toEqual('μ');
    expect(SIValue.predecessor('μ')).toEqual('n');
    expect(SIValue.predecessor('n')).toEqual('p');

    expect(SIValue.predecessor('q')).toEqual('q');
  });

  test('Get previous prefix for all prefixes', () => {
    expect(SIValue.predecessor('k', true)).toEqual('h');
    expect(SIValue.predecessor('M', true)).toEqual('k');
    expect(SIValue.predecessor('G', true)).toEqual('M');

    expect(SIValue.predecessor('m', true)).toEqual('μ');
    expect(SIValue.predecessor('μ', true)).toEqual('n');
    expect(SIValue.predecessor('n', true)).toEqual('p');
  });
});
