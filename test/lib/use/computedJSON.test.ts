import { ref } from 'vue';
import { computedJSON } from '@/lib/use';

describe('computedJSON', () => {
  test('call computedJSON', async () => {
    const objectA = { foo: 'bar' };
    const objectB = { foo: 'baz' };

    const source = ref<typeof objectA>(objectA);
    const sourceJson = computedJSON(source);

    expect(sourceJson.value).toEqual(JSON.stringify(objectA));

    sourceJson.value = JSON.stringify(objectB);
    expect(source.value).toEqual(objectB);
  });
});
