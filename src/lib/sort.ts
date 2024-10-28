export type SortOrder = 'ascending' | 'descending';

export function compareWithNull<T>(a: T | undefined | null, b: T | undefined | null, order?: SortOrder): number {
  const aIsNaN = typeof a === 'number' && Number.isNaN(a);
  const bIsNaN = typeof b === 'number' && Number.isNaN(b);

  if (aIsNaN && bIsNaN) return 0;
  if (aIsNaN) return 1;
  if (bIsNaN) return -1;

  if (a == null && b == null) return 0;
  if (a == null) return 1;
  if (b == null) return -1;

  if (a < b) {
    return order === 'descending' ? 1 : -1;
  }

  if (a > b) {
    return order === 'descending' ? -1 : 1;
  }

  return 0;
}
