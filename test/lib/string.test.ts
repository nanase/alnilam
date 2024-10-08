import { escapeRegex, unescapeHtml } from '@/lib/string';

describe('escapeRegex', () => {
  test('with regex text includes unescaped char', () => {
    expect(escapeRegex('/-\\^$*+?.()|[]{}')).toEqual('\\/\\-\\\\\\^\\$\\*\\+\\?\\.\\(\\)\\|\\[\\]\\{\\}');
  });
});

describe('unescapeHtml', () => {
  test('with text includes escaped char', () => {
    expect(unescapeHtml('&amp;&colon;&apos;&quot;&lt;&gt;&#x6e;&#109;')).toEqual(`&:'"<>nm`);
  });

  test('with text includes invalid escaped char', () => {
    expect(unescapeHtml('&foo;&quot')).toEqual('&foo;&quot');
    expect(unescapeHtml('&&;&#xtq;&#-105;')).toEqual('&&;&#xtq;&#-105;');
  });
});
