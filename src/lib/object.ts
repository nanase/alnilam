export class RawObject {
  constructor(readonly obj: object) {}
}

type SourceType = {
  [Key: string]:
    | boolean
    | number
    | string
    | undefined
    | null
    | symbol
    | bigint
    | RawObject
    | Array<unknown>
    | SourceType;
};

/**
 * @deprecated `_.merge` should be used instead of this function.
 */
export function deepAssign<T>(target: T, source: SourceType): T {
  if (typeof target !== 'undefined' && target != null) {
    for (const key of Object.keys(source)) {
      if (source[key] instanceof RawObject) {
        // biome-ignore lint/suspicious/noExplicitAny: The function is no longer maintained.
        (target as any)[key] = source[key].obj;
      } else if (source[key] === null) {
        // biome-ignore lint/suspicious/noExplicitAny: The function is no longer maintained.
        (target as any)[key] = null;
      } else if (!Array.isArray(source[key]) && typeof source[key] === 'object') {
        // biome-ignore lint/suspicious/noExplicitAny: The function is no longer maintained.
        (target as any)[key] = deepAssign((target as any)[key], source[key]);
      } else {
        // biome-ignore lint/suspicious/noExplicitAny: The function is no longer maintained.
        (target as any)[key] = source[key];
      }
    }
  }

  return target;
}

export function ternary<T>(condition: boolean | undefined | null, truthy: T, falsy: T, nullish: T): T {
  if (typeof condition === 'undefined' || condition == null) {
    return nullish;
  }

  return condition ? truthy : falsy;
}

// from: https://stackoverflow.com/a/47232883
export function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;
export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
export function pick<T, K extends keyof T>(obj: T, ...keysOrArray: unknown[]): Pick<T, K> {
  const ret: Partial<Pick<T, K>> = {};
  const keys: K[] = Array.isArray(keysOrArray[0]) ? keysOrArray[0] : keysOrArray;

  for (const key of keys) {
    ret[key] = obj[key];
  }

  return ret as Pick<T, K>;
}

export function omit<T, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K>;
export function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
export function omit<T, K extends keyof T>(obj: T, ...keysOrArray: unknown[]): Omit<T, K> {
  const ret: T = { ...obj };
  const keys: K[] = Array.isArray(keysOrArray[0]) ? keysOrArray[0] : keysOrArray;

  for (const key of keys) {
    delete ret[key];
  }

  return ret;
}
